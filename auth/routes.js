var crypto = require('crypto');
var express = require('express');

module.exports = function(app) {
  var users = require('./controllers/users_controller');
  var projects = require('./controllers/projects_controller');
  var offers = require('./controllers/offers_controller');
  app.use('/static', express.static( './static')).
      use('/lib', express.static( '../lib')
  );
  app.get('/', function(req, res){
      var signedIn = false;
      if (req.session.user) {
        console.log(req.session.user);
        signedIn = true
      };
      res.render('index', {signedIn: signedIn});
  });
  app.get('/user', function(req, res){
    if (req.session.user) {
      res.render('user', {msg:req.session.msg});
    } else {
      req.session.msg = 'Access denied!';
      res.redirect('/login');
    }
  });
  app.get('/signup', function(req, res){
    if(req.session.user){
      res.redirect('/');
    }
    res.render('signup', {msg:req.session.msg});
  });
  app.get('/login',  function(req, res){
    if(req.session.user){
      res.redirect('/');
    }
    res.render('login', {msg:req.session.msg});
  });

  app.get('/logout', function(req, res){
    req.session.destroy(function(){
      res.redirect('/');
    });
  });

  app.get('/posts-summary', function(req, res) {
    res.send(projects.getSummaries());
  });

  app.get('/project/:postID', function(req, res) {
    res.render('post', projects.getProjectByID(req.params.postID))
  });

  app.get('/create', function(req, res) {
    if (req.session.user) {
      res.render('create');
    } else {
      res.redirect('/');
    }
  })

  app.post('/project', function(req, res) {
    if (req.session.user) {
      var project = {
        author: req.session.username,
        title: req.body.title,
        content: req.body.description,
        offers: []
      };
      var projectID = projects.addProject(project);
      res.send({projectID: projectID});
    }
  });

  app.post('/offer', function(req, res) {
    if (req.session.user) {
      var offer = {
        user: req.session.user,
        type: req.body.type,
        content: req.body.content
      };
      var offerID = offers.addOffer(offer);
      res.send({offerID: offerID});
    }
  });

  app.delete('/offer', function(req, res) {
     
  });

  app.delete('/post', function(req, res) {

  })


  app.post('/signup', users.signup);
  app.post('/user/delete', users.deleteUser);
  app.post('/login', users.login);
  app.get('/user/profile', users.getUserProfile);
  app.get('/user-exists', users.userExists);
}

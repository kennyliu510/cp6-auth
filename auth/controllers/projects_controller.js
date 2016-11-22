var projects = {
  1234: {
    title: "test1",
    author: "todd",
    content: "lorem ipsum",
    offers: [
      "0000"
    ]
  },
  2345: {
    title: "test2",
    author: "a",
    content: "Donde esta la biblioteca, me llamo t-bone la araña discoteca",
    offers: [
      "0020",
      "0021",
      "0022"
    ]
  },
  3456: {
    title: "test3",
    author: "1",
    content: "discoteca, muñeca, la biblioteca",
    offers: [
      "0100"
    ]
  },
  4567: {
    title: "test4",
    author: "bill",
    content: "Oh whaddup",
    offers: [
      "0006",
      "0888"
    ]
  }
}

function generateID() {
  var chars = "0123456789";
  var id = "";
  do {
    for (var i = 0; i < 4; i++) {
      id += chars[Math.floor(Math.random() * 10)];
    }
  } while (projects[id]);
  return id;
}

var offers = require("./offers_controller");

exports.getSummaries = function() {
  var postList = {};
  for (var postID in projects) {
    postList[postID] = {
      title: projects[postID].title,
      author: projects[postID].author,
      numOffers: projects[postID].offers.length
    };
  }
  return postList;
}

exports.getProjectByID = function(id) {
  var project = {
    title: projects[id].title,
    author: projects[id].author,
    content: projects[id].content
  };
  project.offers = offers.getOffersByIDs(projects[id].offers);
  return project;
}

exports.addProject = function(project) {
  var id = generateID();
  projects[id] = project;
  return id;
}

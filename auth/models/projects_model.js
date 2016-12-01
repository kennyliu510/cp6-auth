var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var ProjectSchema = new Schema({
    author: String,
    title: String,
    content: String,
    imageUrl: String,
    offers: [String]
});
mongoose.model('Project', ProjectSchema);

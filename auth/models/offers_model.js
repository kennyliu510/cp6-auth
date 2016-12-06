var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var OfferSchema = new Schema({
    user: String,
    type: String,
    description: String
});
mongoose.model('Offer', OfferSchema);

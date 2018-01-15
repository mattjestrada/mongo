// require the mongoose npm package
var mongoose = require("mongoose");

// create a schema object
var Schema =  mongoose.Schema;
var headlineSchema = new Schema({

    headline: {
        type: String,
        required: true,
        unique: true
    },
    summary: {
        type: String,
        required: true
    },
    date: String,
    saved: {
        type: Boolean,
    default: false
}

});

var Headline = mongoose.model("Headline", headlineSchema);

module.exports  = Headline;
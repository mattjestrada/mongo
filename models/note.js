// require the mongoose npm package
var mongoose = require("mongoose");

// create a schema object
var Schema =  mongoose.Schema;
var noteSchema = new Schema({

    _headline: {
        type: Schema.Types.ObjectId,
        ref: "Headline"
    },
    date: String,
    noteText: String
});

var Note = mongoose.model("Note", noteSchema);

module.exports  = Note;
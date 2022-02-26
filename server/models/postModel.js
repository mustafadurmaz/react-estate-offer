const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    id: Number,
    name: String,
    surname: String,
    email: String,
    tel: String,
    tutar: Number,
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

var PostModel = mongoose.model('PostModel', postSchema);

module.exports = PostModel;
import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    id: Number,
    name: String,
    surname: String,
    email: String,
    tel: Number,
    tutar: Number,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var PostForm = mongoose.model('PostForm', postSchema);

export default PostForm;
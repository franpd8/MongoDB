const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true,'Debe especificar un título para su post']
      },
    body:  {
        type: String,
        required: [true,'Debe especificar un descripción para su post']
      },
    user:  {
        type: String,
        required: [true,'Debe especificar un usuario para su post']
      },
    comments: Array,
}, { timestamps: true });

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
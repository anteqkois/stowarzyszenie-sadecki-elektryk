const mongoose = require('mongoose');
const URLSlugs = require('mongoose-url-slugs')

const Post = mongoose.Schema({
    category: {
        type: mongoose.Schema.Types.ObjectId,
        //type: String,
        ref: 'Category',
    },
    title: String,
    date: Date,
    description: String

})

Post.plugin(URLSlugs('title', {field: 'slug', update: true}));

module.exports = mongoose.model('Post', Post);

   /*  category: {
        type: String,
        ref: 'Category',
    }, */
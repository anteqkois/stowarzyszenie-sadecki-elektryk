const mongoose = require('mongoose');
const URLSlugs = require('mongoose-url-slugs')

const Project = mongoose.Schema({
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
    },
    title: String,
    date: Date,
    description: String

})

Project.plugin(URLSlugs('title', {field: 'slug', update: true}));

module.exports = mongoose.model('Project', Project);
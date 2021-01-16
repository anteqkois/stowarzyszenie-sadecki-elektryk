const express = require('express');
const router = express.Router();
const pagesController = require('../controllers/pagesController');
const postsController = require('../controllers/postsController');

router.get('/', pagesController.index);

router.get('/posts/:slug', postsController.findOne);

router.get('/posts', postsController.findAll);

module.exports = router;

// /posts?limit=5
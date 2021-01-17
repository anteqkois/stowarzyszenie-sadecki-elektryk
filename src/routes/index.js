const express = require('express');
const router = express.Router();
const pagesController = require('../controllers/pagesController');
const projectsController = require('../controllers/projectsController');

router.get('/', pagesController.index);

router.get('/all-projects', pagesController.projects);

router.get('/projects/:slug', projectsController.findOne);

router.get('/projects', projectsController.findAll);


module.exports = router;

// /posts?limit=5
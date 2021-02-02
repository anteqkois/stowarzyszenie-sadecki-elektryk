const express = require('express');
const router = express.Router();
const pagesController = require('../controllers/pagesController');
const projectsController = require('../controllers/projectsController');
const categoriesController = require('../controllers/categoriesController');

router.get('/', pagesController.index);

router.get('/all-projects', pagesController.projects);

router.get('/projects/:slug', projectsController.findOne, categoriesController.searchName);

router.get('/projects', projectsController.findAll, categoriesController.searchNameAll);

router.get('/categories', categoriesController.findAll);

router.get('/categories/:id', categoriesController.findOne);

module.exports = router;

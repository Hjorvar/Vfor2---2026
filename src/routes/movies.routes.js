const express = require('express');
const router = express.Router(); // Búum til Router hlut

// Sækjum controllerinn
const moviesController = require('../controllers/movies.controller');

// Skilgreinum slóðirnar
// Athugið: Hér notum við '/' en ekki '/movies' vegna þess að við tengjum þetta í server.js
router.get('/', moviesController.index);
router.get('/movie/:id', moviesController.detail);

module.exports = router;
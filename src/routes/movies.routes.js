const express = require('express');
const router = express.Router();

// Passaðu að slóðin sé rétt (tvípunktur til að fara upp úr routes, svo inn í controllers)
const moviesController = require('../controllers/movies.controller');

// Lína 10 er líklega hér:
// Ef moviesController.index er undefined, þá kemur villan sem þú fékkst.
router.get('/', moviesController.index);

router.get('/movie/:id', moviesController.movie);

module.exports = router;
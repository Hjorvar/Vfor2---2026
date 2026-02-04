// Sækjum þjónustuna sem við bjuggum til í skrefi 1
const movieService = require('../lib/movieService');

// Virkni fyrir forsíðu (Listi af myndum)
const index = (req, res) => {
    const movies = movieService.getMovies();
    res.render('index', { title: 'Bíóvefurinn', movies });
};

// Virkni fyrir staka mynd
const detail = (req, res) => {
    const { id } = req.params; // Sækjum ID úr slóðinni
    const movie = movieService.getMovieById(id);

    // Ef mynd finnst ekki, sendum við 404 (handled by middleware later or here)
    if (!movie) {
        // Við köllum á next() til að senda í villumeðhöndlun, eða renderum beint.
        // Til einföldunar renderum við 404 síðuna beint hér í bili:
        return res.status(404).render('404', { title: 'Síða fannst ekki' });
    }

    res.render('movie-details', { title: movie.title, movie });
};

module.exports = {
    index,
    detail
};
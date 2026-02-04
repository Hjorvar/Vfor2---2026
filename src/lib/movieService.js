const fs = require('fs');
const path = require('path');

// Hjálparfall til að lesa gögnin (Sama og var í server.js)
const loadData = () => {
    const filePath = path.join(__dirname, '../data/movies.json');
    const fileData = fs.readFileSync(filePath);
    return JSON.parse(fileData);
};

// Fall sem sækir allar myndir
const getMovies = () => {
    const movies = loadData();
    return movies;
};

// Fall sem sækir eina mynd eftir ID
const getMovieById = (id) => {
    const movies = loadData();
    return movies.find((m) => m.id === id);
};

// Flytjum föllin út svo aðrir geti notað þau
module.exports = {
    getMovies,
    getMovieById
};
require('dotenv').config();
const express = require('express');
const path = require('path');

// Sækjum routerinn okkar
const moviesRouter = require('./src/routes/movies.routes');

const app = express();
const PORT = 3000;

// 1. Stillingar (View Engine)
app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// 2. Middleware (Static files)
app.use(express.static(path.join(__dirname, 'public')));

// 3. Routes (Tengjum routerinn við rótina)
app.use('/', moviesRouter);

// 4. Villumeðhöndlun (404 Middleware)
// Ef enginn route hér að ofan grípur beiðnina, endar hún hér.
app.use((req, res, next) => {
    res.status(404).render('404', { title: 'Síða fannst ekki' });
});

// 5. Villumeðhöndlun (500 Middleware)
// Grípur system villur (server crashes)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Eitthvað fór úrskeiðis!');
});

app.listen(PORT, () => {
    console.log(`Server keyrir á http://localhost:${PORT}`);
});
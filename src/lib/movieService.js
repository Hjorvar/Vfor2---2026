const db = require('./db');

/**
 * Sækir allar kvikmyndir úr gagnagrunni.
 */
async function getMovies() {
  const q = 'SELECT * FROM movies ORDER BY created_at DESC';
  try {
    const result = await db.query(q);
    return result.rows;
  } catch (e) {
    console.error('Gat ekki sótt myndir', e);
    return [];
  }
}

/**
 * Sækir eina kvikmynd eftir ID.
 */
async function getMovieById(id) {
  const q = 'SELECT * FROM movies WHERE id = $1';
  try {
    const result = await db.query(q, [id]);
    
    if (result.rows.length === 0) {
      return null;
    }
    
    return result.rows[0];
  } catch (e) {
    console.error('Gat ekki sótt mynd', e);
    return null;
  }
}

module.exports = {
  getMovies,
  getMovieById,
};
CREATE TABLE IF NOT EXISTS movies (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  year INTEGER CHECK (year > 1880),
  genre VARCHAR(64),
  image_url VARCHAR(255),
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Setjum inn smá prufugögn
INSERT INTO movies (title, year, genre, image_url, description) VALUES 
('Inception', 2010, 'Sci-Fi', '/images/inception.jpg', 'Draumur innan draums.'),
('Interstellar', 2014, 'Sci-Fi', '/images/interstellar.jpg', 'Ferðalag í gegnum ormagöng.');

SELECT * FROM movies;
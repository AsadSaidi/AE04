const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();


// Función para leer las películas
const leerPeliculas = () => {
  const data = fs.readFileSync('../db/db.json', 'utf8');
  return JSON.parse(data);
};

// Función para escribir películas
const escribirPeliculas = (peliculas) => {
  fs.writeFileSync(dbPath, JSON.stringify(peliculas, null, 2));
};

/**
 * ENDPOINTS
 */

// Obtener todas las películas
router.get('/', (req, res) => {
  const peliculas = leerPeliculas();
  res.json(peliculas);
});

// Obtener película por ID (índice)
router.get('/:id', (req, res) => {
  const peliculas = leerPeliculas();
  const id = parseInt(req.params.id);
  if (id >= 0 && id < peliculas.length) {
    res.json(peliculas[id]);
  } else {
    res.status(404).json({ mensaje: 'Película no encontrada' });
  }
});

// Agregar nueva película
router.post('/', (req, res) => {
  const peliculas = leerPeliculas();
  const nuevaPelicula = req.body;
  peliculas.push(nuevaPelicula);
  escribirPeliculas(peliculas);
  res.status(201).json({ mensaje: 'Película agregada', pelicula: nuevaPelicula });
});

// Actualizar película
router.put('/:id', (req, res) => {
  const peliculas = leerPeliculas();
  const id = parseInt(req.params.id);
  if (id >= 0 && id < peliculas.length) {
    peliculas[id] = { ...peliculas[id], ...req.body };
    escribirPeliculas(peliculas);
    res.json({ mensaje: 'Película actualizada', pelicula: peliculas[id] });
  } else {
    res.status(404).json({ mensaje: 'Película no encontrada' });
  }
});

// Eliminar película
router.delete('/:id', (req, res) => {
  const peliculas = leerPeliculas();
  const id = parseInt(req.params.id);
  if (id >= 0 && id < peliculas.length) {
    const eliminada = peliculas.splice(id, 1);
    escribirPeliculas(peliculas);
    res.json({ mensaje: 'Película eliminada', pelicula: eliminada });
  } else {
    res.status(404).json({ mensaje: 'Película no encontrada' });
  }
});

module.exports = router;

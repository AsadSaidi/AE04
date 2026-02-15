import express from 'express';
import jwt from 'jsonwebtoken';
import { PORT, SECRET_JWT_KEY } from './config.js';
import { UserRepository } from './user-repository.js';
import { PeliculasRepository } from './peliculas-repository.js';
import cookieParser from 'cookie-parser';
import { SeriesRepository } from './series-repository.js';



const app = express();
app.use(express.json());
app.use(cookieParser()); 
app.use(express.static("public"));

// Middleware JWT
const authMiddleware = (req, res, next) => {
  const token = req.cookies.token || (req.headers.authorization && req.headers.authorization.split(' ')[1]);
  if (!token) return res.status(401).json({ error: 'No autorizado' });
  
  try {
    const payload = jwt.verify(token, SECRET_JWT_KEY);
    req.user = payload;
    next();
  } catch (err) {
    return res.status(403).json({ error: 'Token inválido' });
  }
};




// Login
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await UserRepository.login({ username, password });
    if (!user) return res.status(401).json({ error: 'Usuario o contraseña incorrectos' });

    const token = jwt.sign({ id: user.id, username: user.username }, SECRET_JWT_KEY, { expiresIn: '1h' });

    // Guardamos token en cookie HTTP
    res.cookie('token', token, { httpOnly: true, maxAge: 3600000 }); // 1 hora
    res.json({ username: user.username });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});


// Register
app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    const id = await UserRepository.create({ username, password });
    res.json({ id });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Logout
app.post('/logout', (req, res) => {
  res.clearCookie('token');
  res.json({ message: 'Sesión cerrada' });
});



// Rutas protegidas
app.get('/api/peliculas', authMiddleware, async (req, res) => {
  const data = await PeliculasRepository.getAll();
  res.json(data);
});

app.get('/api/peliculas/:id', authMiddleware, async (req, res) => {
  const id = parseInt(req.params.id);
  const pelicula = await PeliculasRepository.getById(id);
  if (!pelicula) return res.status(404).send("No encontrada");
  res.json(pelicula);
});

// Crear, actualizar, eliminar (protegidos)
app.post('/api/peliculas', authMiddleware, async (req, res) => {
  try {
    const nueva = await PeliculasRepository.create(req.body);
    res.status(201).json(nueva);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.put('/api/peliculas/:id', authMiddleware, async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const actualizada = await PeliculasRepository.update(id, req.body);
    res.json(actualizada);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.delete('/api/peliculas/:id', authMiddleware, async (req, res) => {
  const id = parseInt(req.params.id);
  const resultado = await PeliculasRepository.delete(id);
  res.json(resultado);
});

// Rutas API Series
// index.js
// Página de series sin authMiddleware
app.get('/series', authMiddleware, (req, res) => {
  res.render('series'); 
});

app.get('/api/series', authMiddleware, async (req, res) => {
  const data = await SeriesRepository.getAll();
  res.json(data);
});

app.get('/api/series/:id', authMiddleware, async (req, res) => {
  const id = parseInt(req.params.id);
  const serie = await SeriesRepository.getById(id);
  if (!serie) return res.status(404).json({ error: 'No encontrada' });
  res.json(serie);
});

app.post('/api/series', authMiddleware, async (req, res) => {
  try {
    const nueva = await SeriesRepository.create(req.body);
    res.status(201).json(nueva);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.put('/api/series/:id', authMiddleware, async (req, res) => {
  try {
    const actualizada = await SeriesRepository.update(parseInt(req.params.id), req.body);
    res.json(actualizada);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

app.delete('/api/series/:id', authMiddleware, async (req, res) => {
  try {
    const resultado = await SeriesRepository.delete(parseInt(req.params.id));
    res.json(resultado);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));

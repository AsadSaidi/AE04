import express from 'express';
import {PORT, SECRET_JWT_KEY} from './config.js'
import { UserRepository } from './user-repository.js';
import { PeliculasRepository } from './peliculas-repository.js';


const app = express();

app.use(express.json());
app.use(express.static("public")); //Carrega CSS 

app.set('view engine', 'ejs'); 
app.set('views', './views');

app.listen(PORT, () => console.log(`Obert en el port ${PORT}`));

app.get('/', (req, res)=> {
  //const {user} = req.session
  res.render('register')
})

app.get('/protected', (req, res)=> {
  //const {user} = req.session
  res.render('protected')
  
})
app.post('/login', async (req, res) => {
  const {username, password} = req.body
  const user = await UserRepository.login({username, password})
})

app.post('/register', async (req, res) => {
  const {username, password} = req.body
  console.log(req.body)

  try{
    const id = await UserRepository.create({username, password})
    res.send({id})
  }catch(error){
    res.status(400).send(error.message)
  }
})

app.get('/', (req, res)=> {
  //const {user} = req.session
  res.render('register')
})



app.use(express.json());
app.use(express.static("public"));

app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));

// Rutas normales
app.get('/', (req, res) => {
  res.render('register');
});

app.get('/protected', (req, res) => {
  res.render('protected');
});


//Rutas api peliculas
app.get('/api/peliculas', async (req, res) => {
  const data = await PeliculasRepository.getAll();
  res.json(data);
});

// Obtener por ID
app.get('/api/peliculas/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const pelicula = await PeliculasRepository.getById(id);
  if (!pelicula) return res.status(404).send("No encontrada");
  res.json(pelicula);
});

// Crear nueva
app.post('/api/peliculas', async (req, res) => {
  try {
    const nueva = await PeliculasRepository.create(req.body);
    res.status(201).json(nueva);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Actualizar
app.put('/api/peliculas/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const actualizada = await PeliculasRepository.update(id, req.body);
    res.json(actualizada);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

// Eliminar
app.delete('/api/peliculas/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const resultado = await PeliculasRepository.delete(id);
  res.json(resultado);
});

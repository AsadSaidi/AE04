# AEA04 - Aplicacion Full-Stack: Node.js + Vue 3

## Descripcion General

Aplicacion web full-stack que integra:

- **Backend**: API REST con Node.js y Express
- **Frontend**: Single Page Application (SPA) con Vue 3 y Vite
- **Autenticacion**: JWT con cookies httpOnly
- **Base de datos**: JSON local (db-local)
- **Seguridad**: Encriptacion de contrasenas con bcryptjs

---

## Objetivos Principales

- Implementar autenticacion segura con JWT
- Desarrollar CRUD seguro y protegido con middleware
- Crear una SPA responsiva con Vue 3
- API REST funcional y bien estructurada
- Separacion clara entre backend y frontend
- Aplicar buenas practicas de seguridad

---

## Estructura del projecte

```
AEA04/
│
├── index.js                 # Punt d’entrada principal (Express server)
├── config.js                # Configuració general (port, JWT secret...)
├── db.json                  # Base de dades local amb dades d’usuaris i recursos
├── user-repository.js       # CRUD i gestió d’usuaris
├── series-repository.js     # CRUD per a l’entitat “Sèries”
├── peliculas-repository.js  # CRUD per a l’entitat “Pel·lícules”
│
├── public/
│   └── styles.css           # Full d’estils per a les plantilles EJS
│
├── views/
│   ├── login.ejs            # Formulari d’inici de sessió
│   ├── register.ejs         # Formulari de registre
│   ├── profile.ejs          # Perfil de l’usuari autenticat
│   ├── protected.ejs        # Pàgina privada protegida per JWT
│   └── index.ejs            # Pàgina d’inici
│
├── package.json             # Dependències i scripts
└── request.http             # Fitxer per provar rutes amb REST Client
```

---

## Autenticació JWT

### Rutes principals d’autenticació

| Mètode | Ruta | Descripció |
|--------|------|-------------|
| `POST` | `/register` | Registra un nou usuari (encripta la contrasenya amb bcrypt). |
| `POST` | `/login` | Inicia sessió i genera un token JWT emmagatzemat a una cookie segura. |
| `GET` | `/logout` | Elimina la cookie i tanca la sessió. |
| `GET` | `/protected` | Ruta protegida, accessible només amb un JWT vàlid. |
| `GET` | `/profile` | Mostra les dades de l’usuari autenticat. |

El token JWT té una caducitat d’**1 hora** i s’emmagatzema amb les opcions següents:
```js
httpOnly: true
sameSite: 'strict'
secure: true
```

---

## CRUD del sistema

S’han implementat dos CRUDs complets: **Sèries** i **Pel·lícules**, a més de l’autenticació d’usuaris.

### 🔸 Endpoints disponibles

#### Usuaris
| Mètode | Ruta | Descripció |
|--------|------|-------------|
| `GET` | `/users` | Retorna tots els usuaris (protegida). |
| `POST` | `/users` | Afegeix un nou usuari. |
| `PUT` | `/users/:id` | Actualitza dades d’un usuari. |
| `DELETE` | `/users/:id` | Elimina un usuari. |

#### Sèries
| Mètode | Ruta | Descripció |
|--------|------|-------------|
| `GET` | `/series` | Mostra totes les sèries. |
| `POST` | `/series` | Afegeix una nova sèrie. |
| `PUT` | `/series/:id` | Modifica una sèrie existent. |
| `DELETE` | `/series/:id` | Elimina una sèrie. |

#### Pel·lícules
| Mètode | Ruta | Descripció |
|--------|------|-------------|
| `GET` | `/peliculas` | Llista totes les pel·lícules. |
| `POST` | `/peliculas` | Crea una nova pel·lícula. |
| `PUT` | `/peliculas/:id` | Actualitza una pel·lícula. |
| `DELETE` | `/peliculas/:id` | Elimina una pel·lícula. |

---

## Dependències principals
```bash
express
bcrypt
jsonwebtoken
cookie-parser
ejs
db-local
nodemon
```

---

## Instruccions d’instal·lació i execució

### Requisitos
- Node.js >= 14
- npm o yarn

1. **Clona el repositori**
   ```bash
   git clone https://github.com/usuari/AEA04.git
   cd AEA04
   ```

2. **Instal·la les dependències**
   ```bash
   npm install
   ```

3. **Executa el servidor**
   ```bash
   # Terminal 1
   npm run dev:backend      # Backend en http://localhost:3000

   # Terminal 2
   npm run dev:frontend     # Frontend en http://localhost:5173
   ```

4. **Accedeix a l’aplicació**
   - Inici de sessió: http://localhost:3000/login
   - Registre: http://localhost:3000/register
   - Pàgina protegida: http://localhost:3000/protected

---

# AEA04 - Aplicacion Full-Stack: Node.js + Vue 3

## Estructura del Proyecto

### Backend (Node.js + Express)
- `index.js` - Servidor Express con routes API
- `user-repository.js` - CRUD de usuarios
- `peliculas-repository.js` - CRUD de peliculas
- `series-repository.js` - CRUD de series
- `config.js` - Configuracion (puerto, JWT secret)
- `db/` - Base datos JSON local

### Frontend (Vue 3 + Vite)
- `index.html` - HTML principal
- `vite.config.js` - Configuracion Vite (proxy a backend)
- `src/`
  - `main.js` - Punto entrada Vue
  - `App.vue` - Componente raiz
  - `components/`
    - `LoginRegister.vue` - Formularios auth
    - `Dashboard.vue` - Panel principal
    - `PeliculasForm.vue` - Crear/editar peliculas
    - `PeliculasList.vue` - Listado de peliculas
  - `services/`
    - `api.js` - Cliente HTTP con fetch

---

## Endpoints API

### Autenticacion
- `POST /register` - Registrar nuevo usuario
- `POST /login` - Iniciar sesion
- `POST /logout` - Cerrar sesion

### Peliculas (requieren autenticacion)
- `GET /api/peliculas` - Obtener todas las peliculas
- `GET /api/peliculas/:id` - Obtener pelicula por ID
- `POST /api/peliculas` - Crear nueva pelicula
- `PUT /api/peliculas/:id` - Actualizar pelicula
- `DELETE /api/peliculas/:id` - Eliminar pelicula

### Series (requieren autenticacion)
- `GET /api/series` - Obtener todas las series
- `POST /api/series` - Crear nueva serie
- `PUT /api/series/:id` - Actualizar serie
- `DELETE /api/series/:id` - Eliminar serie

---

## Flujo de Autenticacion

### Registro
- Usuario introduce username y password
- Validacion: username >= 3 caracteres, password >= 6 caracteres
- Contrasena encriptada con bcryptjs
- Usuario guardado en base de datos

### Login
- Usuario introduce credenciales
- Backend verifica usuario y contrasena
- Se genera JWT con expiracion de 1 hora
- JWT devuelto en cookie httpOnly
- Frontend guarda username en localStorage

### Acceso Protegido
- Todas las rutas CRUD requieren autenticacion
- Middleware valida JWT en cookie
- Si es valido: se permite acceso
- Si es invalido o expirado: se devuelve error 401/403

### Logout
- Se elimina cookie del servidor
- Frontend limpia localStorage
- Usuario redirigido a login

---

## Componentes Vue 3

### LoginRegister.vue
- Formularios de registro e inicio de sesion
- Validacion de campos
- Manejo de errores y avisos de exito

### Dashboard.vue
- Panel principal post-autenticacion
- Barra navegacion con datos usuario
- Boton cerrar sesion
- Gestiona estado de peliculas

### PeliculasForm.vue
- Formulario crear/editar peliculas
- Validacion campos obligatorios
- Estados de carga y errores

### PeliculasList.vue
- Listado peliculas en tarjetas
- Botones editar/eliminar
- Formatos personalizados (moneda)

---

## Tecnologias Utilizadas

### Backend
- `Express.js` - Framework web
- `JWT (jsonwebtoken)` - Autenticacion
- `bcryptjs` - Encriptacion contrasenas
- `cookie-parser` - Manejo cookies
- `db-local` - Base datos JSON local

### Frontend
- `Vue 3` - Framework progresivo
- `Vite` - Bundler moderno
- `Fetch API` - Peticiones HTTP
- `Tailwind CSS` - Estilos (CDN)

---

## Como Usar la Aplicacion

1. **Registro**: Completa formulario con usuario y contrasena
2. **Login**: Inicia sesion con tus credenciales
3. **Dashboard**: Accede al panel de peliculas
4. **CRUD**: Crear, editar, ver y eliminar peliculas

---

## Mejoras Opcionales

- Validacion avanzada formularios
- Paginacion listados
- Busqueda y filtrado
- Control de roles usuario
- Tokens refresco (refresh tokens)
- Tests automatizados
- Despliegue en produccion

---

## Autor
**Asad Saidi**
Proyecto educativo para el modulo DAW

## 🧾 Llicència
Aquest projecte s’ha creat amb finalitats educatives dins del marc del curs DAW – ITB.

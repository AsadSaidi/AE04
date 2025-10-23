# AEA04 – Sistema complet amb autenticació i CRUD

## Descripció general
Aquest projecte implementa una aplicació completa amb **Node.js i Express** que integra:

- Autenticació d’usuaris amb **JSON Web Tokens (JWT)**.
- Encriptació de contrasenyes amb **bcrypt**.
- Gestió d’usuaris i recursos mitjançant **dues entitats CRUD**.
- Interfície amb plantilles **EJS** per al frontal.
- Validació de dades i ús de **cookies segures (httpOnly)**.

L’aplicació forma part de l’activitat **AEA04** del mòdul M14 (Desenvolupament d’aplicacions web amb Node.js) i segueix les directrius del projecte indicat a classe.

---

## Objectius principals
- Implementar un sistema complet d’autenticació amb JWT.
- Desenvolupar CRUDs segurs i protegits amb middleware.
- Utilitzar bones pràctiques de seguretat amb cookies i validacions.
- Crear un frontal amb EJS per mostrar informació personalitzada.
- Gestionar les dades amb un fitxer JSON simulant una base de dades local.

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
   npm start
   ```

4. **Accedeix a l’aplicació**
   - Inici de sessió: http://localhost:3000/login
   - Registre: http://localhost:3000/register
   - Pàgina protegida: http://localhost:3000/protected

---

## 🧪 Proves amb REST Client o Postman

Exemples inclosos al fitxer `request.http`:
```http
### Registre d’usuari
POST http://localhost:3000/register
Content-Type: application/json

{
  "username": "userdemo",
  "password": "1234"
}

### Inici de sessió
POST http://localhost:3000/login
Content-Type: application/json

{
  "username": "userdemo",
  "password": "1234"
}

### Accés a ruta protegida
GET http://localhost:3000/protected
```

---

## 👤 Autor
**Nom:** Asad Saidi Tahere
**Curs:** Desenvolupament d’Aplicacions Web (DAW)  
**Centre:** Institut Tecnològic de Barcelona (ITB)  
**Activitat:** AEA04 – Sistema complet amb autenticació i CRUD

---

## 🧾 Llicència
Aquest projecte s’ha creat amb finalitats educatives dins del marc del curs DAW – ITB.

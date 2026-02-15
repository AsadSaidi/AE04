// API Service - Funciones para consumir los endpoints del backend

export const api = {
  // AUTH ENDPOINTS
  async register(username, password) {
    const res = await fetch('/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    })
    return res.json()
  },

  async login(username, password) {
    const res = await fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
      credentials: 'include'
    })
    return res.json()
  },

  async logout() {
    const res = await fetch('/logout', {
      method: 'POST',
      credentials: 'include'
    })
    return res.json()
  },

  // PELÍCULAS ENDPOINTS
  async getPeliculas() {
    const res = await fetch('/api/peliculas', {
      credentials: 'include'
    })
    if (!res.ok) throw new Error(res.statusText)
    return res.json()
  },

  async getPelicula(id) {
    const res = await fetch(`/api/peliculas/${id}`, {
      credentials: 'include'
    })
    if (!res.ok) throw new Error(res.statusText)
    return res.json()
  },

  async createPelicula(pelicula) {
    const res = await fetch('/api/peliculas', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(pelicula),
      credentials: 'include'
    })
    if (!res.ok) throw new Error(res.statusText)
    return res.json()
  },

  async updatePelicula(id, pelicula) {
    const res = await fetch(`/api/peliculas/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(pelicula),
      credentials: 'include'
    })
    if (!res.ok) throw new Error(res.statusText)
    return res.json()
  },

  async deletePelicula(id) {
    const res = await fetch(`/api/peliculas/${id}`, {
      method: 'DELETE',
      credentials: 'include'
    })
    if (!res.ok) throw new Error(res.statusText)
    return res.json()
  },

  // SERIES ENDPOINTS
  async getSeries() {
    const res = await fetch('/api/series', {
      credentials: 'include'
    })
    if (!res.ok) throw new Error(res.statusText)
    return res.json()
  },

  async getSerie(id) {
    const res = await fetch(`/api/series/${id}`, {
      credentials: 'include'
    })
    if (!res.ok) throw new Error(res.statusText)
    return res.json()
  },

  async createSerie(serie) {
    const res = await fetch('/api/series', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(serie),
      credentials: 'include'
    })
    if (!res.ok) throw new Error(res.statusText)
    return res.json()
  },

  async updateSerie(id, serie) {
    const res = await fetch(`/api/series/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(serie),
      credentials: 'include'
    })
    if (!res.ok) throw new Error(res.statusText)
    return res.json()
  },

  async deleteSerie(id) {
    const res = await fetch(`/api/series/${id}`, {
      method: 'DELETE',
      credentials: 'include'
    })
    if (!res.ok) throw new Error(res.statusText)
    return res.json()
  }
}

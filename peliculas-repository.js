import fs from 'fs/promises';

const DB_PATH = './db/peliculas.json';

export class PeliculasRepository {
  static async getAll() {
    const data = await fs.readFile(DB_PATH, 'utf-8');
    return JSON.parse(data);
  }

  static async getById(id) {
    const peliculas = await this.getAll();
    return peliculas.find(p => p.id === id);
  }

  static async create(pelicula) {
    const peliculas = await this.getAll();
    const newId = peliculas.length ? Math.max(...peliculas.map(p => p.id)) + 1 : 1;
    const nueva = { id: newId, ...pelicula };
    peliculas.push(nueva);
    await fs.writeFile(DB_PATH, JSON.stringify(peliculas, null, 2));
    return nueva;
  }

  static async update(id, pelicula) {
    const peliculas = await this.getAll();
    const index = peliculas.findIndex(p => p.id === id);
    if (index === -1) throw new Error('Película no encontrada');
    peliculas[index] = { id, ...pelicula };
    await fs.writeFile(DB_PATH, JSON.stringify(peliculas, null, 2));
    return peliculas[index];
  }

  static async delete(id) {
    const peliculas = await this.getAll();
    const idNum = Number(id);
    const index = peliculas.findIndex(p => Number(p.id) === idNum);
    
    if (index === -1) throw new Error(`No se encontró la película con id ${idNum}`);
    
    const [eliminada] = peliculas.splice(index, 1);
    await fs.writeFile(DB_PATH, JSON.stringify(peliculas, null, 2));
    return { deleted: true, eliminada };
  }

}

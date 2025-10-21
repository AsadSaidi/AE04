import DBLocal from 'db-local';

const { Schema } = new DBLocal({ path: './db' });

const Series = Schema('Series', {
  id: { type: Number, required: true },
  nombre: { type: String, required: true },
  year: { type: Number, required: true },
  genero: { type: String },
  director: { type: String },
  temporadas: { type: Number },
  plataforma: { type: String }
});

let nextId = 1;

export class SeriesRepository {
  static async getAll() {
    return Series.findAll();
  }

  static async getById(id) {
    return Series.findOne({ id });
  }

  static async create(data) {
    const serie = { ...data, id: nextId++ };
    await Series.create(serie).save();
    return serie;
  }

  static async update(id, data) {
    const serie = await Series.findOne({ id });
    if (!serie) throw new Error('Serie no encontrada');
    Object.assign(serie, data);
    await serie.save();
    return serie;
  }

  static async delete(id) {
    const serie = await Series.findOne({ id });
    if (!serie) throw new Error('Serie no encontrada');
    await serie.delete();
    return { message: 'Serie eliminada' };
  }
}

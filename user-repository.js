import bcrypt from 'bcryptjs'
import DBLocal from 'db-local'
import crypto from 'node:crypto'
import { SALT_ROUNDS } from './config.js'

const { Schema } = new DBLocal({ path: './db' })

// Esquema de usuario
const User = Schema('User', {
    _id: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true }
})

// Clase para crear usuarios y hacer login
export class UserRepository {

    static async create({ username, password }) {
        Validation.username(username)
        Validation.password(password)

        const user = await User.findOne({ username });
        if(user){
            throw new Error('username already exists');
        } 

        const id = crypto.randomUUID()
        const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS)

        await User.create({
            _id: id,
            username,
            password: hashedPassword
        }).save()

        return id
    }

    static async login({ username, password }) {
        const user = await User.findOne({ username });
        if (!user) return null;

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) return null;

        return { id: user._id, username: user.username };
    }
}

// Validaciones
class Validation {
    static username(username) {
        if (typeof username !== 'string') throw new Error('username must be a string');
        if (username.length < 3) throw new Error('Username superior a 3 caracteres');
    }
    static password(password) {
        if (typeof password !== 'string') throw new Error('password must be a string');
        if (password.length < 6) throw new Error('Password superior a 5 caracteres');
    }
}

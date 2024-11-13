import "dotenv/config.js"
import "../../config/database.js"
import User from "../User.js"
import { encryption } from "../../utils/encryption.js"

let users = [
    {
      name: "Juan Perez",
      mail: "juan.perez@example.com",
      typeUser: 3,
      address: "Calle Falsa 123, Ciudad Ficticia",
      phone: 1234567890,
      password: "password123",
      online: false
    },
    {
      name: "Maria Gomez",
      mail: "maria.gomez@example.com",
      typeUser: 3,
      address: "Avenida Siempre Viva 456, Ciudad Imaginaria",
      phone: 1234567891,
      password: "password123",
      online: false
    },
    {
      name: "Pedro Rodriguez",
      mail: "pedro.rodriguez@example.com",
      typeUser: 3,
      address: "Calle Principal 789, Pueblo Nuevo",
      phone: 1234567892,
      password: "password123",
      online: false
    },
    {
      name: "Lucia Fernandez",
      mail: "lucia.fernandez@example.com",
      typeUser: 3,
      address: "Boulevard de los Sueños 101, Villa Real",
      phone: 1234567893,
      password: "password123",
      online: false
    },
    {
      name: "Carlos Martinez",
      mail: "carlos.martinez@example.com",
      typeUser: 3,
      address: "Plaza Mayor 202, Ciudad Central",
      phone: 1234567894,
      password: "password123",
      online: false
    },
    {
      name: "Ana Lopez",
      mail: "ana.lopez@example.com",
      typeUser: 3,
      address: "Camino Real 303, Villa Nueva",
      phone: 1234567895,
      password: "password123",
      online: false
    },
    {
      name: "Javier Gonzalez",
      mail: "javier.gonzalez@example.com",
      typeUser: 3,
      address: "Paseo de la Reforma 404, Ciudad Antigua",
      phone: 1234567896,
      password: "password123",
      online: false
    },
    {
      name: "Sofia Ramirez",
      mail: "sofia.ramirez@example.com",
      typeUser: 3,
      address: "Avenida de las Rosas 505, Ciudad Jardín",
      phone: 1234567897,
      password: "password123",
      online: false
    },
    {
      name: "Miguel Torres",
      mail: "miguel.torres@example.com",
      typeUser: 3,
      address: "Calle del Sol 606, Pueblo Viejo",
      phone: 1234567898,
      password: "password123",
      online: false
    },
    {
      name: "Laura Sanchez",
      mail: "laura.sanchez@example.com",
      typeUser: 3,
      address: "Camino del Norte 707, Ciudad del Mar",
      phone: 1234567899,
      password: "password123",
      online: false
    }
]

users = users.map(user => ({...user, password: encryption(user.password)}))

User.insertMany(users)
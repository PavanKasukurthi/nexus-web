import 'dotenv/config'
// import mysql from 'mysql'
import mysql2 from 'mysql2'

export const db = mysql2.createConnection({
  host: 'localhost',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
})

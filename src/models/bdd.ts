import dotenv from 'dotenv';
import mariadb from "mariadb"
dotenv.config();

const pool = mariadb.createPool({
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 3306,
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'gestion_entretien',
  
  connectionLimit: 10,

});

export default pool;

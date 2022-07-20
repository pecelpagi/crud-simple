import mysql from "mysql2/promise";
import * as dotenv from "dotenv";

dotenv.config();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Rah4sia123',
  database: 'db_crud_simple'
});

export const getConnection = async () => await connection;
import { createClient } from '@vercel/postgres';
import mysql from 'mysql2/promise';

export async function connectDB() {
    const db = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'student',
    })
    console.log('connectDB::',db);
    
    // const client = createClient();
    // await client.connect();
    try {
        if(db){
            console.log('connected successfull');
            return db
        }
    } catch (error) {
        throw error
    }
}
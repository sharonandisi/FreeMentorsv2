import { Pool } from 'pg';
import dotenv from 'dotenv';


dotenv.config();

const env = process.env.NODE_ENV

const databaseUrl = env === 'test' ? process.env.DATABASE_URL_TEST : process.env.DATABASE_URL


const pool = new Pool({
    connectionString: databaseUrl
});

async function query(queryText, values = null) {
    const client = await pool.connect();
    let response;
    try {
        await client.query('BEGIN');
        try {
            response = await client.query(queryText, values)
            await client.query('COMMIT');
        } catch (error) {
            await client.query('ROLLBACK');
            throw error;
        }


    } finally {
        client.release();
    }
    return response;
}

module.exports = query;
import { createPool, Pool } from 'mysql2/promise'

export async function connect(): Promise<Pool> {
    const connection = await createPool({
        host: '3.141.7.74',
        user: 'root',
        password:"password",
        database: 'analisis',
        connectionLimit: 100000
    });
    return connection;
    
}

//set environment variable
const env = process.env.NODE_ENV || 'development';

let poolConfig = null;

if(env === 'development'){
    poolConfig = {
        connectionLimit: 5,
        host: 'localhost',
        user: 'root',
        password: 'pinku',
        database: 'acl_db'
    }
}

if(env === 'test'){
    poolConfig = {
        connectionLimit: 5,
        host: 'localhost',
        user: 'root',
        password: 'pinku',
        database: 'acl_db_test'
    }
}

module.exports = poolConfig;
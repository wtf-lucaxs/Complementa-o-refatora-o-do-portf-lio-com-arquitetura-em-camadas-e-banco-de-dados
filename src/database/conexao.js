const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '', 
    database: process.env.DB_NAME || 'portfolio_db',
    port: parseInt(process.env.DB_PORT || '3306')
});

pool.getConnection()
    .then(() => console.log("✅ CONEXÃO COM O BANCO DE DADOS REALIZADA COM SUCESSO!"))
    .catch((err) => {
        console.log("❌ ERRO AO CONECTAR NO BANCO:");
        console.error(err.message);
    });

module.exports = pool;

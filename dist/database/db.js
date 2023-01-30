import pg from "pg";
var Pool = pg.Pool;
export var connectionDB = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '12345',
    database: 'pocdriven'
});

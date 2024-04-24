import { Sequelize } from "sequelize";

const db = new Sequelize("ts_express_db", "root", "root", {
  host: "localhost",
  dialect:
    "mysql" /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */,
});

export default db;

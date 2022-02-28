import { Sequelize } from "sequelize";

export default new Sequelize("hng", "postgres", "admin", {
  host: "localhost",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

// export default new Sequelize(
//     process.env.PG_DB,
//     process.env.PG_USER,
//     process.env.PG_PASSWORD,
//     {
//     host: process.env.PG_HOST,
//     dialect: "postgres",
//     pool: {
//         max: 5,
//         min: 0,
//         acquire: 30000,
//         idle: 10000
//     }
//     }
// )

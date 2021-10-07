import express from "express";
import { Server } from "http";
import cors from "cors";
import { Client } from "pg";
import apiRouter from "./api_router";

import sequelize from "./config/db_config";
import { createDB } from "./create_data";
// createDB();
// sequelize.sync({ force: true });
// const pgClient = new Client({
//     user: "kqcnjtmjdugxlk",
//     password: "ae308681e15df1afdd6a7b687f913d461f90e604a7757ece2368337102f41b3d",
//     database: "deh5vvhfu1fs0v",
//     port: 5432,
//     host: "ec2-184-73-153-64.compute-1.amazonaws.com",
//     ssl: true
// });

// const pgClient = new Client({
//     user: "postgres",
//     password: "pgpass",
//     database: "postgres",
//     port: 5432,
//     host: "localhost",
//     ssl: false
// });

// pgClient.connect((err) => {
// if(!err) {
//     console.log("Database is connected");
// } else {
//     console.log("Error while connecting with database");
// }
// });

// pgClient.query(
//       `CREATE TABLE post (
//         id_post SERIAL NOT NULL PRIMARY KEY,
//         title varchar(255),
//         name varchar(255),
//         message TEXT,
//         created_at	timestamp default NULL
//     )`, (err, res) => {
//       console.log(err, res)
//       pgClient.end()
//     })

const port = 8998;
const app = express();
const server = new Server(app);

app.use(cors());
app.use("/api", apiRouter);

server.listen(process.env.PORT || port, () => {
  console.log(`The server is running at PORT ${port}`);
});

const { Client } = require("pg");
const client = new Client({
  host: "localhost",
  port: 5432,
  password: "root",
  user: "postgres",
  database: "carlos_web",
});

client.connect((err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("conexion success");
  }
});

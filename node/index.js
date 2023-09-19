import express from "express"
import mysql from "mysql2"

const app = express();
const PORT = 5000;

const connection = mysql.createConnection({
  host: 'mysql',
  user: 'root',
  password: 'root',
  database: 'teste'
})

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao MySQL: ' + err);
    return;
  }
  console.log('Conexão bem sucedida ao MySQL.');
});

app.get("/", (req, res) => {
  res.send("<h1>Full Cycle Rocks!</h1>")
})

app.listen(PORT, ()=> {
  console.log("Rodando na porta: " + PORT)
})
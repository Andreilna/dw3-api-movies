import mongoose from "./config/db-connection.js";
import express from "express";
const app = express();

import movieRoutes from "./routes/movieRoutes.js";
import Movie from "./models/Movies.js";

// Configurações do Express
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/", movieRoutes);

// Iniciando conexão com o banco de dados MongoDB
// mongoose.connect("mongodb://127.0.0.1:27017/apinode-games");

// Rodando a API na porta 4000
const port = 4000;
app.listen(port, (error) => {
  if (error) {
    console.log(error);
  }
  console.log(`API rodando em http://localhost:${port}.`);
});

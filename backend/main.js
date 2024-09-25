const axios = require("axios");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const api_key = "live_QN4iDWyVQ9IX8DFKeT7yNyK0lizAqvTwLmIg1V5EziGdfQWkMBQbjLIeHoDgAoeT"

// Rota para obter/listar 🐈🐈‍⬛🐈🐈‍⬛🐈🐈‍⬛🐈🐈‍⬛🐈🐈‍⬛ (10 gatos)
app.get('/random-cat', async(req,res) => {
  try {
    // Consumindo a API de 🐈🐈‍⬛ com axios
    const response = await axios.get("https://api.thecatapi.com/v1/images/search?limit=10", {
      headers: {
        "x-api-key": api_key,
      },
    });

    // Exibindo a resposta da requisição de 🐈gatos🐈‍⬛:
    res.json(response.data);
  } catch (erro) {
    console.log('Erro ao acessar API de 🐈🐈‍⬛: ', erro);
  }
})

// Criando o servidor
const port = 8080;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
})
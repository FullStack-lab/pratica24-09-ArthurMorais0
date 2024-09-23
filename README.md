# Prática da Semana - 23/09 à 27/09 | Tema - Consumindo uma API no Backend com Node JS e integrando no Frontend com React

**Vamos utilizar a API do The Cat API. Ela é simples, utiliza autenticação por Bearer Token, e permite realizar requisições de maneira fácil. A API fornece imagens de gatos, o que é ótimo para um exemplo prático sem muita complexidade.**

# **Configurar o Backend com Node.js**

No terminal, vá até a pasta onde deseja criar o projeto e execute:

```prompt
npm init -y
```

Instale as dependências

```prompt
npm install axios express cors
```


## **Criar uma Conta no The Cat API**

### **Criar uma conta gratuita no The Cat Api** 

- https://thecatapi.com/
- Após se registrar, você receberá um API Key (que será seu Bearer Token).
- Guarde esse API Key, pois será necessário para autenticar suas requisições.


## **Criando o servidor em Node JS**

- Criar o arquivo app.js no diretório do projeto.
- Escrever o código para acessar a API do The Cat API usando o Bearer Token fornecido após a criação da conta.

```javascript
const axios = require("axios");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const api_key = "SUA_API_KEY"

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
```

## **Explicação do Processo de Autenticação**

- O Bearer Token é o seu API Key que foi fornecido ao registrar-se no The Cat API.
- Ele é utilizado em todas as requisições para autenticar o acesso aos recursos, sendo adicionado nos cabeçalhos (headers) da requisição.
- Com o token, você pode fazer requisições para obter imagens de gatos ou outras informações que a API disponibiliza.

## **Testar o servidor**

- Rodar o servidor node.js

No terminal execute: 

```prompt
node server.js
```
Abra o navegador e vá para `http://localhost:8080/random-cat`. Isso fará uma requisição à API do The Cat API e retornará uma imagem aleatória de um gato.

# **Configurando o Frontend com React JS**

No terminal, vamos criar o projeto React

```prompt
npm create vite@latest
cd frontend
npm install
npm install axios
```

## **Estrutura do projeto**

```
frontend/
│
├── src/
│   ├── components/
│   │   ├── CatImage.js
│   ├── App.js
│   └── index.js
│   ├── Index.css
│   └── App.css
└── package.json
```

### **Componente CatImage**

- Esse componente exibirá uma imagem aleatória de gato.

```javascript
import React, { useState } from 'react';
import axios from 'axios';

const CatImage = () => {
  const [image, setImage] = useState('');

  const fetchCatImage = async () => {
    try {
      const response = await axios.get('http://localhost:8080/random-cat');
      setImage(response.data[0].url);
    } catch (error) {
      console.error('Erro ao obter imagem de gato:', error);
    }
  };

  return (
    <div>
      <h2>Imagem Aleatória de Gato</h2>
      <button onClick={fetchCatImage}>Obter Imagem</button>
      {image && <img src={image} alt="Gato" style={{ width: '300px', height: 'auto' }} />}
    </div>
  );
};

export default CatImage;
```

Renderize isso em tela:

```javascript
import './global.css'
import CatImage from './components/CatImage'


function App() {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
      <h1>Cat API - Fernando Zuchi</h1>
      <CatImage />

    </div>
  )
}

export default App
```

# Conclusão

Nesta prática, você reforçou conceitos já vistos em outras práticas, referentes à consumo de API, criação de servidores com Node e manipulação de requisições http com métodos (get). Também criamos do zero uma estrutura simples backend e também uma estrutura simples frontend, integradas uma a outra.

Agradeço aos que chegaram até aqui, focos nos estudos!

Abraços, 
Fernando Zuchi


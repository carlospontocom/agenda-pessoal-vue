import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Inicializa o dotenv para ler o arquivo .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares obligatórios
app.use(cors());
app.use(express.json()); // Permite que o Express entenda JSON enviado pelo Vue

// Rota de teste para ver se o servidor responde
app.get('/', (req, res) => {
  res.json({ mensagem: "Backend rodando com sucesso!" });
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando liso na porta ${PORT}`);
});
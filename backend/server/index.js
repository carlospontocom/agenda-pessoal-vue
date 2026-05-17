import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pool from '../src/config/database.js';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Rota principal
app.get('/', (req, res) => {
  res.json({ mensagem: "🚀 Backend rodando com sucesso!" });
});

// Rota para verificar conexão com o banco
app.get('/status', async (req, res) => {
  try {
    // Apenas tenta abrir uma conexão, sem precisar de tabela
    const conn = await pool.getConnection();
    conn.release();
    res.json({ mensagem: "✅ Conexão com TiDB Cloud estabelecida!" });
  } catch (err) {
    console.error('Erro na conexão:', err);
    res.status(500).json({ mensagem: "❌ Erro ao conectar ao TiDB Cloud", erro: err.message });
  }
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando liso na porta ${PORT}`);
});

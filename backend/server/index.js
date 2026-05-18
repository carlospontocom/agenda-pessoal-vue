import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import compromisso from '../src/models/CompromissoModel.js';
import usuario from '../src/models/UsuarioModel.js';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Criar compromisso
app.post('/compromissos', async (req, res) => {
  try {
    const id = await compromisso.criar(req.body);
    res.json({ id });
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao criar compromisso', detalhe: error.message });
  }
});

// Listar
app.get('/compromissos', async (req, res) => {
  try {
    const lista = await compromisso.listar();
    res.json(lista);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao listar compromissos', detalhe: error.message });
  }
});

// Atualizar
app.put('/compromissos/:id', async (req, res) => {
  try {
    const atualizado = await compromisso.atualizar(req.params.id, req.body);
    res.json({ atualizado });
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao atualizar compromisso', detalhe: error.message });
  }
});

// Deletar
app.delete('/compromissos/:id', async (req, res) => {
  try {
    const deletado = await compromisso.deletar(req.params.id);
    res.json({ deletado });
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao deletar compromisso', detalhe: error.message });
  }
});


//usuarios
// Criar
app.post('/usuarios', async (req, res) => {
  const id = await  usuario.criar(req.body);
  res.json({ id });
});

// Listar
app.get('/usuarios', async (req, res) => {
  const lista = await  usuario.listar();
  res.json(lista);
});

// Atualizar
app.put('/usuarios/:id', async (req, res) => {
  const atualizado = await  usuario.atualizar(req.params.id, req.body);
  res.json({ atualizado });
});

// Deletar
app.delete('/usuarios/:id', async (req, res) => {
  const deletado = await usuario.deletar(req.params.id);
  res.json({ deletado });
});





// Inicia o servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando liso na porta ${PORT}`);
});

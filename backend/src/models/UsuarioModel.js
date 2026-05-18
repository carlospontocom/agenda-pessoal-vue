import pool from '../config/database.js';

class UsuarioModel {
  // CREATE
  static async criar(usuario) {
    const {
      nome, genero, data_nascimento, num_doc, telefone, cep,
      logradouro, bairro, cidade, numero, complemento,
      profissao, perfil, email, senha, foto_perfil
    } = usuario;

    const [result] = await pool.execute(
      `INSERT INTO usuarios 
      (nome, genero, data_nascimento, num_doc, telefone, cep, logradouro, bairro, cidade, numero, complemento, profissao, perfil, email, senha, foto_perfil) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [nome, genero, data_nascimento, num_doc, telefone, cep, logradouro, bairro, cidade, numero, complemento, profissao, perfil, email, senha, foto_perfil]
    );
    return result.insertId;
  }

  // READ
  static async listar() {
    const [rows] = await pool.execute('SELECT nome, genero, email, telefone,cidade, profissao, perfil FROM usuarios');
    return rows;
  }

  // UPDATE
  static async atualizar(id, usuario) {
    const {
      nome, genero, data_nascimento, num_doc, telefone, cep,
      logradouro, bairro, cidade, numero, complemento,
      profissao, perfil, email, senha, foto_perfil
    } = usuario;

    const [result] = await pool.execute(
      `UPDATE usuarios SET 
      nome=?, genero=?, data_nascimento=?, num_doc=?, telefone=?, cep=?, logradouro=?, bairro=?, cidade=?, numero=?, complemento=?, profissao=?, perfil=?, email=?, senha=?, foto_perfil=? 
      WHERE id=?`,
      [nome, genero, data_nascimento, num_doc, telefone, cep, logradouro, bairro, cidade, numero, complemento, profissao, perfil, email, senha, foto_perfil, id]
    );
    return result.affectedRows;
  }

  // DELETE
  static async deletar(id) {
    const [result] = await pool.execute('DELETE FROM usuarios WHERE id=?', [id]);
    return result.affectedRows;
  }
}

export default UsuarioModel;

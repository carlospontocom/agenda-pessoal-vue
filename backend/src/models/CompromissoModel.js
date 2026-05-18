import pool from '../config/database.js';

class CompromissoModel {
  // CREATE
  static async criar(compromisso) {
    const { titulo_evento, categoria, horario_inicial, descricao_evento } = compromisso;
    const [result] = await pool.execute(
      'INSERT INTO compromisso (titulo_evento, categoria, horario_inicial, descricao_evento) VALUES (?, ?, ?, ?)',
      [titulo_evento, categoria, horario_inicial, descricao_evento]
    );
    return result.insertId;
  }

  // READ
  static async listar() {
    const [rows] = await pool.execute('SELECT * FROM compromisso');
    return rows;
  }

  // UPDATE
  static async atualizar(id, compromisso) {
    const { titulo_evento, categoria, horario_inicial, descricao_evento } = compromisso;
    const [result] = await pool.execute(
      'UPDATE compromisso SET titulo_evento=?, categoria=?, horario_inicial=?, descricao_evento=? WHERE id=?',
      [titulo_evento, categoria, horario_inicial, descricao_evento, id]
    );
    return result.affectedRows;
  }

  // DELETE
  static async deletar(id) {
    const [result] = await pool.execute('DELETE FROM compromisso WHERE id=?', [id]);
    return result.affectedRows;
  }
}

export default CompromissoModel;

<script setup lang="ts">
import { ref } from 'vue'

// Interface simplificada apenas com o horário inicial
interface AgendamentoTarefa {
  titulo_evento: string
  categoria: string
  horario_inicial: string   
  descricao_evento: string
}

const form = ref<AgendamentoTarefa>({
  titulo_evento: '',
  categoria: '',
  horario_inicial: '',
  descricao_evento: ''
})

const handleSubmit = () => {
  console.log('Agendamento criado:', { ...form.value })
  // Aqui você conecta com seu axios/fetch para salvar no banco
  alert('Tarefa agendada com sucesso!')
}
</script>

<template>
  <div class="form-container">
    <form @submit.prevent="handleSubmit" class="agendamento-form">
      <h2 class="form-title">Agendar Tarefa</h2>

      <div class="form-group">
        <label for="titulo">Título do Evento</label>
        <input 
          id="titulo" 
          v-model="form.titulo_evento" 
          type="text" 
          placeholder="Ex: Consultar relatórios"
          required 
        />
      </div>

      <div class="form-row">
        <div class="form-group flex-1">
          <label for="categoria">Categoria</label>
          <select id="categoria" v-model="form.categoria" required>
            <option value="" disabled selected>Selecione...</option>
            <option value="reuniao">💼 Reunião</option>
            <option value="desenvolvimento">💻 Dev</option>
            <option value="suporte">🛠️ Suporte</option>
            <option value="outros">📌 Outros</option>
          </select>
        </div>

        <div class="form-group flex-1">
          <label for="horario">Horário Inicial</label>
          <input 
            id="horario" 
            v-model="form.horario_inicial" 
            type="datetime-local" 
            required 
          />
        </div>
      </div>

      <div class="form-group">
        <label for="descricao">Descrição / Detalhes</label>
        <textarea 
          id="descricao" 
          v-model="form.descricao_evento" 
          rows="4" 
          placeholder="Adicione anotações sobre a tarefa..."
        ></textarea>
      </div>

      <button type="submit" class="btn-submit">
        <span class="material-symbols-outlined">alarm</span>
        Confirmar Agendamento
      </button>
    </form>
  </div>
</template>

<style scoped lang="scss">
$primary-color: #42b883;
$bg-card: #ffffff;
$border-color: #e2e8f0;
$text-main: #2d3748;

.form-container {
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: center;
}

.agendamento-form {
  background-color: $bg-card;
  border: 1px solid $border-color;
  border-radius: 12px;
  padding: 1.5rem;
  width: 100%;
  max-width: 550px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);

  H1{
    text-align:center;
    padding: 2rem;
  }
  .form-title {
    font-size: 1.5rem;
    color: $text-main;
    margin-bottom: 1.5rem;
    font-weight: 600;
    text-align: center;
  }

  .form-row {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media (min-width: 480px) {
      flex-direction: row;
      
      .flex-1 { 
        flex: 1; 
      }
    }
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1.25rem;

    label {
      font-size: 0.9rem;
      font-weight: 500;
      color: $text-main;
    }

    input[type="text"],
    input[type="datetime-local"],
    select,
    textarea {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid $border-color;
      border-radius: 8px;
      font-size: 1rem;
      color: $text-main;
      background-color: #f8fafc;
      transition: all 0.2s ease;
      font-family: inherit;

      &:focus {
        outline: none;
        border-color: $primary-color;
        background-color: #ffffff;
        box-shadow: 0 0 0 3px rgba(66, 184, 131, 0.15);
      }
    }

    textarea {
      resize: vertical;
    }
  }

  .btn-submit {
    width: 100%;
    padding: 0.85rem;
    background-color: $primary-color;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: darken($primary-color, 8%);
    }
  }
}
</style>
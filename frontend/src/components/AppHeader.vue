<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

// Controla se o menu mobile está aberto ou fechado
const isMenuOpen = ref(false)

// Função para alternar o estado do menu
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <header class="app-header">
    <nav class="navbar">
      <div class="brand">Vue.TS</div>
      
      <ul class="nav-menu" :class="{ 'open': isMenuOpen }">
        <li><RouterLink to="/">home</RouterLink></li>
        <li><RouterLink to="/sobre">sobre</RouterLink></li>
      </ul>

      <button class="menu-toggle" @click="toggleMenu" aria-label="Toggle menu">
        <span class="material-symbols-outlined">menu</span>
      </button>
    </nav>
  </header>
</template>

<style scoped lang="scss">
  @use '../styles/appHeader.scss' as *;
</style>
<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-600 flex items-center justify-center p-4">
    <LoginRegister v-if="!isAuthenticated" @login="handleLogin" />
    <Dashboard v-else @logout="handleLogout" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import LoginRegister from './views/LoginRegister.vue'
import Dashboard from './views/Dashboard.vue'

// El estado de autenticación se inicializa según si hay usuario guardado
const isAuthenticated = ref(!!localStorage.getItem('username'))

const handleLogin = () => {
  // Cuando el hijo emite "login" es porque el backend ha validado correctamente
  isAuthenticated.value = true
}

const handleLogout = () => {
  // Limpiamos también cualquier rastro en localStorage
  localStorage.removeItem('username')
  isAuthenticated.value = false
}

</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-600 flex items-center justify-center p-4">
    <LoginRegister v-if="!isAuthenticated" @login="handleLogin" />
    <Dashboard v-else @logout="handleLogout" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import LoginRegister from './components/LoginRegister.vue'
import Dashboard from './components/Dashboard.vue'

const isAuthenticated = ref(false)

const handleLogin = () => {
  isAuthenticated.value = true
}

const handleLogout = () => {
  isAuthenticated.value = false
}

</script>

<template>
  <div class="w-full max-w-5xl">
    <div class="grid md:grid-cols-2 gap-6">
      <!-- Login Form -->
      <div class="glass rounded-3xl p-8 text-white shadow-2xl fade-in">
        <div class="mb-8">
          <h2 class="text-3xl font-bold mb-2">Iniciar Sesión</h2>
          <p class="text-white/70">Accede a tu cuenta</p>
        </div>

        <form @submit.prevent="handleLogin" class="space-y-6">
          <div class="space-y-2">
            <label class="block text-sm font-medium">Usuario</label>
            <input 
              v-model="loginForm.username"
              type="text" 
              class="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
              placeholder="Tu usuario"
              required
            />
          </div>

          <div class="space-y-2">
            <label class="block text-sm font-medium">Contraseña</label>
            <input 
              v-model="loginForm.password"
              type="password" 
              class="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
              placeholder="Tu contraseña"
              required
            />
          </div>

          <button 
            type="submit"
            :disabled="loadingLogin"
            class="w-full py-3 px-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-white/90 transition disabled:opacity-50"
          >
            {{ loadingLogin ? 'Iniciando...' : 'Iniciar Sesión' }}
          </button>

          <p v-if="loginError" class="text-red-300 text-sm">{{ loginError }}</p>
        </form>
      </div>

      <!-- Register Form -->
      <div class="glass rounded-3xl p-8 text-white shadow-2xl fade-in">
        <div class="mb-8">
          <h2 class="text-3xl font-bold mb-2">Registrarse</h2>
          <p class="text-white/70">Crea una nueva cuenta</p>
        </div>

        <form @submit.prevent="handleRegister" class="space-y-6">
          <div class="space-y-2">
            <label class="block text-sm font-medium">Usuario</label>
            <input 
              v-model="registerForm.username"
              type="text" 
              class="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
              placeholder="Tu usuario (min 3 caracteres)"
              required
            />
          </div>

          <div class="space-y-2">
            <label class="block text-sm font-medium">Contraseña</label>
            <input 
              v-model="registerForm.password"
              type="password" 
              class="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
              placeholder="Tu contraseña (min 6 caracteres)"
              required
            />
          </div>

          <div class="space-y-2">
            <label class="block text-sm font-medium">Confirmar Contraseña</label>
            <input 
              v-model="registerForm.confirm"
              type="password" 
              class="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
              placeholder="Confirma tu contraseña"
              required
            />
          </div>

          <button 
            type="submit"
            :disabled="loadingRegister"
            class="w-full py-3 px-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-white/90 transition disabled:opacity-50"
          >
            {{ loadingRegister ? 'Registrando...' : 'Registrarse' }}
          </button>

          <p v-if="registerError" class="text-red-300 text-sm">{{ registerError }}</p>
          <p v-if="registerSuccess" class="text-green-300 text-sm">{{ registerSuccess }}</p>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { api } from '../services/api.js'

const emit = defineEmits(['login'])

const loginForm = ref({ username: '', password: '' })
const registerForm = ref({ username: '', password: '', confirm: '' })
const loadingLogin = ref(false)
const loadingRegister = ref(false)
const loginError = ref('')
const registerError = ref('')
const registerSuccess = ref('')

const handleLogin = async () => {
  loginError.value = ''
  if (!loginForm.value.username || !loginForm.value.password) {
    loginError.value = 'Por favor completa todos los campos'
    return
  }

  loadingLogin.value = true
  try {
    const data = await api.login(loginForm.value.username, loginForm.value.password)
    if (data.error) {
      loginError.value = data.error
    } else {
      localStorage.setItem('username', data.username)
      emit('login')
    }
  } catch (error) {
    loginError.value = 'Error en el login: ' + error.message
  } finally {
    loadingLogin.value = false
  }
}

const handleRegister = async () => {
  registerError.value = ''
  registerSuccess.value = ''

  if (!registerForm.value.username || !registerForm.value.password || !registerForm.value.confirm) {
    registerError.value = 'Por favor completa todos los campos'
    return
  }
  
  if (registerForm.value.password !== registerForm.value.confirm) {
    registerError.value = 'Las contraseñas no coinciden'
    return
  }

  if (registerForm.value.username.length < 3) {
    registerError.value = 'El usuario debe tener al menos 3 caracteres'
    return
  }

  if (registerForm.value.password.length < 6) {
    registerError.value = 'La contraseña debe tener al menos 6 caracteres'
    return
  }

  loadingRegister.value = true
  try {
    const data = await api.register(registerForm.value.username, registerForm.value.password)
    if (data.error) {
      registerError.value = data.error
    } else {
      registerSuccess.value = 'Registro exitoso. Ahora puedes iniciar sesión.'
      registerForm.value = { username: '', password: '', confirm: '' }
    }
  } catch (error) {
    registerError.value = 'Error: ' + error.message
  } finally {
    loadingRegister.value = false
  }
}
</script>

<style scoped>
.glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.fade-in {
  animation: fadeIn 0.6s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

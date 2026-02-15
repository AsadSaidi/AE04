<template>
  <div class="min-h-screen">
    <nav class="bg-white/10 backdrop-blur-md text-white p-4 shadow-lg">
      <div class="max-w-7xl mx-auto flex justify-between items-center">
        <div>
          <h1 class="text-2xl font-bold">Gestión de Películas</h1>
          <p class="text-sm text-white/70">Bienvenido, {{ username }}</p>
        </div>
        <button
          @click="handleLogout"
          class="bg-red-500 hover:bg-red-600 px-6 py-2 rounded-lg font-semibold transition"
        >
          Cerrar Sesión
        </button>
      </div>
    </nav>

    <div class="max-w-7xl mx-auto p-6">
      <div class="grid md:grid-cols-3 gap-6">
        <div class="md:col-span-1">
          <PeliculasForm ref="formRef" @success="loadPeliculas" />
        </div>

        <div class="md:col-span-2">
          <PeliculasList 
            @delete="handleDelete"
            @edit="editPelicula"
            :peliculas="peliculas" 
            :loading="loading" 
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import PeliculasForm from './PeliculasForm.vue'
import PeliculasList from './PeliculasList.vue'
import { api } from '../services/api.js'

const peliculas = ref([])
const loading = ref(false)
const username = ref(localStorage.getItem('username') || 'Usuario')
const formRef = ref(null)

const emit = defineEmits(['logout'])

const loadPeliculas = async () => {
  loading.value = true
  try {
    const data = await api.getPeliculas()
    peliculas.value = data
  } catch (error) {
    console.error('Error al cargar películas:', error)
    alert('Error al cargar películas: ' + error.message)
  } finally {
    loading.value = false
  }
}

const handleDelete = async (id) => {
  if (confirm('¿Estás seguro de que quieres eliminar esta película?')) {
    try {
      await api.deletePelicula(id)
      await loadPeliculas()
    } catch (error) {
      alert('Error al eliminar: ' + error.message)
    }
  }
}

const editPelicula = (pelicula) => {
  console.log('editPelicula llamado con:', pelicula)
  if (formRef.value) {
    console.log('formRef existe, llamando a editPelicula en form')
    formRef.value.editPelicula(pelicula)
  } else {
    console.error('formRef es null')
  }
}

const handleLogout = async () => {
  try {
    await api.logout()
    localStorage.removeItem('username')
    emit('logout')
  } catch (error) {
    console.error('Error al cerrar sesión:', error)
  }
}

onMounted(() => {
  loadPeliculas()
})
</script>

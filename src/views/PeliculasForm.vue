<template>
  <div class="bg-white/10 backdrop-blur-md rounded-lg p-6 text-white shadow-lg">
    <h2 class="text-2xl font-bold mb-6">{{ editingId ? 'Editar Película' : 'Nueva Película' }}</h2>

    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div>
        <label class="block text-sm font-medium mb-2">Nombre</label>
        <input
          v-model="form.nombre"
          type="text"
          class="w-full px-4 py-2 rounded bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
          placeholder="Nombre de la película"
          required
        />
      </div>

      <div>
        <label class="block text-sm font-medium mb-2">Director</label>
        <input
          v-model="form.director"
          type="text"
          class="w-full px-4 py-2 rounded bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
          placeholder="Director"
          required
        />
      </div>

      <div>
        <label class="block text-sm font-medium mb-2">Año</label>
        <input
          v-model.number="form.year"
          type="number"
          class="w-full px-4 py-2 rounded bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
          placeholder="2024"
          required
        />
      </div>

      <div>
        <label class="block text-sm font-medium mb-2">Productora</label>
        <input
          v-model="form.productora"
          type="text"
          class="w-full px-4 py-2 rounded bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
          placeholder="Productora"
          required
        />
      </div>

      <div>
        <label class="block text-sm font-medium mb-2">Presupuesto (€)</label>
        <input
          v-model.number="form.presupuesto"
          type="number"
          class="w-full px-4 py-2 rounded bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
          placeholder="1000000"
          required
        />
      </div>

      <div class="flex gap-2">
        <button
          type="submit"
          :disabled="loading"
          class="flex-1 bg-green-500 hover:bg-green-600 px-4 py-2 rounded font-semibold transition disabled:opacity-50"
        >
          {{ loading ? 'Guardando...' : editingId ? 'Actualizar' : 'Crear' }}
        </button>
        <button
          v-if="editingId"
          type="button"
          @click="resetForm"
          class="flex-1 bg-gray-500 hover:bg-gray-600 px-4 py-2 rounded font-semibold transition"
        >
          Cancelar
        </button>
      </div>

      <p v-if="error" class="text-red-300 text-sm">{{ error }}</p>
      <p v-if="success" class="text-green-300 text-sm">{{ success }}</p>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { api } from '../services/api.js'

const emit = defineEmits(['success'])

const form = ref({
  nombre: '',
  director: '',
  year: new Date().getFullYear(),
  productora: '',
  presupuesto: ''
})

const editingId = ref(null)
const loading = ref(false)
const error = ref('')
const success = ref('')

const resetForm = () => {
  form.value = {
    nombre: '',
    director: '',
    year: new Date().getFullYear(),
    productora: '',
    presupuesto: ''
  }
  editingId.value = null
  error.value = ''
  success.value = ''
}

const handleSubmit = async () => {
  error.value = ''
  success.value = ''

  if (!form.value.nombre || !form.value.director || !form.value.productora) {
    error.value = 'Por favor completa todos los campos'
    return
  }

  loading.value = true
  try {
    console.log('Editando:', editingId.value, 'Datos:', form.value)
    if (editingId.value) {
      console.log('Actualizando película con ID:', editingId.value)
      const response = await api.updatePelicula(editingId.value, form.value)
      console.log('Respuesta de actualización:', response)
      success.value = 'Película actualizada correctamente'
    } else {
      console.log('Creando nueva película')
      const response = await api.createPelicula(form.value)
      console.log('Respuesta de creación:', response)
      success.value = 'Película creada correctamente'
    }
    resetForm()
    emit('success')
  } catch (err) {
    console.error('Error en handleSubmit:', err)
    error.value = 'Error al guardar: ' + err.message
  } finally {
    loading.value = false
  }
}

defineExpose({
  editPelicula: (pelicula) => {
    form.value = { ...pelicula }
    editingId.value = pelicula.id
  }
})
</script>

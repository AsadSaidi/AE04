<template>
  <div class="bg-white/10 backdrop-blur-md rounded-lg p-6 text-white shadow-lg">
    <h2 class="text-2xl font-bold mb-6">Listado de Películas</h2>

    <div v-if="loading" class="text-center py-8">
      <p class="text-white/70">Cargando películas...</p>
    </div>

    <div v-else-if="!peliculas || peliculas.length === 0" class="text-center py-8">
      <p class="text-white/70">No hay películas disponibles. ¡Crea la primera!</p>
    </div>

    <div v-else class="space-y-4">
      <div
        v-for="pelicula in peliculas"
        :key="pelicula.id"
        class="bg-white/5 border border-white/20 rounded-lg p-4 hover:bg-white/10 transition"
      >
        <div class="flex justify-between items-start mb-2">
          <div>
            <h3 class="text-lg font-bold">{{ pelicula.nombre }}</h3>
            <p class="text-sm text-white/70">Director: {{ pelicula.director }}</p>
          </div>
          <div class="flex gap-2">
            <button
              @click="$emit('edit', pelicula)"
              class="bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded text-sm font-semibold transition"
            >
              Editar
            </button>
            <button
              @click="$emit('delete', pelicula.id)"
              class="bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-sm font-semibold transition"
            >
              Eliminar
            </button>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span class="text-white/70">Año:</span>
            <p class="font-semibold">{{ pelicula.year }}</p>
          </div>
          <div>
            <span class="text-white/70">Productora:</span>
            <p class="font-semibold">{{ pelicula.productora }}</p>
          </div>
          <div class="col-span-2">
            <span class="text-white/70">Presupuesto:</span>
            <p class="font-semibold">{{ formatCurrency(pelicula.presupuesto) }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({

    
  peliculas: {
    type: Array,
    default: () => []
  },
  loading: {
    type: Boolean,
    default: false
  }
})

defineEmits(['delete', 'edit'])

const formatCurrency = (value) => {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR'
  }).format(value)
}
</script>

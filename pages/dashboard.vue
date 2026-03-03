<script setup lang="ts">
import { z } from 'zod';
import type { Movie } from '~/types';

definePageMeta({
  middleware: 'auth',
});

const toast = useToast();

const MovieFormSchema = z.object({
  title: z.string().min(1, 'El título es obligatorio'),
  year: z
    .number({ invalid_type_error: 'El año debe ser un número' })
    .int()
    .min(1800, 'El año es demasiado bajo')
    .max(3000, 'El año es demasiado alto'),
  genre: z.string().min(1, 'El género es obligatorio'),
  director: z.string().min(1, 'El director es obligatorio'),
  budget: z
    .number({ invalid_type_error: 'El presupuesto debe ser un número' })
    .int()
    .nonnegative('El presupuesto no puede ser negativo'),
  studio: z.string().min(1, 'La productora es obligatoria'),
});

type MovieFormInput = z.infer<typeof MovieFormSchema>;

const {
  data: movies,
  pending,
  refresh,
  error,
} = await useFetch<Movie[]>('/api/peliculas');

const isEditing = ref(false);
const editingId = ref<number | null>(null);

const formState = reactive<MovieFormInput>({
  title: '',
  year: new Date().getFullYear(),
  genre: '',
  director: '',
  budget: 0,
  studio: '',
});

const resetForm = () => {
  isEditing.value = false;
  editingId.value = null;
  formState.title = '';
  formState.year = new Date().getFullYear();
  formState.genre = '';
  formState.director = '';
  formState.budget = 0;
  formState.studio = '';
};

const startEdit = (movie: Movie) => {
  isEditing.value = true;
  editingId.value = movie.id;
  formState.title = movie.title;
  formState.year = movie.year;
  formState.genre = movie.genre;
  formState.director = movie.director;
  formState.budget = movie.budget;
  formState.studio = movie.studio;
};

const handleSubmit = async () => {
  const parsed = MovieFormSchema.safeParse(formState);
  if (!parsed.success) {
    toast.add({
      title: 'Error en el formulario',
      description: 'Revisa los campos marcados',
      color: 'red',
    });
    return;
  }

  try {
    if (isEditing.value && editingId.value != null) {
      await $fetch(`/api/peliculas/${editingId.value}`, {
        method: 'PUT',
        body: parsed.data,
      });
      toast.add({
        title: 'Película actualizada',
        color: 'green',
      });
    } else {
      await $fetch('/api/peliculas', {
        method: 'POST',
        body: parsed.data,
      });
      toast.add({
        title: 'Película creada',
        color: 'green',
      });
    }
    await refresh();
    resetForm();
  } catch (err: any) {
    toast.add({
      title: 'Error al guardar',
      description: err?.data?.statusMessage || 'Inténtalo de nuevo',
      color: 'red',
    });
  }
};

const deleteMovie = async (id: number) => {
  if (!confirm('¿Seguro que quieres borrar esta película?')) return;

  try {
    await $fetch(`/api/peliculas/${id}`, {
      method: 'DELETE',
    });
    toast.add({
      title: 'Película eliminada',
      color: 'green',
    });
    await refresh();
  } catch (err: any) {
    toast.add({
      title: 'Error al eliminar',
      description: err?.data?.statusMessage || 'Inténtalo de nuevo',
      color: 'red',
    });
  }
};
</script>

<template>
  <UContainer class="py-8 space-y-8">
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-bold">Dashboard de Películas</h1>
        <p class="text-gray-500">
          Gestiona tus películas vinculadas al usuario autenticado.
        </p>
      </div>
    </div>

    <div class="grid gap-8 md:grid-cols-[2fr,1fr]">
      <UCard>
        <template #header>
          <div class="flex items-center justify-between">
            <h2 class="font-semibold">Listado de películas</h2>
            <UBadge v-if="movies" color="primary" variant="soft">
              {{ movies.length }} elementos
            </UBadge>
          </div>
        </template>

        <div v-if="pending" class="py-8 text-center text-gray-500">
          Cargando películas...
        </div>

        <div v-else-if="error" class="py-8 text-center text-red-500">
          Error al cargar las películas.
        </div>

        <UTable
          v-else
          :rows="movies || []"
          :columns="[
            { key: 'title', label: 'Título' },
            { key: 'year', label: 'Año' },
            { key: 'genre', label: 'Género' },
            { key: 'director', label: 'Director' },
            { key: 'actions', label: 'Acciones' },
          ]"
        >
          <template #cell(actions)="{ row }">
            <div class="flex gap-2">
              <UButton size="xs" color="primary" variant="soft" @click="startEdit(row)">
                Editar
              </UButton>
              <UButton
                size="xs"
                color="red"
                variant="soft"
                @click="deleteMovie(row.id)"
              >
                Borrar
              </UButton>
            </div>
          </template>
        </UTable>
      </UCard>

      <UCard>
        <template #header>
          <h2 class="font-semibold">
            {{ isEditing ? 'Editar película' : 'Nueva película' }}
          </h2>
        </template>

        <UForm :state="formState" class="space-y-4" @submit.prevent="handleSubmit">
          <UFormGroup label="Título" name="title">
            <UInput v-model="formState.title" placeholder="The Matrix" />
          </UFormGroup>

          <UFormGroup label="Año" name="year">
            <UInput v-model.number="formState.year" type="number" />
          </UFormGroup>

          <UFormGroup label="Género" name="genre">
            <UInput v-model="formState.genre" placeholder="Acción, Ciencia Ficción" />
          </UFormGroup>

          <UFormGroup label="Director" name="director">
            <UInput v-model="formState.director" placeholder="Lana & Lilly Wachowski" />
          </UFormGroup>

          <UFormGroup label="Presupuesto" name="budget">
            <UInput v-model.number="formState.budget" type="number" />
          </UFormGroup>

          <UFormGroup label="Productora" name="studio">
            <UInput v-model="formState.studio" placeholder="Warner Bros." />
          </UFormGroup>

          <div class="flex justify-end gap-2">
            <UButton variant="ghost" color="gray" @click="resetForm">
              Limpiar
            </UButton>
            <UButton type="submit" color="primary">
              {{ isEditing ? 'Guardar cambios' : 'Crear película' }}
            </UButton>
          </div>
        </UForm>
      </UCard>
    </div>
  </UContainer>
</template>


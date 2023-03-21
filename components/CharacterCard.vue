<script setup lang="ts">
  const props = defineProps({
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    species: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
  });

  // ternario para verificar se o personagem tem o status de vivo ou morto. assim aplicado um grayscale
  const personIsDead = computed(() =>
    props.status === "Dead" ? { grayscale: true } : {},
  );
</script>

<template>
  <div class="bg-zinc-100 border-zinc-100">
    <NuxtLink :to="`characters/${id}`">
      <NuxtImg
        :src="image"
        :modifiers="personIsDead"
        class="w-full"
      />
      <div class="p-5">
        <h3>Name: {{ name }}</h3>
        <p>Status: {{ status }}</p>
        <p>Species: {{ species }}</p>
        <p>Location: {{ location }}</p>
      </div>
    </NuxtLink>
  </div>
</template>

<style scoped></style>

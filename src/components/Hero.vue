<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const slides = ref([
  {
    title: "Transforming the construction industry with insight",
    image: "/hero1.jpg",
  },
  {
    title: "Next Level Asset Tracking",
    image: "/hero2.jpg",
  },
]);

const currentSlide = ref(0);
let intervalId = null;

function nextSlide() {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length;
}

function prevSlide() {
  currentSlide.value =
    (currentSlide.value - 1 + slides.value.length) % slides.value.length;
}

onMounted(() => {
  intervalId = setInterval(nextSlide, 10000);
});

onBeforeUnmount(() => {
  clearInterval(intervalId);
});
</script>

<template>
  <div class="relative w-full h-screen overflow-hidden">
    <!-- Slide -->
    <div
      class="w-full h-full bg-cover bg-center flex p-12 items-center justify-start transition-all duration-700 relative"
      :style="{ backgroundImage: `url(${slides[currentSlide].image})` }"
    >
      <!-- Dark overlay -->
      <div class="absolute inset-0 bg-black opacity-10"></div>
    </div>

    <!-- Custom Pagination -->
    <div
      class="absolute bottom-6 right-6 bg-black bg-opacity-70 text-white px-8 py-4 flex items-center space-x-4 z-20"
    >
      <button @click="prevSlide">
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <span class="text-sm font-semibold">
        {{ String(currentSlide + 1).padStart(2, "0") }} /
        {{ String(slides.length).padStart(2, "0") }}
      </span>
      <button @click="nextSlide">
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </div>
</template>

<style scoped>
/* Optional: smooth fade or slide transition */
</style>

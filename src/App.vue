<script setup>
import Hero from "@/components/Hero.vue";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div class="min-h-screen flex flex-col relative">
    <div class="absolute inset-0 pointer-events-none z-0">
      <div class="absolute left-1/4 h-full w-px bg-gray-200"></div>
      <div class="absolute left-1/2 h-full w-px bg-gray-200"></div>
      <div class="absolute left-3/4 h-full w-px bg-gray-200"></div>
    </div>

    <div class="relative z-10">
      <Navbar />
      <Hero />
      <div class="page-wrapper mt-3">
        <router-view />
      </div>
      <Footer />
    </div>
  </div>
</template>

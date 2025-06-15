<script setup>
import { ref } from "vue";

const slides = ref([
  "/berita1.jpg",
  "/berita2.jpg",
  "/berita3.jpg",
  "/berita4.jpeg",
  "/berita5.jpg",
]);

const current = ref(0);

function next() {
  current.value = (current.value + 1) % slides.value.length;
}

function prev() {
  current.value =
    (current.value - 1 + slides.value.length) % slides.value.length;
}

function goTo(index) {
  current.value = index;
}

const cards = ref([
  {
    id: 1,
    title: "Penyelesaian SISKOMKAP di 26 Kapal PT PELNI (Persero)",
    description:
      "Skyreach menyelesaikan Sistem Komunikasi di Kapal PT PELNI (Persero)",
    image: "/berita1.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "5 Kapal PELNI Sudah Terpasang Antena SAILINK",
    description:
      "Skyreach dalam proses instalasi antenna SAILINK di kapal PT PELNI (Persero)",
    image: "/berita2.jpg",
    link: "#",
  },
  {
    id: 3,
    title: "PT PELNI (Persero) Gandeng PT Skyreach Pengadaan SisKomKap",
    description:
      "Skyreach terpilih sebagai pemenang tender pengadaan Sistem Komunikasi Kapal (SisKomKap)",
    image: "/berita3.jpg",
    link: "#",
  },
  {
    id: 4,
    title: "Skyreach Sukses Integrasi VSAT di 10 Kapal Cargo",
    description:
      "Proyek integrasi VSAT pada 10 armada kargo berjalan sesuai jadwal.",
    image: "/berita4.jpeg",
    link: "#",
  },
  {
    id: 5,
    title: "Penguatan Komunikasi Maritim Indonesia Bersama Skyreach",
    description:
      "Skyreach turut mendukung visi Indonesia sebagai Poros Maritim Dunia.",
    image: "/berita5.jpg",
    link: "#",
  },
  {
    id: 6,
    title: "Sistem Komunikasi Skyreach Digunakan pada Kapal Penumpang",
    description:
      "Teknologi Skyreach turut menjaga keamanan dan kelancaran komunikasi.",
    image: "/berita6.jpg",
    link: "#",
  },
  {
    id: 7,
    title: "Perluasan Jaringan Komunikasi di Kawasan Indonesia Timur",
    description:
      "Skyreach tengah fokus pada instalasi di Indonesia bagian timur.",
    image: "/berita7.jpg",
    link: "#",
  },
  {
    id: 8,
    title: "Modernisasi Peralatan Komunikasi Kapal Tua",
    description:
      "Penggantian peralatan komunikasi pada kapal yang masih menggunakan teknologi usang.",
    image: "/berita8.jpg",
    link: "#",
  },
  {
    id: 9,
    title: "Kerjasama Skyreach dan Galangan Kapal Lokal",
    description:
      "Kolaborasi demi memenuhi kebutuhan teknologi komunikasi pada kapal buatan Indonesia.",
    image: "/berita9.jpg",
    link: "#",
  },
  {
    id: 10,
    title: "Dukungan Skyreach Dalam Pengamanan Perairan Nusantara",
    description:
      "Teknologi komunikasi Skyreach turut berguna pada operasi pengamanan perairan Indonesia.",
    image: "/berita10.jpg",
    link: "#",
  },
]);
</script>

<template>
  <section>
    <div id="default-carousel" class="relative w-full">
      <!-- Carousel wrapper -->
      <div class="relative h-auto lg:h-[80vh] overflow-hidden md:h-100">
        <div
          v-for="(card, index) in cards"
          :key="index"
          :class="[
            'absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 duration-700 ease-in-out',
            index === current ? '' : 'hidden',
          ]"
        >
          <!-- <img :src="card.image" alt="carousel slide" /> -->
          <div
            class="grid grid-cols-1 h-auto lg:h-[80vh] lg:grid-cols-12 gap-10 mt-20"
          >
            <div
              class="bg-black z-10 col-span-1 lg:col-span-8 p-6 lg:px-56 lg:py-32"
            >
              <div class="bg-[#023C8E] w-8 h-2 mb-4"></div>
              <div class="">
                <h1 class="text-white text-4xl font-bold mb-4">
                  {{ card.title }}
                </h1>
                <p class="text-white font-normal">
                  {{ card.description }}
                </p>
              </div>
              <button
                class="bg-[#023C8E] text-white px-4 py-2 sm:px-6 sm:py-3 font-bold rounded hover:bg-blue-700 mt-5 transition"
              >
                BACA SELENGKAPNYA
              </button>
            </div>
            <div
              class="col-span-1 lg:col-span-4 relative mt-6 lg:mt-10 z-20 p-6 lg:-ml-64"
            >
              <img :src="card.image" class="w-full h-64 lg:h-100" alt="" />
            </div>
          </div>
        </div>
      </div>

      <!-- Slider indicators -->
      <div
        class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3"
      >
        <button
          v-for="(_, index) in slides"
          :key="index"
          :class="[
            'w-3 h-3 rounded-full',
            current === index ? 'bg-gray-800' : 'bg-gray-400',
          ]"
          @click="goTo(index)"
        ></button>
      </div>

      <!-- Slider controls -->
      <button
        type="button"
        @click="prev"
        class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      >
        <span
          class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-gray-400 dark:group-focus:ring-gray-800/70 group-focus:outline-none"
        >
          <svg
            class="w-4 h-4 text-black dark:text-gray-200"
            viewBox="0 0 6 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
        </span>
      </button>

      <button
        type="button"
        @click="next"
        class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      >
        <span
          class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-gray-400 dark:group-focus:ring-gray-800/70 group-focus:outline-none"
        >
          <svg
            class="w-4 h-4 text-black dark:text-gray-200"
            viewBox="0 0 6 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
        </span>
      </button>
    </div>
  </section>
  <section class="mt-12">
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-6 px-20 py-10">
      <div class="lg:col-span-1">
        <h3 class="font-semibold mb-3 text-lg sm:text-xl">Categories</h3>
        <ul class="p-4 rounded-md dark:bg-gray-800">
          <li>
            <a
              href="#"
              class="block p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              <div class="font-normal">Goverment</div>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="block p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              <div class="font-normal">Maritime</div>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="block p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              <div class="font-normal">Energy</div>
            </a>
          </li>
        </ul>
      </div>

      <div class="lg:col-span-3">
        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10"
        >
          <div
            v-for="card in cards"
            :key="card.id"
            class="w-full bg-white shadow-md dark:bg-gray-800 flex flex-col justify-between rounded-md overflow-hidden transition transform hover:-translate-y-1 hover:shadow-lg"
          >
            <a :href="card.link">
              <img :src="card.image" alt="" class="w-full h-48 object-cover" />
            </a>

            <div class="p-6 sm:p-8 flex flex-col justify-between flex-1">
              <div>
                <a :href="card.link">
                  <h5
                    class="mb-2 text-lg sm:text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100"
                  >
                    {{ card.title }}
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {{ card.description }}
                </p>
              </div>

              <a
                :href="card.link"
                class="inline-flex items-center text-sm font-semibold text-[#023C8E] mt-4 group"
              >
                Selengkapnya
                <svg
                  class="rtl:rotate-180 w-3.5 h-3.5 ml-2 transition-all duration-500 ease-in-out group-hover:ml-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

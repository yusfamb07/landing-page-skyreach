<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { ref } from "vue";

const slides = ref([
  {
    title: "Natural Resources",
    description:
      "Perkebunan, pertambangan emas, industri penebangan dan pengolahan kayu, dan industri natural lainnya yang berlokasi di daerah terpencil/ pedalaman.",
    background: "/bg-industri1.jpg",
    logo: "/industri1.png",
  },
  {
    title: "Maritime & Ofshore",
    description:
      "Berbagai jenis kapal seperti, kapal tanker, perikanan, kapal pesiar, kapal kargo, kapal tongkang, dan pengeboran minyak lepas pantai..",
    background: "/bg-industri2.jpg",
    logo: "/industri2.png",
  },
  {
    title: "Energy",
    description:
      "Tambang minyak, emas, batubara, gas, dan peluang usaha lainnya yang beroperasi di lokasi terpencil/ pedalaman.",
    background: "/bg-industri3.png",
    logo: "/industri3.png",
  },
  {
    title: "Media",
    description:
      "Industri media televisi atau media lainnya yang membutuhkan koneksi cepat dan berkualitas untuk tayangan secara langsung di tempat kejadian (live streaming - on the spot).",
    background: "/bg-industri4.png",
    logo: "/industri4.png",
  },
  {
    title: "Goverment",
    description:
      "Pendidikan, kesehatan, dan kementrian lainnya yang membutuhkan kesejahteraan komunikasi di lokasi terpencil/ pedalaman di Indonesia.",
    background: "/bg-industri5.jpg",
    logo: "/industri5.png",
  },
  {
    title: "Flight",
    description:
      "Penerbangan yang membutuhkan konektivitas pada pesawat, baik untuk penerbangan sipil atau militer.",
    background: "/bg-industri6.jpg",
    logo: "/industri6.png",
  },
]);

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
    title:
      "PT PELNI (Persero) Gandeng PT Skyreach Untuk Pengadaan Sistem Komunikasi Kapal (SisKomKap) Bagi 26 Kapal",
    description:
      "Skyreach terpilih sebagai pemenang tender pengadaan Sistem Komunikasi Kapal (SisKomKap) untuk 26 Kapal PT PELNI (Persero) tahun 2022-2025.",
    image: "/berita3.jpg",
    link: "#",
  },
]);

const products = ref([
  {
    id: 1,
    title: "SKYLINK",
    subtitle: "Onboard Connectivity in the Sky",
    description:
      "Layanan ini didukung dengan sistem teruji untuk dapat mengakses informasi dan layanan komunikasi pada saat pesawat sedang beroperasi/ lepas landas di ketinggian, mulai dari regional, nasional, hingga internasional.",
    image: "/produk1.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "THEREACH",
    subtitle: "Teleport & Data Center",
    description:
      "Skyreach memiliki & mengoperasikan Thereach, sebuah teleport & pusat data (data center) yang berlokasi di Cicau, Cikarang Pusat, berjarak sekitar 35 km dari Jakarta.",
    image: "/produk2.jpg",
    link: "#",
  },
  {
    id: 3,
    title: "SKYWAY",
    subtitle: "Land Fixed VSAT",
    description:
      "Pengalaman Skyreach dalam instalasi & operasional Fixed VSAT di darat telah terbukti pada banyak proyek sejak awal Skyreach didirikan, baik itu pada pemerintahan, lembaga, berbagai perusahaan, dan proyek lainnya. Menggunakan SCPC atau TDMA pada jaringan terbaik C-Band atau Ku-Band yang kami berikan.",
    image: "/produk3.jpg",
    link: "#",
  },
  {
    id: 4,
    title: "DISCOVERY",
    subtitle: "Land Mobility VSAT",
    description:
      "Skyreach telah diakui secara internasional untuk pengiriman teknologi Satcom On The Move (SOTM) terbaru dalam proyek pemerintah & militer. Layanan mobilitas darat harus memberikan kemudahan bagi pengguna untuk ditempatkan di mana saja & kapan saja dengan mudah.",
    image: "/produk4.jpg",
    link: "#",
  },
  {
    id: 5,
    title: "SAILINK",
    subtitle: "Maritime Connectivity",
    description:
      "Skyreach telah berhasil menetapkan standar layanan konektivitas maritim untuk pasar Indonesia hingga internasional dan dipercayai langsung oleh beberapa perusahaan kapal laut terbesar di Indonesia. Skyreach menyediakan solusi L-Band sebagai pelengkap konektivitas maritim SAILINK®.",
    image: "/produk5.jpg",
    link: "#",
  },
]);

const onSwiper = (swiper) => {
  console.log("swiper initialized", swiper);
};

const onSlideChange = (swiper) => {
  console.log("slide changed to index", swiper.activeIndex);
};
</script>
<template>
  <section class="mb-3">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-20">
      <div
        class="bg-black z-10 h-auto lg:h-[80vh] col-span-1 lg:col-span-8 p-6 lg:px-56 lg:py-32"
      >
        <div class="bg-[#023C8E] w-8 h-2 mb-4"></div>
        <div class="">
          <h1 class="text-white text-4xl font-bold mb-4">TENTANG SKYREACH</h1>
          <p class="text-white font-normal">
            Skyreach adalah penyelenggara jaringan telekomunikasi berbasis
            satelit, dengan lisensi Jaringan Tetap Tertutup VSAT yang
            dikeluarkan oleh Kementrian Komunikasi dan Informasi. Layanan
            Skyreach meliputi cakupan nasional dan internasional, dimana layanan
            dan solusi yang disediakan dapat digunakan oleh berbagai industri
            seperti, maritim, aviasi, energi & sumber daya alam, media
            penyiaran, operator telekomunikasi dan pemerintah.
          </p>
        </div>
      </div>
      <div
        class="col-span-1 lg:col-span-4 relative mt-6 lg:mt-20 z-20 p-6 lg:-ml-64"
      >
        <iframe
          class="w-full h-64 lg:h-100"
          src="https://www.youtube.com/embed/QE8eKhX5M2A"
        ></iframe>
      </div>
    </div>
  </section>

  <section class="mb-3">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 mt-20">
      <div>
        <img src="/teknologi.jpeg" class="w-full h-auto" alt="" />
      </div>
      <div class="px-6 py-8 sm:px-12 lg:px-32">
        <div class="bg-[#023C8E] w-8 h-2 mb-4"></div>

        <h1 class="text-black text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
          TEKNOLOGI
        </h1>
        <p class="text-black font-normal mt-2 w-full text-base sm:text-lg">
          Tim pengembang Skyreach berhasil memberikan manfaat dan layanan ini
          tanpa kompromi sehingga Anda tidak perlu khawatir akan apapun.
          Skyreach memberikan layanan telekomunikasi VSAT dengan fitur jernih,
          optimal, serta dapat diaudit.
        </p>
        <div class="flex gap-2 mt-5">
          <img src="/tekno1.png" class="w-20 h-20 sm:w-24 sm:h-24" alt="" />
          <img src="/tekno2.png" class="w-20 h-20 sm:w-24 sm:h-24" alt="" />
          <img src="/tekno3.png" class="w-20 h-20 sm:w-24 sm:h-24" alt="" />
        </div>
        <button
          class="bg-[#023C8E] text-white px-4 py-2 sm:px-6 sm:py-3 font-bold rounded hover:bg-blue-700 mt-5 transition"
        >
          BACA SELENGKAPNYA
        </button>
      </div>
    </div>
  </section>

  <section class="mb-3">
    <div class="px-6 py-12 sm:px-12 lg:px-56">
      <div class="bg-[#023C8E] w-8 h-2 mb-4"></div>

      <h1 class="text-black text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
        INDUSTRI
      </h1>
      <p class="text-black font-normal mt-2 text-base sm:text-lg">
        Skyreach memahami kebutuhan Anda dan berharap menjadi solusi dalam
        permasalahan konektivitas pada bisnis Anda. Karena itulah Skyreach
        memfasilitasi layanan komunikasi dan teknologi terbaik di berbagai
        sektor Industri untuk memastikan Anda mendapatkan konektivitas tanpa
        batas seperti yang telah dijanjikan.
      </p>
    </div>

    <div class="px-6 sm:px-0 lg:pl-32">
      <swiper
        :slides-per-view="1"
        :space-between="30"
        :breakpoints="{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide v-for="(item, idx) in slides" :key="idx">
          <div
            :style="`background-image: url('${item.background}')`"
            class="aspect-square relative bg-center bg-cover transition-all duration-300 transform hover:scale-105 hover:cursor-pointer p-4 group"
          >
            <div
              class="absolute inset-0 bg-black opacity-50 transition-opacity duration-300 group-hover:opacity-0"
            ></div>

            <div class="relative p-6">
              <img
                :src="item.logo"
                alt="icon"
                class="w-16 h-16 sm:w-20 sm:h-20"
              />
            </div>

            <div class="absolute bottom-0 left-0 p-6 sm:p-10">
              <h3 class="text-md sm:text-lg font-semibold text-gray-100 mb-2">
                {{ item.title }}
              </h3>
              <p class="text-gray-100 text-sm sm:text-base">
                {{ item.description }}
              </p>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>

  <section class="mt-20">
    <div class="flex justify-center">
      <div class="bg-[#023C8E] w-8 h-2 mb-4"></div>
    </div>
    <div class="flex flex-col items-center text-center">
      <h1 class="text-black text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
        PRODUK
      </h1>
      <p class="text-black dark:text-gray-100 font-normal mt-2 sm:w-2/3">
        Untuk mendukung konektivitas pada sektor industri yang dituju, Skyreach
        menyadari untuk terus mempertahankan kualitas layanan dengan teknologi
        terbaik yang mempengaruhi kelangsungan bisnis pelanggan. Maka itu,
        Skyreach terus berinvestasi dan menciptakan berbagai solusi produk
        dengan tujuan yang tepat.
      </p>
    </div>

    <div
      class="mt-5 px-6 lg:mt-10 z-10 sm:px-12 lg:px-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10"
    >
      <div
        v-for="item in products"
        :key="item.id"
        class="max-w-sm border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700 group overflow-hidden relative"
      >
        <a :href="item.link">
          <img
            :src="item.image"
            :alt="item.title"
            class="w-full h-60 transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:h-80"
          />
        </a>

        <div
          class="absolute inset-0 flex flex-col items-center justify-center p-5 bg-black opacity-80 text-center text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"
        >
          <p>{{ item.description }}</p>
        </div>

        <div
          class="p-5 bg-white transition-opacity duration-500 group-hover:hidden"
        >
          <h5
            class="mb-0 text-xl text-center font-bold tracking-tight text-gray-900 dark:text-white"
          >
            {{ item.title }}
          </h5>
          <p class="text-center">{{ item.subtitle }}</p>
        </div>
      </div>
    </div>
  </section>

  <section class="mt-20">
    <div class="bg-black z-0 lg:h-[80vh] sm:h-[60vh]">
      <div class="px-6 z-0 sm:px-12 lg:px-56 py-12 sm:py-20 lg:py-24">
        <div class="bg-[#023C8E] w-8 h-2 mb-4"></div>

        <h1
          class="text-white dark:text-gray-100 text-2xl sm:text-3xl lg:text-4xl font-bold w-full sm:w-2/3"
        >
          ARTIKEL & BERITA TERBARU
        </h1>

        <p
          class="text-white dark:text-gray-100 font-normal mt-2 w-full sm:w-2/3"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. lo
        </p>
        <button
          class="bg-[#023C8E] text-white px-4 py-2 sm:px-6 sm:py-3 font-bold rounded hover:bg-blue-700 mt-5 transition"
        >
          BACA SELENGKAPNYA
        </button>
      </div>
    </div>

    <div
      class="px-6 -mt-24 lg:-mt-64 z-10 sm:px-12 lg:px-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10"
    >
      <div
        v-for="card in cards"
        :key="card.id"
        class="max-w-sm w-full bg-white shadow-sm dark:bg-gray-800 flex flex-col justify-between"
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
  </section>
</template>

<style></style>

<script setup>
import { ref } from "vue";

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
</script>

<template>
  <section class="mt-20">
    <div class="flex justify-center">
      <div class="bg-[#023C8E] w-8 h-2 mb-4"></div>
    </div>
    <div class="flex flex-col items-center text-center">
      <h1 class="text-black text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
        INDUSTRI
      </h1>
      <p class="text-black dark:text-gray-100 font-normal mt-2 sm:w-2/3">
        Skyreach memahami kebutuhan Anda dan berharap menjadi solusi dalam
        permasalahan konektivitas pada bisnis Anda. Karena itulah Skyreach
        memfasilitasi layanan komunikasi dan teknologi terbaik di berbagai
        sektor Industri untuk memastikan Anda mendapatkan konektivitas tanpa
        batas seperti yang telah dijanjikan.
      </p>
    </div>
  </section>

  <section class="mt-20">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 mb-10">
      <div class="flex justify-center items-center">
        <img src="/bg-industri1.jpg" class="w-full h-auto" alt="" />
      </div>
      <div class="px-4 py-5 sm:px-10 lg:px-24">
        <div class="bg-[#023C8E] w-8 h-2 mb-4"></div>

        <h1 class="text-black text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
          Natural Resources
        </h1>
        <p class="mb-0 text-black">
          Sesuai untuk bisnis : Perkebunan, pertambangan emas, industri
          penebangan dan pengolahan kayu, dan industri natural lainnya yang
          berlokasi di daerah terpencil/ pedalaman. <br /><span
            class="font-bold mt-5"
            >Solusi dari Skyreach :</span
          >
        </p>
        <ul
          class="text-black font-normal mt-2 w-full text-base sm:text-lg space-y-4 p-3"
        >
          <li class="flex items-center">
            <span class="flex-shrink-0 mr-3">
              <!-- icon centang -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#000"
                viewBox="0 0 24 24"
                class="w-6 h-6"
              >
                <path
                  d="M20 6L9 17L4 12"
                  stroke="#000"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            Dapat mengukur produksi secara langsung.
          </li>

          <li class="flex items-center">
            <span class="flex-shrink-0 mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#000"
                viewBox="0 0 24 24"
                class="w-6 h-6"
              >
                <path
                  d="M20 6L9 17L4 12"
                  stroke="#000"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            Melacak Kendaraan agar dapat memastikan pengiriman, serta
            meminimalkan kerugian.
          </li>

          <li class="flex items-center">
            <span class="flex-shrink-0 mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#000"
                viewBox="0 0 24 24"
                class="w-6 h-6"
              >
                <path
                  d="M20 6L9 17L4 12"
                  stroke="#000"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            Dapat berkomunikasi secara langsung antara kantor dan kendaraan
            melalui koneksi satelit.
          </li>

          <li class="flex items-center">
            <span class="flex-shrink-0 mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#000"
                viewBox="0 0 24 24"
                class="w-6 h-6"
              >
                <path
                  d="M20 6L9 17L4 12"
                  stroke="#000"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            Serta layanan kesejahteraan, seperti internet bagi para pekerja.
          </li>
        </ul>
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 mb-10">
      <div class="px-4 py-5 sm:px-10 lg:px-24">
        <div class="bg-[#023C8E] w-8 h-2 mb-4"></div>

        <h1 class="text-black text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
          Maritime & Ofshore
        </h1>
        <p class="mb-0 text-black">
          Sesuai untuk bisnis : Berbagai jenis kapal seperti, kapal tanker,
          perikanan, kapal pesiar, kapal kargo, kapal tongkang, dan pengeboran
          minyak lepas pantai. <br /><span class="font-bold mt-5"
            >Solusi dari Skyreach :</span
          >
        </p>
        <ul
          class="text-black font-normal mt-2 w-full text-base sm:text-lg space-y-4 p-3"
        >
          <li class="flex items-center">
            <span class="flex-shrink-0 mr-3">
              <!-- icon centang -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#000"
                viewBox="0 0 24 24"
                class="w-6 h-6"
              >
                <path
                  d="M20 6L9 17L4 12"
                  stroke="#000"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            Penyediaan komunikasi untuk pengiriman data, suara, dan video.
          </li>

          <li class="flex items-center">
            <span class="flex-shrink-0 mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#000"
                viewBox="0 0 24 24"
                class="w-6 h-6"
              >
                <path
                  d="M20 6L9 17L4 12"
                  stroke="#000"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            Pelacakan dan telemetri (pengukuran dan pelaporan informasi jarak).
          </li>

          <li class="flex items-center">
            <span class="flex-shrink-0 mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#000"
                viewBox="0 0 24 24"
                class="w-6 h-6"
              >
                <path
                  d="M20 6L9 17L4 12"
                  stroke="#000"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            Instalasi dan pemeliharaan perangkat (hardware).
          </li>

          <li class="flex items-center">
            <span class="flex-shrink-0 mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#000"
                viewBox="0 0 24 24"
                class="w-6 h-6"
              >
                <path
                  d="M20 6L9 17L4 12"
                  stroke="#000"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            Informasi durasi bicara (airtime), dan beberapa aplikasi spesifik
            lainnya yang biasa digunakan dalam operasi maritim.
          </li>

          <li class="flex items-center">
            <span class="flex-shrink-0 mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#000"
                viewBox="0 0 24 24"
                class="w-6 h-6"
              >
                <path
                  d="M20 6L9 17L4 12"
                  stroke="#000"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            Serta layanan kesejahteraan, seperti internet bagi para pekerja.
          </li>
        </ul>
      </div>
      <div class="flex justify-center items-center">
        <img src="/bg-industri2.jpg" class="w-full h-auto" alt="" />
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 mb-10">
      <div class="flex justify-center items-center">
        <img src="/bg-industri3.png" class="w-full h-auto" alt="" />
      </div>
      <div class="px-4 py-5 sm:px-10 lg:px-24">
        <div class="bg-[#023C8E] w-8 h-2 mb-4"></div>

        <h1 class="text-black text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
          Energy
        </h1>
        <p class="mb-0 text-black">
          Sesuai untuk bisnis : tambang minyak, emas, batubara, gas, dan peluang
          usaha lainnya yang beroperasi di lokasi terpencil/ pedalaman.
          <br /><span class="font-bold mt-5">Solusi dari Skyreach :</span>
        </p>
        <ul
          class="text-black font-normal mt-2 w-full text-base sm:text-lg space-y-4 p-3"
        >
          <li class="flex items-center">
            <span class="flex-shrink-0 mr-3">
              <!-- icon centang -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#000"
                viewBox="0 0 24 24"
                class="w-6 h-6"
              >
                <path
                  d="M20 6L9 17L4 12"
                  stroke="#000"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            Pemantauan produksi tambang.
          </li>

          <li class="flex items-center">
            <span class="flex-shrink-0 mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#000"
                viewBox="0 0 24 24"
                class="w-6 h-6"
              >
                <path
                  d="M20 6L9 17L4 12"
                  stroke="#000"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            Mengukur produksi secara langsung.
          </li>

          <li class="flex items-center">
            <span class="flex-shrink-0 mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#000"
                viewBox="0 0 24 24"
                class="w-6 h-6"
              >
                <path
                  d="M20 6L9 17L4 12"
                  stroke="#000"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            Melacak Kendaraan agar dapat memastikan pengiriman, serta
            meminimalkan kerugian.
          </li>

          <li class="flex items-center">
            <span class="flex-shrink-0 mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#000"
                viewBox="0 0 24 24"
                class="w-6 h-6"
              >
                <path
                  d="M20 6L9 17L4 12"
                  stroke="#000"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            Dapat berkomunikasi secara langsung antara kantor dan kendaraan
            melalui koneksi satelit.
          </li>
          <li class="flex items-center">
            <span class="flex-shrink-0 mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#000"
                viewBox="0 0 24 24"
                class="w-6 h-6"
              >
                <path
                  d="M20 6L9 17L4 12"
                  stroke="#000"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            Penyediaan komunikasi untuk pengiriman data, suara, dan video.
          </li>
          <li class="flex items-center">
            <span class="flex-shrink-0 mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#000"
                viewBox="0 0 24 24"
                class="w-6 h-6"
              >
                <path
                  d="M20 6L9 17L4 12"
                  stroke="#000"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            Serta layanan kesejahteraan, seperti internet bagi para pekerja.
          </li>
        </ul>
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 mb-10">
      <div class="px-4 py-5 sm:px-10 lg:px-24">
        <div class="bg-[#023C8E] w-8 h-2 mb-4"></div>

        <h1 class="text-black text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
          Goverment
        </h1>
        <p class="mb-0 text-black font-bold">Sesuai untuk bisnis:</p>
        <ul
          class="text-black font-normal mt-2 w-full text-base sm:text-lg space-y-4 p-3"
        >
          <li class="flex items-center">
            <span class="flex-shrink-0 mr-3">
              <!-- icon centang -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#000"
                viewBox="0 0 24 24"
                class="w-6 h-6"
              >
                <path
                  d="M20 6L9 17L4 12"
                  stroke="#000"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            Kementerian : Pendidikan, kesehatan, dan kementrian lainnya yang
            membutuhkan kesejahteraan komunikasi di lokasi terpencil/ pedalaman
            di Indonesia.
          </li>
          <li class="flex items-center">
            <span class="flex-shrink-0 mr-3">
              <!-- icon centang -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#000"
                viewBox="0 0 24 24"
                class="w-6 h-6"
              >
                <path
                  d="M20 6L9 17L4 12"
                  stroke="#000"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            Lembaga Militer, pertahanan & Keamanan dan berbagai lembaga lainnya
            yang beroperasi di daerah perbatasan/ terpencil/ pedalaman
            Indonesia.
          </li>
        </ul>
        <p class="mb-0 text-black font-bold">Solusi dari Skyreach:</p>
        <ul
          class="text-black font-normal mt-2 w-full text-base sm:text-lg space-y-4 p-3"
        >
          <li class="flex items-center">
            <span class="flex-shrink-0 mr-3">
              <!-- icon centang -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#000"
                viewBox="0 0 24 24"
                class="w-6 h-6"
              >
                <path
                  d="M20 6L9 17L4 12"
                  stroke="#000"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            Mengakses informasi dan layanan komunikasi pada daerah yang belum
            dijangkau oleh layanan komunikasi terrestrial (kabel fiber optik,
            dan wireless BTS).
          </li>

          <li class="flex items-center">
            <span class="flex-shrink-0 mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#000"
                viewBox="0 0 24 24"
                class="w-6 h-6"
              >
                <path
                  d="M20 6L9 17L4 12"
                  stroke="#000"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            Menjalankan aplikasi online pemerintah agar dapat digunakan oleh
            seluruh masyarakat Indonesia.
          </li>
        </ul>
      </div>
      <div class="flex justify-center items-center">
        <img src="/bg-industri5.jpg" class="w-full h-auto" alt="" />
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 mb-10">
      <div class="flex justify-center items-center">
        <img src="/bg-industri4.png" class="w-full h-auto" alt="" />
      </div>
      <div class="px-4 py-5 sm:px-10 lg:px-24">
        <div class="bg-[#023C8E] w-8 h-2 mb-4"></div>

        <h1 class="text-black text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
          Media
        </h1>
        <p class="mb-0 text-black">
          Sesuai untuk bisnis : Industri media televisi atau media lainnya yang
          membutuhkan koneksi cepat dan berkualitas untuk tayangan secara
          langsung di tempat kejadian (live streaming - on the spot).
          <br /><span class="font-bold mt-5">Solusi dari Skyreach :</span>
        </p>
        <ul
          class="text-black font-normal mt-2 w-full text-base sm:text-lg space-y-4 p-3"
        >
          <li class="flex items-center">
            <span class="flex-shrink-0 mr-3">
              <!-- icon centang -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#000"
                viewBox="0 0 24 24"
                class="w-6 h-6"
              >
                <path
                  d="M20 6L9 17L4 12"
                  stroke="#000"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            Pengiriminan konten yang cepat dan berkualitas melalui satelit
            dengan berbagai format video MPEG2, MPEG4 untuk saluran HD dan Ultra
            HD.
          </li>

          <li class="flex items-center">
            <span class="flex-shrink-0 mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#000"
                viewBox="0 0 24 24"
                class="w-6 h-6"
              >
                <path
                  d="M20 6L9 17L4 12"
                  stroke="#000"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            Pengiriman konten secara langsung (real-time) dalam format IP,
            menggunakan teknologi multicast.
          </li>

          <li class="flex items-center">
            <span class="flex-shrink-0 mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#000"
                viewBox="0 0 24 24"
                class="w-6 h-6"
              >
                <path
                  d="M20 6L9 17L4 12"
                  stroke="#000"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            Menghadirkan layanan Land Mobility (VSAT portable yang diletakan
            pada kendaraan) yang memungkinkan Anda dapat langsung mengadakan
            penyiaran di tempat kejadian.
          </li>
        </ul>
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 mb-10">
      <div class="px-4 py-5 sm:px-10 lg:px-24">
        <div class="bg-[#023C8E] w-8 h-2 mb-4"></div>

        <h1 class="text-black text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
          Flight
        </h1>
        <p class="mb-5 text-black">
          <span class="font-bold">Sesuai untuk bisnis : </span>
          <br />Penerbangan yang membutuhkan konektivitas pada pesawat, baik
          untuk penerbangan sipil atau militer.
        </p>
        <p class="mb-5 text-black">
          <span class="font-bold">Solusi dari Skyreach : </span>
          <br />Mengakses informasi dan layanan komunikasi pada saat pesawat
          sedang beroperasi secara regional, nasional, dan internasional.
        </p>
      </div>
      <div class="flex justify-center items-center">
        <img src="/bg-industri6.jpg" class="w-full h-auto" alt="" />
      </div>
    </div>
  </section>

  <section class="mt-20">
    <div class="flex justify-center">
      <div class="bg-[#023C8E] w-8 h-2 mb-4"></div>
    </div>
    <div class="flex flex-col items-center text-center">
      <h1 class="text-black text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
        DAPATKAN PRODUK & LAYANAN TEPAT UNTUK BISNIS ANDA
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
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import { ref, onMounted, onUnmounted } from "vue";

export default {
  name: "Navbar",
  setup() {
    const isOpen = ref(false);
    const isScrolled = ref(false);
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
          "PT PELNI (Persero) Gandeng Skyreach Pengadaan Sistem Komunikasi Kapal",
        description:
          "Skyreach terpilih sebagai pemenang tender pengadaan Sistem Komunikasi Kapal (SisKomKap) untuk 26 Kapal PT PELNI (Persero) tahun 2022-2025.",
        image: "/berita3.jpg",
        link: "#",
      },
    ]);

    const handleScroll = () => {
      isScrolled.value = window.scrollY > 20;
    };

    const toggleMenu = () => {
      isOpen.value = !isOpen.value;
    };

    onMounted(() => {
      window.addEventListener("scroll", handleScroll, { passive: true });
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });

    return {
      isOpen,
      isScrolled,
      cards,
      toggleMenu,
    };
  },
};
</script>

<template>
  <nav
    :class="[
      'fixed top-0 left-0 w-full z-50 transition-colors duration-300 ease-in-out py-3',
      isScrolled ? 'bg-black' : 'bg-transparent',
    ]"
  >
    <div class="px-8 sm:px-12 flex items-center justify-between mx-auto p-4">
      <div class="flex items-center justify-between gap-10">
        <a
          href="https://skyreach.id/"
          class="flex items-center space-x-3 rtl:space-x-reverse -mt-6"
        >
          <img
            src="/logo-skyreach-white.png"
            class="h-15"
            alt="Skyreach Logo"
          />
        </a>
      </div>
      <div class="flex items-center space-x-4 md:order-2">
        <button
          type="button"
          data-dropdown-toggle="language-dropdown-menu"
          class="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-white rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-gray-900"
        >
          <svg
            class="w-5 h-5 rounded-full me-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 3900 3900"
          >
            <path fill="#b22234" d="M0 0h7410v3900H0z" />
            <path
              d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0"
              stroke="#fff"
              stroke-width="300"
            />
            <path fill="#3c3b6e" d="M0 0h2964v2100H0z" />
            <g fill="#fff">
              <g id="d">
                <g id="c">
                  <g id="e">
                    <g id="b">
                      <path
                        id="a"
                        d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z"
                      />
                      <use xlink:href="#a" y="420" />
                      <use xlink:href="#a" y="840" />
                      <use xlink:href="#a" y="1260" />
                    </g>
                    <use xlink:href="#a" y="1680" />
                  </g>
                  <use xlink:href="#b" x="247" y="210" />
                </g>
                <use xlink:href="#c" x="494" />
              </g>
              <use xlink:href="#d" x="988" />
              <use xlink:href="#c" x="1976" />
              <use xlink:href="#e" x="2470" />
            </g>
          </svg>
          English (US)
        </button>
        <button
          @click="toggleMenu"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-language"
          :aria-expanded="isOpen"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              :d="isOpen ? 'M1 1h15M1 7h15M1 13h15' : 'M1 1h15M1 7h15M1 13h15'"
            />
          </svg>
        </button>
      </div>
      <div
        :class="[
          'items-center justify-between w-full md:flex md:w-auto md:order-1',
          isOpen ? 'block' : 'hidden',
        ]"
        id="mega-menu-full"
      >
        <ul
          class="text-md gap-8 flex flex-col p-4 md:p-0 mt-4 border rounded-lg bg-black md:bg-transparent md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-transparent md:dark:bg-transparent dark:border-gray-700"
        >
          <li>
            <RouterLink
              to="/"
              class="block py-2 px-3 text-white rounded-sm hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              @click="isOpen = false"
              >Home</RouterLink
            >
          </li>
          <li class="relative">
            <button
              id="mega-menu-full-dropdown-button"
              data-collapse-toggle="mega-menu-full-dropdown"
              class="flex items-center justify-between w-full py-2 px-3 text-white rounded-sm md:w-auto hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
            >
              Berita
              <svg
                class="w-2.5 h-2.5 ms-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <div
              id="mega-menu-full-dropdown"
              class="hidden absolute top-full left-0 md:left-1/6 transform md:-translate-x-1/6 mt-2 w-full md:w-max border border-gray-200 shadow-lg bg-gray-50 md:bg-white dark:bg-gray-800 dark:border-gray-600 z-40"
            >
              <div
                class="grid max-w-screen-xl px-6 py-4 text-gray-900 dark:text-white sm:grid-cols-8 gap-4"
              >
                <div>
                  <h3 class="font-semibold mb-3">Categories</h3>
                  <ul>
                    <li>
                      <a
                        href="#"
                        class="block p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                        @click="isOpen = false"
                      >
                        <div class="font-normal">Goverment</div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                        @click="isOpen = false"
                      >
                        <div class="font-normal">Maritime</div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                        @click="isOpen = false"
                      >
                        <div class="font-normal">Energy</div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="col-span-6">
                  <div
                    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-10"
                  >
                    <div
                      v-for="card in cards"
                      :key="card.id"
                      class="w-full bg-white shadow-sm dark:bg-gray-800 flex flex-col justify-between"
                    >
                      <a :href="card.link" @click="isOpen = false">
                        <img
                          :src="card.image"
                          alt=""
                          class="w-full h-48 object-cover"
                        />
                      </a>
                      <div
                        class="p-6 sm:p-8 flex flex-col justify-between flex-1"
                      >
                        <div>
                          <a :href="card.link" @click="isOpen = false">
                            <h5
                              class="mb-2 text-lg sm:text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100"
                            >
                              {{ card.title }}
                            </h5>
                          </a>
                          <p
                            class="mb-3 font-normal text-gray-700 dark:text-gray-400"
                          >
                            {{ card.description }}
                          </p>
                        </div>
                        <RouterLink
                          to="/berita"
                          class="inline-flex items-center text-sm font-semibold text-[#023C8E] mt-4 group"
                          @click="isOpen = false"
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
                        </RouterLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <RouterLink
              to="/teknologi"
              class="block py-2 px-3 text-white rounded-sm hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              @click="isOpen = false"
              >Teknologi</RouterLink
            >
          </li>
          <li>
            <button
              id="dropdownNavbarLink"
              data-dropdown-toggle="dropdownNavbar"
              class="flex items-center justify-between w-full py-2 px-3 text-white hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
            >
              Industri
              <svg
                class="w-2.5 h-2.5 ml-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <div
              id="dropdownNavbar"
              class="z-10 hidden font-normal bg-white divide-y divide-gray-700 p-5 shadow-sm w-72 dark:bg-gray-700 dark:divide-gray-600"
            >
              <ul
                class="py-2 text-sm text-gray-700 dark:text-gray-400"
                aria-labelledby="dropdownNavbarLink"
              >
                <li
                  v-for="industry in [
                    { name: 'Natural Resources', icon: '/industri-black1.png' },
                    {
                      name: 'Maritime & Offshore',
                      icon: '/industri-black2.png',
                    },
                    { name: 'Energy', icon: '/industri-black3.png' },
                    { name: 'Media', icon: '/industri-black4.png' },
                    { name: 'Government', icon: '/industri-black5.png' },
                    { name: 'Flight', icon: '/industri-black6.png' },
                  ]"
                  :key="industry.name"
                >
                  <RouterLink
                    to="/industri"
                    class="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                    @click="isOpen = false"
                  >
                    <img
                      class="w-10 h-10"
                      :src="industry.icon"
                      :alt="industry.name"
                    />
                    <div class="font-semibold">{{ industry.name }}</div>
                  </RouterLink>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <RouterLink
              to="/about"
              class="block py-2 px-3 text-white rounded-sm hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              @click="isOpen = false"
              >Tentang Kami
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
#mega-menu-full {
  transition: all 0.3s ease-in-out;
}

@media (max-width: 767px) {
  #mega-menu-full {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: #000;
    padding: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  #mega-menu-full ul {
    gap: 1rem;
  }
}
</style>

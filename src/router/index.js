import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Industri from "@/views/Industri.vue";
import TentangKami from "@/views/TentangKami.vue";
import Berita from "@/views/Berita.vue";
import Teknologi from "@/views/Teknologi.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "Tentang Kami",
    component: TentangKami,
  },

  {
    path: "/berita",
    name: "Berita",
    component: Berita,
  },

  {
    path: "/industri",
    name: "Industri",
    component: Industri,
  },

  {
    path: "/teknologi",
    name: "Teknologi",
    component: Teknologi,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

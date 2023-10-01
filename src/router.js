import { createWebHistory, createRouter } from "vue-router";
import Home from "./pages/home.vue";
import Cart from "./pages/cart.vue";
import Inner from "./pages/inner.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/Inner",
    name: "Inner",
    component: Inner,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
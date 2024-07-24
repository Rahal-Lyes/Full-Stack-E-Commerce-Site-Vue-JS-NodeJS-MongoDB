import Vue from "vue";
import VueRouter from "vue-router";
import ProductsPage from "../views/ProductsPage.vue";
import ProductDetails from "../views/ProductDetails";
import cartPage from "../views/CartPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/products",
    name: "ProductsPage",
    component: ProductsPage,
  },
  {
    path: "/product/:id",
    name: "ProductDetails",
    component: ProductDetails,
  },
  {
    path: "/cart",
    name: "cartPage",
    component: cartPage,
  },
  {
    path: "/",
    redirect: "/products",
  },
  {
    path: "*",
    component: () => import("../views/404Page.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

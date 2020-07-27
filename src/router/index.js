import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Recipe from "../views/Recipe.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/add",
    name: "Add",
    component: () => import("../views/Add.vue"),
  },
  { path: "/recipe/:id", name: "recipe", component: Recipe, props: true },
  {
    path: "/recipe/:id/edit",
    name: "Edit",
    component: () => import("../views/Add.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

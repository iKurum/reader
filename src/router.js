import Vue from "vue";
import Router from "vue-router";
import Index from "./views/Index.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "index",
      component: Index
    },
    {
      path: "/search",
      name: "search",
      component: () => import("./views/Search.vue")
    },
    {
      path: "/home",
      name: "home",
      component: () => import("./views/Home.vue")
    }
  ]
});

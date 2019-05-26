import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import SignIn from "./views/Auth/SignIn.vue";
import Recover from "./views/Auth/Recover.vue";
import Reset from "./views/Auth/Reset.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/signin",
      name: "signin",
      component: SignIn
    },
    {
      path: "/recover",
      name: "recover",
      component: Recover
    },
    {
      path: "/reset",
      name: "reset",
      component: Reset
    }
  ]
});

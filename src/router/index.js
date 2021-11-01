import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/contact",
    name: "Contact",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Contact.vue"),
  },
  {
    path: "/projects/:name",
    name: "Project",
    props: true,
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Project.vue"),
  },
  {
    path: "/music/:name",
    name: "Music",
    props: true,
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Music.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;

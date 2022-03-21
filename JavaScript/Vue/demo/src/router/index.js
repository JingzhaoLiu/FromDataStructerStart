import { createRouter, createWebHashHistory } from "vue-router";

// import Home from "../views/Home.vue";
// import Login from "../views/Login.vue";

const routes = [
  {
    path: "/",
    // name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/home",
    // name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/todo",
    // name: "Home",
    component: () => import("../views/Todo.vue"),
  },
  {
    path: "/todo1",
    // name: "Home",
    component: () => import("../views/Todo1.vue"),
  },
  {
    path: "/login",
    // name: "Login",
    component: () => import("../views/Login.vue"),
    beforeEnter: (to, from, next) => {
      const { isLogin } = localStorage;
      isLogin === "true" ? next({ path: "/" }) : next();
    },
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const { isLogin } = localStorage;
  isLogin === "true" || to.path === "/login" ? next() : next({ path: "/login" });
});

export default router;

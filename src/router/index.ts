import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/home",
      name: "home",
      component: HomePage,
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/home",
      name: "notFound",
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../pages/AboutPage.vue"),
    },
    {
      path: "/select-questions",
      name: "selectQuestions",
      component: () => import("../pages/QuestionTypesPage.vue"),
    },
    {
      path: "/example",
      name: "example",
      component: () => import("../components/ExampleQuestion2.vue"),
    },
  ],
});

export default router;

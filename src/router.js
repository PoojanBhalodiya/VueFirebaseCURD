import { createRouter, createWebHistory } from "vue-router";
import UserCreate from "@/components/UserCreate.vue";
import UserList from "@/components/UserList.vue";
import UserEdit from "@/components/UserEdit.vue";

const routes = [
  {
    path: "/",
    name: "add",
    component: UserCreate,
  },
  {
    path: "/list",
    name: "list",
    component: UserList,
  },
  {
    path: "/edit/:id",
    name: "edit",
    component: UserEdit,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

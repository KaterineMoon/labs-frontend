import Vue from "vue";
import Router from "vue-router";
import SignUp from "./views/SignUp";
import Login from "./views/Login";
import Home from "./views/Home";
import AddRole from "./components/AddRole";
import MisCursos from "./views/MisCursos";
import ListRoles from "./components/ListRoles";
import CreateCourse from "./components/CreateCourse";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/registro",
      name: "signup",
      component: SignUp,
    },
    {
      path: "/mis-cursos",
      name: "mis-Cursos",
      component: MisCursos
    },
    {
      path: "/",
      alias: "/iniciar-sesion",
      name: "login",
      component: Login,
    },
    {
      path: "/principal",
      name: "home",
      component: Home,
      children: [
        {
          path: "nuevo-rol",
          name: "add-role",
          component: AddRole,
        },
        {
          path: "roles",
          name: "list-roles",
          component: ListRoles,
        },
        {
          path: "crear-curso",
          name: "create-course",
          component: CreateCourse
        },
      ]
    }
  ]
})


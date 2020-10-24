<template>
  <div class="container-fluid mt-2">
    <h1>Bienvenido al dummy</h1>
    <div class="options">
      <div>
        <router-link
          :to="{ name: 'add-role' }"
          tag="button"
          class="btn btn-primary"
          >Añadir rol</router-link
        >
      </div>
      <div>
        <router-link
          :to="{ name: 'list-roles' }"
          tag="button"
          class="btn btn-primary"
          >Tus roles</router-link
        >
      </div>
      <div>
        <router-link
          :to="{ name: 'mis-cursos' }"
          tag="button"
          class="btn btn-primary"
          >Tus cursos</router-link
        >
      </div>
      <div v-if="this.role.id == 2">
        <router-link
          :to="{ name: 'create-course' }"
          tag="button"
          class="btn btn-primary"
          >Crear curso</router-link
        >
      </div>
    </div>

    <div class="row">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "Home",
  data() {
    return {
      show: true,
      role: Object
    };
  },
  beforeCreate() {  
    const reqPath = '/obtener-rol'
    if (!localStorage.getItem("token-ingesoft")) {
      this.$router.push({ name: "login" });
    }
    console.log(`${this.$store.state.backURL}` + reqPath);
    axios.get(`${this.$store.state.backURL}` + reqPath, {
      params:{access_token: localStorage.getItem("token-ingesoft")}
    }).then((response) =>{
      this.role = response.data
      console.log(this.role);
    })
  },
};
</script>

<style>
.options {
  display: flex;
  justify-content: flex-start;
}
</style>

<template>
  <div class="container col-12 col-sm-8 col-md-6 col-lg-4 text-center">
    <h2 class="col-12 title mb-3">Mis Roles</h2>
    <div v-for="role in roles" :key="role.id">
      <h3>{{ role.name }}</h3>
    </div>
  </div>
</template>

<script>
import axios from "axios";
const requestPath = "/mis-roles";
export default {
  name: "ListRoles",
  data() {
    return {
      roles: [{ id: 2, name: "Mi rol" }],
    };
  },
  beforeCreate() {
    axios
      .get(this.$store.state.backURL + requestPath, {
        params: { access_token: localStorage.getItem("token") },
      })
      .then((response) => {
        if (response.status !== 200) {
          alert("Se produjo un error para encontrar los roles del usuario");
        } else {
          this.roles = response.data;
        }
      })
      .catch((error) => {
        alert("Error en la petición");
        console.log(error);
      });
  },
};
</script>

<style scoped>
.title {
  background: rgb(18, 143, 226);
  color: white;
  border-radius: 10px !important;
  margin-bottom: 1rem;
}
</style>

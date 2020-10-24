<template>
<div>
  <h1>Mis cursos:</h1>
  <div v-for="course in courses" v-bind:key="course">
    <h3 style="background-color: lightskyblue; margin-bottom: 0px">Curso: {{course.name}}</h3>
    <h4 style="background-color: lightgreen">&nbsp; Rol: {{course.role.name}}</h4>
  </div>
</div>
</template>

<script>

import axios from 'axios'

export default {
name: "MisCursos",
  data() {
    return {
      courses: [],

    }
  },
  beforeMount() {
    const coursePath = "/mis-cursos";

    axios
        .get(this.$store.state.backURL + coursePath,
            {
              params: {
                access_token: localStorage.getItem("token")
              }
            })
        .then((response) => {
          if (response.status !== 200) {
            alert("Error en la petición. Intente nuevamente");
          } else {
            let courseResponse = response.data;

            courseResponse.forEach((item) => {
              this.courses.push(item)
            });
          }
        })
        .catch((response) => {
          console.log(response.status);
          alert("Error en la petición");
        });
  }
}
</script>

<style scoped>

</style>
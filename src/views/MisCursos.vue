<template>
<div>
  <div v-for="course in courses" v-bind:key="course">
    <h3>{{item.title}}</h3>
  </div>
</div>
</template>

<script>
export default {
name: "MisCursos",
  data() {
    return {
      email: '',
      courses: []

    }
  },
  beforeMount() {
    const coursePath = "/mis-cursos";

    axios
        .get(this.$store.state.backURL + coursePath,
            {
              params: {
                access_token: getAuthenticationToken()
              }
            })
        .then((response) => {
          if (response.status !== 200) {
            alert("Error en la petición. Intente nuevamente");
          } else {
            let courseResponse = response.data;

            postsResponse.forEach((item) => {
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
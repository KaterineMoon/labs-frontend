<template>
  <div class="row">
    <h1>Profesor</h1>
    <div>
      <form
        class="border border-primary rounded form-inline"
        @submit="crearCurso"
      >
        <div class="form-group col-12">
          <label class="custom-label col-md-3" for="names"
            >Nombre del curso</label
          >
          <input
            id="names"
            class="form-control col-12 col-sm-10 col-md-7 offset-sm-1"
            type="text"
            placeholder="Nombre"
            v-model="name"
            required
          />
        </div>
        <div class="form-group col-12">
          <label class="custom-label col-md-3" for="names"
            >Duración del curso</label
          >
          <input
            id="names"
            class="form-control col-12 col-sm-10 col-md-7 offset-sm-1"
            type="text"
            placeholder="Duración"
            v-model="duration"
            required
          />
        </div>

        <div class="col-12 col-sm-5 col-md-4 mb-3">
          <button
            class="col-sm-10 col-md-10 offset-sm-1 offset-md-2 btn btn-primary"
            type="submit"
          >
            Agregar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { getAuthenticationToken } from "@/dataStorage";

const path = "/profesor/crear-curso";
const token = getAuthenticationToken();
export default {
  name: "CreateCourse",
  data: function () {
    return {
      name: "",
      duration: 0,
    };
  },
  methods: {
    crearCurso(event) {
      console.log(token);

      axios
        .post(this.$store.state.backURL + path, {
          courseName: this.name,
          durationHours: this.duration,
        }, {
          params: {
            access_token: getAuthenticationToken()
          }
        })
        .then((response) => {
          if (response.status !== 201) {
            alert("Error en el almacenamiento del curso");
          } else {
            alert("Curso registrado correctamente");
          }
        })
        .catch((error) => {
          if (error.response.status === 400) {
            alert(
              'Parece que ya existe un curso con el nombre "' + this.name + '"'
            );
          } else {
            console.log(error.message);
            alert("Error en la aplicación");
          }
        });
      event.preventDefault();
      return true;
    },
  },
  // beforeCreate( ){
  //     const obtenerRol = '/obtener-rol';
  //     console.log("entre al before");
  //     axios
  //       .get( this.$store.state.backURL + obtenerRol )
  //       .then( response => {
  //         console.log("entre al get");
  //         if( response.status !== 200 ){
  //           alert( "Error en la petición. Intente nuevamente" )
  //         }else{
  //           console.log("entre al else");
  //           this.roles = response.data;
  //           print(this.roles)
  //         }
  //       }).catch( response => {
  //         console.log(response.message);
  //         alert( "No es posible conectar con el backend en este momento" );
  //       });
  //   },
};
</script>

<style>
* {
  padding: 5px;
}
</style>
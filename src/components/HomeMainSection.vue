<template>
  <v-container fluid fill-height class="home-hero">
    <v-row justify="center" align="center white--text">
        <v-col cols="12" lg="4">
          <div class="text-center">
              <v-avatar size="80" ><img src="logo.png" alt="AptWorld Logo"></v-avatar>
              <p>
                    <span class="text-h3">APTWORLD SERVICES</span>
              </p>
            
              <p class="mt-5"><span>Micro credits - Transportation - Investment</span></p>
              <v-btn color="orange" large class="mt-5" to="/login">GET STARTED</v-btn>
          </div>
            
        </v-col>
    </v-row>
  </v-container>
  

  
    
</template>

<script>

  export default {
   
    data () {
      return {

      }
    },

  }
</script>

<style scoped>
.home-hero {
    background: linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), url('../../public/home-5-bg.jpg');
    background-size: cover;
    width: 100%;
    height: 100%;
}
</style>
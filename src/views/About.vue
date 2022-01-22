<template>
  <div class="about">
    <h1>This is an about page</h1>

    <h3>Welcome....................</h3>
    <p>{{ $store.state.firstName }} {{ $store.state.lastName }}</p>
    <p> Login Time :
      <p>{{ $store.state.loginTime }} </p>
    </p>
  </div>
</template>
<script>
export default {
  data (){
    return{

    }
  },

  methods :{
    
  },
  created(){
      this.$store.commit('setLoginTime', Date())
    
  }
}
</script>
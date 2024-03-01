<template>
<NavBar/>
  <router-view/>
  <FooterComp></FooterComp>
</template>

<script>
import NavBar from './components/NavBar.vue'
import FooterComp from './components/FooterComp.vue';
import UserCompVue from './components/UserComp.vue';
import AddProducts from './components/AddProducts.vue';

export default {
  components:{
    NavBar,
    FooterComp
    
  },


}
</script>

<style>
#app {

  font-family: "Alumni Sans Collegiate One", sans-serif;
  font-weight: 400;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}


</style>

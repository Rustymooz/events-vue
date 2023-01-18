<template>
  <div id="nav">
    <Nav_bar/>
  </div>
  <router-view :key="$route.path"/>
</template>

<script>
//import EventsList from './components/EventsList.vue'
import Nav_bar from './components/Nav_bar.vue'
//import HomePage from './views/HomePage.vue'

export default {
  name: 'App',
  components: {
    Nav_bar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div id="app">
    <Header msg="Welcome to Your Vue.js App" />
    <NavLink />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import NavLink from "./components/NavLink.vue";

export default {
  name: "app",
  components: {
    Header,
    NavLink
  }
};
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}
</style>

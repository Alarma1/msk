<template>
  <div id="app">
    <mainComponent/>
  </div>
</template>

<script>
import mainComponent from '@/components/MainComponent.vue';

export default {
  name: 'App',
  components: {
    mainComponent,
  },
};
</script>

<style>
  html {
    background-color: black;
  }
  body{
    margin: 0px;
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

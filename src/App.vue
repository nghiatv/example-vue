<template>
  <div id="app">
    <ul class="list-inline">
      <li>
        <router-link to="/about">Trang about</router-link>
      </li>

      <li class="">
        <router-link to="/">Home</router-link>
      </li>
      <li class="">
        <router-link to="/hello">Hello</router-link>
      </li>

    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>

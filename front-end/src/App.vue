<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/catalogue">Catalogue</router-link> |
      <router-link to="/genre">Suggested for you</router-link> |
      <router-link to="/search">Search</router-link> |
      <router-link to="/cart">Account/Logout</router-link> |
      <router-link to="/about">About Us</router-link>


    </nav>
    <router-view/>
    <footer>
      <a href="https://github.com/aigleason9/Creative3">See the code</a>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'BookApp',
  computed: {
    numItems() {
      return this.$root.$data.cart.length
    }
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
  height: 100vh;
  background-color: #8ff2d8;
}

nav {
  padding: 30px;
  /* z-index: 100 !important; */
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #DE6E4B;
}

footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  /* z-index: 100; */
  padding: 10px;
  font-weight: bold;
  background-color: #8ff2d8;
  color: #2c3e50;
}
</style>

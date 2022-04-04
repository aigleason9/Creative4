<template>
  <div class="home">
    <div class="overlay">

      <div class="welcome">
        <h1>Welcome to the bookstore!</h1>
        <h3>We're always getting new books, so please check back soon if you want a book that isn't currently available. Or contact us to request a particular book!</h3>
      </div>

      <div class="login">

        <div v-if="user">
          <h2>Logged in as: {{user.firstName}} {{user.lastName}}</h2>
        </div>

        <LoginRegister v-else/>

      </div>
            
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import LoginRegister from '../components/LoginRegister.vue'

export default {
  name: 'homeView',

  components: {
    LoginRegister
  },

  async created() {
    
    try {
      let response = await axios.get('/api/users');
      this.$root.$data.user = response.data.user;

    } catch (error) {
      this.$root.$data.user = null;
    }
  },

  computed: {
    user() {
      return this.$root.$data.user;
    }
  },
}
</script>

<style scoped>

  .home {
    background-image: url(https://live.staticflickr.com/7294/9004993292_3d8f026110_b.jpg);
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    height: 83vh;
  }

  .overlay {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .login {
    float: right;
  }

  .welcome {
    position: absolute;
    text-align: center;
    top: 50%;
    transform: translateY(-50%);
    margin-left: 30px;
    margin-right: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1, h3 {
    text-align: center;
    color: white;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
  }

  h1 {
    margin-bottom:20px;
    font-size: 40px;
  }

  h3 {
    font-size: 38x;
  }

  h2 {
    background: white;
    opacity: 0.85;
    display: inline;
    padding: 20px;
    font-size: 20px;
    text-align: center;
    border-radius: 30px;
    float: right;
  }
</style>

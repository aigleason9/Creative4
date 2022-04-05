<template>
<div class="wrapper">
        <div class="login">

            <h1>Please login or register an account to save items to your cart</h1>
            <p></p>
            <form class="pure-form">

                <fieldset>
                  <legend>If you don't have an account, register for one here</legend>
                  <input placeholder="first name" v-model="firstName">
                  <input placeholder="last name" v-model="lastName">
              </fieldset>

              <fieldset>
                <input placeholder="username" v-model="username">
                <input type="password" placeholder="password" v-model="password">
              </fieldset>

              <fieldset>
                <p>Select your preferred genre from those listed:</p>
                <div class="buttons">

                  <div>
                    <input type="radio" id="romance" v-model="genre" value="romance">
                    <label for="romance">Romance</label>
                  </div>
                  <div>
                    <input type="radio" id="fantasy" v-model="genre" value="fantasy">
                    <label for="fantasy">Fantasy</label>
                  </div>
                  <div>
                    <input type="radio" id="historical" v-model="genre" value="historical">
                    <label for="historical">Historical fiction</label>
                  </div>
                </div>
              </fieldset>

              <fieldset>
                  <button type="submit" class="pure-button pure-button-primary" @click.prevent="register">Register</button>
              </fieldset>

        </form>

        <p v-if="error" class="error">{{error}}</p>
        <p></p>

        <form class="pure-form">
            <fieldset>
                <legend>Login</legend>
                <input placeholder="username" v-model="usernameLogin">
                <input type="password" placeholder="password" v-model="passwordLogin">
            </fieldset>

            <fieldset>
                <button type="submit" class="pure-button pure-button-primary" @click.prevent="login">Login</button>
            </fieldset>

        </form>

        <p v-if="errorLogin" class="error">{{errorLogin}}</p>

    </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'LoginRegister',

  data() {
    return {
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      usernameLogin: '',
      passwordLogin: '',
      genre: '',
      error: '',
      errorLogin: '',
    }
  },

  methods: {

    async register() {

      this.error = '';
      this.errorLogin = '';

      if (!this.firstName || !this.lastName || !this.username || !this.password || !this.genre)
        return;

      try {
        let response = await axios.post('/api/users', {
          firstName: this.firstName,
          lastName: this.lastName,
          username: this.username,
          password: this.password,
          genre: this.genre
        });

        this.$root.$data.user = response.data.user;

      } catch (error) {
        this.error = error.response.data.message;
        this.$root.$data.user = null;
      }
    },
  
    async login() {
      this.error = '';
      this.errorLogin = '';

      if (!this.usernameLogin || !this.passwordLogin)
        return;

      try {
        let response = await axios.post('/api/users/login', {
          username: this.usernameLogin,
          password: this.passwordLogin,
        });
        this.$root.$data.user = response.data.user;

      } catch (error) {
        this.errorLogin = "Error: " + error.response.data.message;
        this.$root.$data.user = null;
      }
    },

  }
}
</script>

<style scoped>
h1 {
  font-size: 28px;
  font-variant: capitalize;
}

.wrapper {
  padding: 30px;
  display: flex;
  justify-content: center;
}

.login {
  background: white;
  opacity: 0.95;
  display: inline;
  padding: 20px;
  font-size: 20px;
  text-align: center;
  border-radius: 30px;
}


form {
  font-size: 14px;
}

form legend {
  font-size: 20px;
}

input {
  margin-right: 10px;
}

label {
  margin-right: 25px;
}

.buttons {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.error {
  margin-top: 20px;
  display: inline;
  padding: 5px 20px;
  border-radius: 30px;
  font-size: 10px;
  background-color: #DE6E4B;
  color: #fff;
}

.pure-button {
    background-color: #8ff2d8;
    color:black;
    margin: 5px;
    padding: 5px;
    border-radius: 5px;
  }
</style>
<template>
  <div class="body_elements_login">
    <div class="arrow-div">
      <router-link class="arrow" to="/"><i class="fa-solid fa-arrow-left"></i></router-link>
      <router-view/>
    </div>
    <div class="background-info">
      <h1>{{ logIn }}</h1>
      <div class="form-layout">
        <form @submit.prevent="login">
          <label for="e-mail">
            <input v-model="email" id="e-mail" type="email" placeholder="E-mail">
          </label>
          <label for="password">
            <input v-model="password" id="password" type="password" placeholder="Wachtwoord">
          </label>
          <button class='login' type="submit">{{ logIn }}</button>
        </form>
      </div>
      <ul class="list">
        <li class="login list-item"><router-link class="registreer list-item-link" to="/register">{{ registreer }}</router-link></li>
        <li class="list-item"><a class="wachtwoord list-item-link" href="#">{{ forgotPass }}</a></li>
      </ul>
    </div>
  </div>
</template>

<script>

import gegevens from '@/json/gegevens.json';

export default {
  name: "LoginView",

  data() {
    return {
      data: gegevens,
      email: "",
      password: "",
      loggedInUser: null
    };
  },

  computed: {
    logIn() {
      return "Log in";
    },
    registreer() {
      return "Registreer";
    },
    forgotPass() {
      return "Wachtwoord vergeten?";
    }
  },

  methods: {
    login() {
      const user = this.data.user.find(u => u.email === this.email && u.password === this.password);

      if (user) {
        this.loggedInUser = user;
        this.$router.push("/checkout");


      } else {
        alert("Ongeldige inloggegevens. Probeer opnieuw.");
      }
    }
  }
};
</script>

<style scoped>

</style>
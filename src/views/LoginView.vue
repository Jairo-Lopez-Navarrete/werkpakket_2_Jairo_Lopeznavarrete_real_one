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
          <router-link to="/checkout" class="shopping-link">
            <button class='login' @click="login">{{ logIn }}</button>
          </router-link>
          <button class="login" @click="logout">{{logOut}}</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { useUserStore } from "@/stores/user";
import gegevens from "@/json/gegevens.json";

export default {
  name: "LoginView",
  data() {
    return {
      email: "",
      data: gegevens,
      password: "",
    };
  },

  computed: {
    logIn(){
      return "Login"
    },
    logOut(){
      return "Logout"
    }
  },

  methods: {
    login() {
      const user = gegevens.user.find(u => u.email === this.email && u.password === this.password);

      if (user) {
        useUserStore().login({
          email: user.email,
          password: user.password,
        });

        this.$router.push({ path: '/shopping' });
      } else {
        alert("Ongeldige inloggegevens. Probeer opnieuw.");
      }
    },
    logout() {
      useUserStore().logout();
      this.$router.push("/");
    },
  }
};
</script>

<style scoped>

</style>
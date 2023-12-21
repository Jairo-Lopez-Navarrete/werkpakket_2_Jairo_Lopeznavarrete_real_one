<template>
  <div class="body_elements_login">
    <div class="arrow-div">
      <router-link class="arrow" to="/"><i class="fa-solid fa-arrow-left"></i></router-link>
      <router-view />
    </div>
    <div class="background-info">
      <h1>{{ logIn }}</h1>
      <div class="form-layout">
        <form @submit.prevent="login" v-if="!isLoggedIn">
          <label for="e-mail">
            <input v-model="email" id="e-mail" type="email" placeholder="E-mail" required>
          </label>
          <label for="password">
            <input v-model="password" id="password" type="password" placeholder="Wachtwoord" required>
          </label>
          <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
          <button class="login" type="submit">{{ logIn }}</button>
        </form>
        <router-link v-else class="logout" @click="logout" to="/">{{ logOut }}</router-link>
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
      password: "",
      errorMessage: "",
    };
  },

  computed: {
    logIn() {
      return "Login";
    },
    logOut() {
      return "Logout";
    },
    isLoggedIn() {
      return useUserStore().isLoggedIn;
    },
  },

  methods: {
    async login() {
      const userStore = useUserStore();

      console.log("Attempting login...");

      if (userStore.isLoggedIn) {
        console.log("User is already logged in. Redirecting to Shopping page.");
        this.$router.push({ name: "Shopping" });
        return;
      }

      const user = gegevens.user.find(
        (u) => u.email === this.email && u.password === this.password
      );

      if (user) {
        console.log("User found. Logging in...");

        const loginSuccess = userStore.login({
          email: this.email,
          password: this.password,
        });

        if (loginSuccess) {
          this.errorMessage = "";
          this.$router.push({ path: "/shopping" });
        } else {
          this.errorMessage = "Ongeldige inlog gegevens, probeer opnieuw.";
        }
      }
      else {
        this.errorMessage = "Ongeldige inlog gegevens, probeer opnieuw.";
      }
    },
    logout() {
      useUserStore().logout();
      this.$router.push({ name: "Login" });
    }
  },
};
</script>

<style scoped>
.error-message {
  color: red;
  margin-top: 5px;
}
</style>
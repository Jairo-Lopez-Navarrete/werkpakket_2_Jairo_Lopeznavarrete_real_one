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
export default {
  name: "LoginView",

  data() {
    return {
      email: "",
      password: "",
      users: [
        { email: "user1@example.com", password: "password1", id: 1 },
        { email: "user2@example.com", password: "password2", id: 2 }
      ],
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
      // Simulate authentication logic
      const user = this.users.find(u => u.email === this.email && u.password === this.password);

      if (user) {
        this.loggedInUser = user;
        // Navigeer naar het winkelmandje of een andere pagina na succesvol inloggen
        this.$router.push("/shopping-cart");

        // Hier kun je extra logica toevoegen, bijvoorbeeld het instellen van een gebruikerssessie.
      } else {
        alert("Ongeldige inloggegevens. Probeer opnieuw.");
      }
    }
  }
};
</script>

<style scoped>

</style>
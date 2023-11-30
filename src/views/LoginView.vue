<template>
  <div class="body_elements_login">
  <div class="arrow-div">
    <router-link class="arrow" to="/"><i class="fa-solid fa-arrow-left"></i></router-link>
    <router-view/>
  </div>
  <div class="background-info">
    <h1>Log in</h1>
    <div class="form-layout">
      <form>
        <label for="e-mail">
          <input id="e-mail" type="email" placeholder="E-mail">
        </label>
        <label for="password">
          <input id="password" type="password" placeholder="Wachtwoord">
        </label>
      </form>
    </div>
    <ul class="list">
      <li class="login list-item"><a class="registreer list-item-link" href="#">Registreer</a></li>
      <li class="list-item"><a class="login list-item-link" href="#">Log in</a></li>
      <li class="list-item"><a class="wachtwoord list-item-link" href="#">Wachtwoord vergeten?</a></li>
    </ul>
  </div>
  </div>
</template>

<script>
export default {
  name: "LoginView"
}
</script>

<style scoped>

</style>
<template>
  <nav class="navbar">
    <router-link to="/">{{merkNaam}}</router-link>
    <ul class="list">
      <!--<li v-for="navItem in navItems"
          class="nav-list-item">
        <router-link :to="navItem.path" class="nav-list-link">{{ navItem.name }}</router-link>
      </li>-->
      <li class="list-item"></li>
      <router-link to="/overzicht" class="list-link"><i class="user logo fa-solid fa-guitar"></i>{{productNaam}}</router-link>
      <li class="list-item">
        <router-link to="/login" class="list-link"><i class="user logo fa-solid fa-user"></i></router-link>
      </li>
      <li class="list-item">
        <router-link to="/shopping" class="list-link">
          <i class="user logo fa-brands fa-shopify"></i>
          <span v-if="cartItemCount > 0" class="cart-count">{{ cartItemCount }}</span>
        </router-link>
      </li>
      <router-view/>
    </ul>
  </nav>

</template>

<script>
import { useCartStore } from "@/stores/counter";

export default {
  name: "NavComponent",

  props: {
    cartItemCount: Number,
  },
  computed: {
    cartItemCount(){
      return useCartStore().cartItemCount;
    },
    merkNaam(){
      return "Strings Of Fire"
    },
    productNaam(){
      return "Producten"
    }
  }
}
</script>

<style scoped>
</style>
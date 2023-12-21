<template>
  <NavComponent :cartItemCount="cartItemCount" />
  <div class="background-color">

    <main class="shopping-main">
      <h2>{{ winkelmand }}</h2>

      <div v-if="cart.length === 0">
        <p class="leegte">{{ leeg }}</p>
      </div>

      <div v-for="item in cart" :key="item.id" class="cart-item">
        <div class="cart-item-details">
          <img :src="'../src/assets/' + item.afbeelding" :alt="item.titel" class="cart-item-image">
          <div class="cart-item-info">
            <h3>{{ item.titel }}</h3>
            <p>{{ item.omschrijving }}</p>
          </div>
        </div>
        <div class="cart-item-actions">
          <p>Aantal: {{ item.quantity }}</p>
          <input v-model="item.quantity" type="number" min="1" @input="updateQuantity(item)">
          <button @click="removeFromCart(item)">{{ verwijder }}</button>
        </div>
        <div class="cart-item-price">
          <p>{{ subTotaal }}{{ item.price * item.quantity }}</p>
          <p>{{ btw }}{{ item.btw }}</p>
        </div>
      </div>

      <div v-if="cart.length > 0" class="cart-summary">
        <p>{{ totaalPrijs }}{{ calculateTotalPrice() }}</p>
        <p>{{ totaal }} {{ btw }} {{ calculateTotalVAT() }}</p>
      </div>

      <router-link v-if="cart.length > 0" to="/checkout" class="checkout-button">{{ checkout }}</router-link>
    </main>
  </div>
</template>

<script>
import NavComponent from "@/components/NavComponent.vue";
import { useCartStore } from "@/stores/counter";
/*import { useUserStore } from "@/stores/user";*/

export default {
  name: "ShoppingView",
  components: {
    NavComponent,
  },

  computed: {
    cart() {
      return useCartStore().items;
    },
    cartItemCount() {
      return useCartStore().cartItemCount;
    },
    winkelmand() {
      return "Winkelmandje";
    },
    leeg() {
      return "Je winkelmandje is leeg.. :(";
    },
    verwijder() {
      return "Verwijder";
    },
    subTotaal() {
      return "Subtotaal: €";
    },
    totaalPrijs() {
      return "Totaalprijs: €";
    },
    btw() {
      return "BTW: ";
    },
    totaal() {
      return "totaal";
    },
    checkout() {
      return "Ga naar Checkout";
    },
  },

  /*beforeRouteEnter(to, from, next) {
    const userStore = useUserStore();

    if (to.meta.requiresAuth && !userStore.isLoggedIn) {
      next({ name: 'Login' });
    } else {
      next();
    }
  },*/

  methods: {
    updateQuantity(item) {
      useCartStore().addToCart(item);
    },
    removeFromCart(item) {
      useCartStore().removeFromCart(item);
    },
    calculateTotalPrice() {
      return this.cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    },
    calculateTotalVAT() {
      return this.cart.reduce((totalVAT, item) => totalVAT + (item.price * item.quantity * parseFloat(item.btw) / 100), 0).toFixed(2);
    },
  },
};
</script>

<style scoped>

</style>
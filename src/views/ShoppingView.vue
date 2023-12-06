<template>
  <div class="cart-container">
    <h2 class="cart-title" v-if="cart.length > 0">{{ mand }}</h2>
    <div v-if="cart.length === 0" class="empty-cart">
      <p class="empty-message">{{ legeMand }}</p>
    </div>
    <div v-else>
      <div v-for="(item, index) in cart" :key="index" class="cart-item">
        <img :src="item.image" :alt="item.title" class="cart-item-image">
        <div class="cart-item-details">
          <h3 class="cart-item-title">{{ item.title }}</h3>
          <p class="cart-item-price">{{ formatPrice(item.price) }}</p>
          <button @click="removeFromCart(index)" class="remove-button">{{ verwijderen }}</button>
        </div>
      </div>
      <div class="cart-total">
        <p class="total-text">{{ totaal }} {{ formatPrice(cartTotal) }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cart: [
        // Hier komen de items in de winkelmand
      ]
    };
  },
  computed: {
    cartTotal() {
      return this.cart.reduce((total, item) => total + item.price, 0);
    },
    mand(){
      return "Winkelmand"
    },

    legeMand(){
      return "Uw winkelmand is leeg.. :("
    },

    verwijderen(){
      return "Verwijderen"
    },
    totaal(){
      return "Totaal :"
    }
  },
  methods: {
    formatPrice(price) {
      // Logica voor het formatteren van de prijs, bijvoorbeeld toevoegen van valutasymbool
      return `€${price.toFixed(2)}`;
    },
    removeFromCart(index) {
      this.cart.splice(index, 1);
    }
  }
};
</script>

<style scoped>

</style>
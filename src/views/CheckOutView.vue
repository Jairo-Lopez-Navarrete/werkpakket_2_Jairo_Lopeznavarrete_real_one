<template>
  <NavComponent :cartItemCount="cartItemCount" />
  <div>

    <main class="checkout-main">
      <h2>Checkout</h2>

      <form>
        <label for="name">Naam</label>
        <input type="text" id="name" v-model="name" />

        <label for="address">Adres</label>
        <input type="text" id="address" v-model="address" />

        <div class="billing-details-checkbox">
          <label>
            <input type="checkbox" v-model="useBillingDetails" />
            Facturatiegegevens verschillend van adresgegevens
          </label>
        </div>

        <div v-if="useBillingDetails">
          <label for="billingName">Naam (facturatie)</label>
          <input type="text" id="billingName" v-model="billingName" />

          <label for="billingAddress">Adres (facturatie)</label>
          <input type="text" id="billingAddress" v-model="billingAddress" />
        </div>

        <button @click.prevent="handleCheckout">Bevestigen</button>
      </form>

      <div class="order-summary" v-if="cart.length > 0">
        <h3>Besteloverzicht</h3>

        <div v-for="item in cart" :key="item.id" class="order-item">
          <div class="item-details">
            <p>{{ item.titel }}</p>
            <p>Aantal: {{ item.quantity }}</p>
          </div>
          <div class="item-quantity">
            <p>{{ item.quantity }}</p>
          </div>
          <div class="item-price">
            <p>€{{ (item.price * item.quantity).toFixed(2) }}</p>
          </div>
        </div>

        <div class="order-total">
          <p>Totaalprijs: €{{ calculateTotalPrice() }}</p>
          <p>Totaal BTW: €{{ calculateTotalVAT() }}</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import NavComponent from "@/components/NavComponent.vue";
import { useCartStore } from "@/stores/counter";

export default {
  name: "CheckoutView",
  components: {
    NavComponent,
  },
  data() {
    return {
      name: "",
      address: "",
      useBillingDetails: false,
      billingName: "",
      billingAddress: "",
    };
  },
  computed: {
    cart() {
      return useCartStore().items;
    },
    cartItemCount() {
      return useCartStore().cartItemCount;
    },
  },
  methods: {
    calculateTotalPrice() {
      return this.cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    },
    calculateTotalVAT() {
      return this.cart.reduce((totalVAT, item) => totalVAT + (item.price * item.quantity * parseFloat(item.btw) / 100), 0).toFixed(2);
    },
    handleCheckout() {
      // Simulatie van een geslaagde betaling
      alert("Betaling geslaagd! U wordt doorgestuurd naar de bevestigingspagina.");
      // Je kunt hier logica toevoegen om de betaling te verwerken en de gebruiker naar de bevestigingspagina te leiden.
    },
  },
};
</script>

<style scoped>

</style>
<template>
  <NavComponent :cartItemCount='cartItemCount' />
  <div class='bevestiging'>

    <main class='confirmation-main'>
      <h2>{{ titel }}</h2>

      <div v-if='cart.length > 0'>
        <h3>{{ overzicht }}</h3>

        <div v-for='item in cart' :key='item.id' class='confirmation-item'>
          <div class='item-details'>
            <p>{{ item.titel }}</p>
            <p>{{ aantal }} {{ item.quantity }}</p>
          </div>
          <div class='item-price'>
            <p>{{ euro }}{{ (item.price * item.quantity).toFixed(2) }}</p>
          </div>
        </div>

        <div class='confirmation-total'>
          <p>{{ totaal }}{{ calculateTotalPrice() }}</p>
          <p>{{ btw }}{{ calculateTotalVAT() }}</p>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
import NavComponent from '@/components/NavComponent.vue'
import { useCartStore } from '@/stores/counter'

export default {
  name: 'BevestigingsPaginaView',

  components: {
    NavComponent
  },
  computed: {

    aantal() {
      return 'Aantal: '
    },
    euro() {
      return '€ '
    },
    titel() {
      return 'Bedankt voor uw bestelling!'
    },
    overzicht() {
      return 'Bestellingsoverzicht'
    },

    cart() {
      return useCartStore().items
    },
    btw() {
      return 'Prijs met BTW: €'
    },
    totaal() {
      return 'Totaalprijs: €'
    },
    cartItemCount() {
      return useCartStore().cartItemCount
    }
  },

  methods: {
    calculateTotalPrice() {
      return this.cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)
    },
    calculateTotalVAT() {
      return this.cart.reduce((totalVAT, item) => totalVAT + (item.price * item.quantity * parseFloat(item.btw) / 100), 0).toFixed(2)
    }
  }
}
</script>

<style scoped>

</style>
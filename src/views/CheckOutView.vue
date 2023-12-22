<template>
  <div>
    <NavComponent :cartItemCount='cartItemCount' />

    <main class='checkout-main'>
      <h2>{{ checkout }}</h2>

      <form>
        <label for='name'>{{ naam }}</label>
        <input type='text' id='name' v-model='name' />

        <label for='address'>{{ adres }}</label>
        <input type='text' id='address' v-model='address' />

        <div class='billing-details-checkbox'>
          <label>
            <input type='checkbox' v-model='useBillingDetails' />
          </label>
        </div>

        <div v-if='useBillingDetails'>
          <label for='billingName'>{{ naamFacturatie }}</label>
          <input type='text' id='billingName' v-model='billingName' />

          <label for='billingAddress'>{{ adresFacturatie }}</label>
          <input type='text' id='billingAddress' v-model='billingAddress' />
        </div>

        <router-link to='/bevestiging'>
          <button>{{ bevestigen }}</button>
        </router-link>
      </form>

      <div class='order-summary' v-if='cart.length > 0'>
        <h3>{{ bestelOverzicht }}</h3>

        <div v-for='item in cart' :key='item.id' class='order-item'>
          <div class='item-details'>
            <p>{{ item.titel }}</p>
            <p>{{ aantal }} {{ item.quantity }}</p>
          </div>
          <div class='item-quantity'>
            <p>{{ item.quantity }}</p>
          </div>
          <div class='item-price'>
            <p>{{ euro }}{{ (item.price * item.quantity).toFixed(2) }}</p>
          </div>
        </div>

        <div class='order-total'>
          <p>{{ totaalPrijs }} {{ euro }} {{ calculateTotalPrice() }}</p>
          <p>{{ totaalBTW }} {{ euro }} {{ calculateTotalVAT() }}</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import NavComponent from '@/components/NavComponent.vue'
import { useCartStore } from '@/stores/counter'
import { useUserStore } from '@/stores/user'

export default {
  name: 'CheckoutView',
  components: {
    NavComponent
  },

  data() {
    return {
      name: '',
      address: '',
      useBillingDetails: false,
      billingName: '',
      billingAddress: ''
    }
  },
  computed: {
    checkout() {
      return 'Checkout'
    },
    euro() {
      return '€'
    },
    totaalPrijs() {
      return 'Totaal prijs: '
    },
    totaalBTW() {
      return 'Totaal BTW: '
    },
    aantal() {
      return 'Aantal: '
    },
    naam() {
      return 'Naam'
    },
    adres() {
      return 'Adres'
    },

    naamFacturatie() {
      return 'Naam facturatie'
    },

    adresFacturatie() {
      return 'Adres facturatie'
    },

    bevestigen() {
      return 'Bevestigen'
    },

    bestelOverzicht() {
      return 'BestelOverzicht'
    },


    cart() {
      return useCartStore().items
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
  },
  created() {
    const currentUser = useUserStore().currentUser

    if (currentUser) {
      this.name = currentUser.firstname + ' ' + currentUser.name
      this.address = currentUser.address
      this.useBillingDetails = false


    }
  }
}
</script>

<style scoped>

</style>
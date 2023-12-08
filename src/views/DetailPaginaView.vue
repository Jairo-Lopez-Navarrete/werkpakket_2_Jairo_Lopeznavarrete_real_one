<template>

  <NavComponent/>


  <header>
    <div class="picture-section">
      <div class="items">
        <img class="image" src="@/assets/img_3.png" alt="gitaar1">
        <img class="image" src="@/assets/img_4.png" alt="gitaar2">
        <img class="image" src="@/assets/img_5.png" alt="gitaar3">
      </div>
      <div class="picture-item" v-if="selectedProduct">
        <h1 class="card-overlay-heading">{{ selectedProduct.titel }}</h1> <!--Ibanez 3500X (small)-->
        <img :src="'@/assets/' + selectedProduct.afbeelding" :alt="selectedProduct.titel" class="card-image">
      </div>
      <div class="text-number">
        <p><b>{{ selectedProduct.titel }}</b>{{selectedProduct.omschrijving}}</p>
        <p class="price">{{ prijsText }}{{selectedProduct.price}}</p> <!--499.99 euro-->
        <form @submit.prevent="addToCart">
          <input v-model="quantity" id="hoeveelheid" type="number" min="1" required>
          <label for="hoeveelheid">{{ hoeveelHeid }}</label>
          <button type="submit" class="buybutton">{{ buyProduct }}</button>
        </form>
        <!--<form>
          <input id="hoeveelheid" type="number">
          <label for="hoeveelheid">{{ hoeveelHeid }}</label>
        </form>
        <button class="buybutton">{{buyProduct}}</button>
        -->

      </div>
    </div>
  </header>

  <FooterComponent/>
</template>

<script>
import NavComponent from "@/components/NavComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import producten from '@/json/producten.json';
import { useCartStore } from "@/stores/counter";

export default {
  name: "DetailPaginaView",

  props: {
    selectedId: Number,
    filteredData: Array// Prop to receive the selected ID
  },

  data(){
    return{
      data: producten,
      productId: null,
      quantity: 1
    }
  },

  created() {
    this.productId = parseInt(this.$route.params.id);
  },


  methods: {
    addToCart() {
      const selectedProduct = this.selectedProduct;

      useCartStore().addToCart({
        id: selectedProduct.id,
        title: selectedProduct.titel,
        price: selectedProduct.price,
        quantity: this.quantity
      });

      this.quantity = 1;
    },
  },

  computed: {

    selectedProduct() {
      return this.data.find(item => item.id === this.productId) || {};
    },

    prijsText() {
      return 'Prijs: €'
    },

    hoeveelHeid(){
      return "Hoeveelheid"
    },

    buyProduct(){
      return "Koop product!"
    }

  },

  components: {
    NavComponent,
    FooterComponent
  }
}
</script>

<style scoped>

</style>
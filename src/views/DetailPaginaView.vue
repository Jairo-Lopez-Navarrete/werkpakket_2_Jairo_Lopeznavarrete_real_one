<template>
  <div>
    <NavComponent />
    <header>
      <div class="picture-section">
        <div class="picture-item" v-if="selectedProduct">
          <h1 class="card-overlay-heading">{{ selectedProduct.titel }}</h1>
          <img :src="'src/assets/' + selectedProduct.afbeelding" :alt="selectedProduct.titel" class='card-image'/>
        </div>
        <div class="text-number">
          <p><b>{{ selectedProduct.titel }}</b>{{ selectedProduct.omschrijving }}</p>
          <p class="price">{{ prijsText }}{{ selectedProduct.price }}</p>
          <form @submit.prevent="addToCart">
            <input v-model="quantity" id="hoeveelheid" type="number" min="1" required>
            <label for="hoeveelheid">{{ hoeveelHeid }}</label>
            <button
              :disabled="selectedProduct.stock === 0"
              type="submit"
              class="buybutton"
            >
              {{ buyProduct }}
            </button>
          </form>
        </div>
      </div>
    </header>
    <FooterComponent />
  </div>
</template>

<script>
import NavComponent from "@/components/NavComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import producten from '@/json/producten.json'
import { useCartStore } from "@/stores/counter";

export default {
  name: "DetailPaginaView",

  props: {
    selectedId: Number,
    filteredData: Array,
  },

  data() {
    return {
      data: producten,
      productId: null,
      quantity: 1,
    };
  },

  created() {
    this.productId = parseInt(this.$route.params.id);
  },

  methods: {
    getImagePath(imageName) {
      return import(`@/assets/${imageName}`).then((module) => module.default);
    },
    addToCart() {
      const selectedProduct = this.selectedProduct;

      useCartStore().addToCart({
        id: selectedProduct.id,
        afbeelding: selectedProduct.afbeelding,
        omschrijving: selectedProduct.omschrijving,
        title: selectedProduct.titel,
        price: selectedProduct.price,
        quantity: this.quantity,
      });

      this.quantity = 1;
    },
  },

  computed: {
    selectedProduct() {
      return this.data.find((item) => item.id === this.productId) || {};
    },

    prijsText() {
      return "Prijs: €";
    },

    hoeveelHeid() {
      return "Hoeveelheid";
    },

    buyProduct() {
      return this.selectedProduct.stock === 0 ? "Out of Stock" : "Koop product!";
    },
  },

  components: {
    NavComponent,
    FooterComponent,
  },
};
</script>

<style scoped>

</style>
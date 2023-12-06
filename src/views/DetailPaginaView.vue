<template>

<NavComponent/>


  <header>
    <div class="picture-section">
      <div class="items">
        <img class="image" src="@/assets/img_3.png" alt="gitaar1">
        <img class="image" src="@/assets/img_4.png" alt="gitaar2">
        <img class="image" src="@/assets/img_5.png" alt="gitaar3">
      </div>
      <div class="picture-item">
        <h1 class="card-overlay-heading">{{product.titel}}</h1> <!--Ibanez 3500X (small)-->
        <img :src="'@/assets/' + producten.afbeelding" :alt="product.titel" class="card-image">
      </div>
      <div class="text-number">
        <p><b>{{producten.titel}}</b>{{producten.omschrijving}}</p>
        <p class="price">{{producten.price}}</p> <!--499.99 euro-->
        <form>
          <input id="hoeveelheid" type="number">
          <label for="hoeveelheid">{{ hoeveelHeid }}</label>
        </form>
        <button class="buybutton">{{buyProduct}}</button>
      </div>
    </div>
  </header>


</template>

<script>
import NavComponent from "@/components/NavComponent.vue";
//import producten from '@/json/producten.json';

export default {
  name: "DetailPaginaView",

  data() {
    return {
      product: null,
    };
  },

  created() {
    const productId = this.$route.params.id;
    this.product = this.data.find(item => item.id === parseInt(productId));
  },

  computed: {
    hoeveelHeid(){
      return "Hoeveelheid"
    },
    buyProduct(){
      return "Koop product!"
    }
  },

  components: {
    NavComponent
  }
}
</script>

<style scoped>

</style>
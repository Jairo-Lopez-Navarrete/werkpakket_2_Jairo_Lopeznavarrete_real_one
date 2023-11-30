<template>

  <article>
    <section class="gallery">
      <div class="card-wrapper">
        <div class="card" v-for="product in sortedStockedProducts" :key="product.id">
          <div class="card-overlay">
            <h1 class="card-overlay-heading">{{ product.titel }}</h1>
            <p class="card-overlay-paragraph">{{ product.price }}</p>
            <button class="card-overlay-button">
              <router-link to="/detail">Koop nu</router-link>
            </button>
            <router-view></router-view>
          </div>
          <img :src="require('@/assets/' + product.afbeelding)" :alt="product.titel" class="card-image">
        </div>
      </div>
    </section>
  </article>
</template>

<script>


//import producten from '@/json/producten.json';

export default {
  name: "PopularProductsComponent",


  props: {
    products: Array,
  },
  computed: {
    sortedStockedProducts() {
      return this.products.slice(0, 4);
    },
  },
};
</script>

<style scoped>

</style>
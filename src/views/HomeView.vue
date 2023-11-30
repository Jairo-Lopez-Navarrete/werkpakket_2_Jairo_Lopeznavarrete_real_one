<template>
  <div class="body_elements">
    <NavComponent/>

    <HeaderComponent/>

    <section class="reclame">
      <div class="layout">
        <div class="background-div">
          <h2>Bestseller!</h2>
          <h2>Ibanez 3500X</h2>
        </div>
      </div>

    </section>


    <PopularProductsComponent :products="sortedStockedProducts"/>

    <FooterComponent/>

  </div>
</template>

<script>

import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import NavComponent from '@/components/NavComponent.vue';
import PopularProductsComponent from "@/components/PopularProductsComponent.vue";
import producten from '@/json/producten.json';

export default{
  name: "HomeView",

   data(){
     return {
     data: producten
    };
   },

  computed: {
    sortedStockedProducts() {
      return this.data.producten.slice().sort((a, b) => b.stock - a.stock);
    },
  },

  components: {
    NavComponent,
    HeaderComponent,
    PopularProductsComponent,
    FooterComponent,
  }
}
</script>

<style scoped>

</style>


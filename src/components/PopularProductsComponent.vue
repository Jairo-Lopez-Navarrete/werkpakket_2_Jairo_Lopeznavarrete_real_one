<template>

  <article>
    <section class="gallery">
      <div class="card-wrapper">
        <div class="card">
          <div class="card-overlay">
            <h1 class="card-overlay-heading">ESP era5S11</h1>
            <p class="card-overlay-paragraph">Prijs: €15 000</p>
            <button class="card-overlay-button">Meer info</button>
          </div>
          <img src="@/assets/guitar-T.png" alt="guitar6" class="card-image">
        </div>
      </div>
    </section>
  </article>
  <!--<article>
    <section class="gallery">
      <div class="card-wrapper">
        <div class="card" v-for="product in sortedStockedProducts" :key="product.id">
          <div class="card-overlay">
            <h1 class="card-overlay-heading">{{ product.titel }}</h1>
            <p class="card-overlay-paragraph">{{ product.price }}</p>
            <button class="card-overlay-button">
              <router-link to="/detail">{{buttonTekst}}</router-link>
            </button>
            <router-view></router-view>
          </div>
          <img src="@/assets/guitar.png" alt='gitaar' class="card-image"> :alt="product.titel"-->
        <!--</div>
      </div>
    </section>
  </article>-->
</template>

<script>
//import producten from '@/json/producten.json';

export default {
  name: "PopularProductsComponent",

}


//data(){
//return {
//data: producten
//}
//},

/*props: [
    'name',
    'price'
],


 */
//description: {
  //buttonTekst: "Koop nu",
//},

/*props: {
  products: Array,
},*/
  //computed: {
    //sortedStockedProducts() {
      //return this.data.slice(0, 4);
    //},
  //},
//};
</script>

<style scoped>

</style>
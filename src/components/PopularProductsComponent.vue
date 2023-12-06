<template>

    <section class="gallery">
      <div class="card-wrapper">
        <div class="card"  v-for="item in filteredData" :key="item.id">
          <div class="card-overlay"> <!--Dit kan de reden zijn waarom mijn code niet meer werkte v-for="item in data" :key="item.id"-->
            <h1 class="card-overlay-heading">{{item.titel}}</h1>
            <p class="card-overlay-paragraph">{{prijsText}}{{item.price}}</p>
            <router-link to="'/detail' + item.id" class='link-decoration'>
            <button class="card-overlay-button">{{buttonText}}</button>
            </router-link><!--v-bind toepassen op de popularproduct zelf om zo naar de detailpagina te gaan-->
          </div>
          <img :src="'src/assets/' + item.afbeelding" :alt="item.titel" class="card-image">
          <!--<img :src="'@/assets/${item.afbeelding}'" :alt="item.titel" class="card-image">--> <!-- dit is foute code maar werkt om pagina te zien src="@/assets/guitar.png" alt="gitaren"--> <!--werkt niet :src="'@/assets/${item.afbeelding}'" :alt="item.id"-->
        </div>
      </div>
    </section>
</template>

<script>
import producten from '@/json/producten.json';

export default {
  name: "PopularProductsComponent",

  props: {
    //[afbeelding],
    productsData: Array,
    selectedId: Number // Prop to receive the selected ID
  },

  data(){
    return{
      data: producten
    }
  },

  computed: {
    filteredData(){
      return this.productsData.slice(0, 4).sort((a, b) => b.stock - a.stock); //test
    },
    buttonText(){
      return "Meer info";
    },
    prijsText(){
      return "Prijs: €";
    }
  }
}

</script>

<style scoped>

</style>
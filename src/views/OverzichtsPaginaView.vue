<template>

  <NavComponent/>

  <header class="overzichts_titel">
    <h1>{{titel}}</h1>
  </header>

  <section>
    <div class="filter">
      <form class="filter-form">
        <label for="filter-item">{{ filterStModel }}</label>
        <input id="filter-item" type="checkbox">
      </form>
      <form>
        <label for="filter-item-2">{{ filterTModel }}</label>
        <input id="filter-item-2" type="checkbox">
      </form>
    </div>
  </section>

  <div class="pagination">
    <a href="#" class="page-link active">{{paginatie[0]}}</a>
    <a href="#" class="page-link">{{paginatie[1]}}</a>
    <a href="#" class="page-link">{{paginatie[2]}}</a>
    <a href="#" class="page-link">{{paginatie[3]}}</a>
    <a href="#" class="page-link">{{paginatie[4]}}</a>
  </div>

  <article>
    <ProductCardComponent :selectedId='1'/>
  </article>

 <FooterComponent/>

</template>

<script>
import FooterComponent from "@/components/FooterComponent.vue";
import NavComponent from "@/components/NavComponent.vue";
import ProductCardComponent from "@/components/ProductCardComponent.vue";
import producten from "@/json/producten.json";

export default {
  name: "OverzichtsPaginaView",

  data(){
    return {
      data: producten,
      paginatie: [1,2,3,4,5,]
    }
  },

  computed: {
    titel(){
      return "Elektrische gitaren"
    },
    filterStModel(){
      return "ST-Model"
    },
    filterTModel(){
      return "T-Model"
    }
  },

  components: {
    ProductCardComponent,
    NavComponent,
    FooterComponent
  }
}
</script>

<style scoped>

</style>
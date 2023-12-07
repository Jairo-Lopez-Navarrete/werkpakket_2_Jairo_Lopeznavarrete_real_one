<template>
  <section class='gallery'>
    <div class='card-wrapper'>
      <div class='card' v-for='(item, index) in filteredData.slice(0,8)' :key='index'>
        <div class='card-overlay'>
          <!--Dit kan de reden zijn waarom mijn code niet meer werkte v-for="item in data" :key="item.id"-->
          <h1 class='card-overlay-heading'>{{ item.titel }}</h1>
          <p class='card-overlay-paragraph'>{{ prijsText }}{{ item.price }}</p>
          <router-link :to="{ name: 'Detail', params: { id: item.id }}">
            <button class='card-overlay-button' @click="$emit('productClicked', item.id)">{{ buttonText }}</button>
          </router-link>
        </div>
        <img :src="'src/assets/' + item.afbeelding" :alt="item.titel" class='card-image'> <!--werkt niet :src="'@/assets/${item.afbeelding}'" :alt="item.id"-->
      </div>
    </div>
  </section>
</template>

<script>
import producten from '@/json/producten.json'

export default {

  name: 'ProductCardComponent',

  props: {
    selectedId: Number,
    filteredData: Array// Prop to receive the selected ID
  },

  data() {
    return {
      data: producten
    }
  },

  computed: {
    /*filteredData() {
      return this.data.filter(item => item.id === this.selectedId) //test
    },*/
    buttonText() {
      return 'Meer info'
    },
    prijsText() {
      return 'Prijs: €'
    }
  }
}

</script>

<style scoped>

</style>

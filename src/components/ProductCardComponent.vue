<template>
  <section class='gallery'>
    <div class='card-wrapper'>
      <div class='card' v-for='(item, index) in filteredData.slice(0,8)' :key='index'>
        <div class='card-overlay'>
          <h1 class='card-overlay-heading'>{{ item.titel }}</h1>
          <p class='card-overlay-paragraph'>{{ prijsText }}{{ item.price }}</p>
          <router-link :to="{ name: 'Detail', params: { id: item.id }}">
            <button class='card-overlay-button' @click="$emit('productClicked', item.id)">{{ buttonText }}</button>
          </router-link>
        </div>
        <img :src="'src/assets/' + item.afbeelding" :alt="item.titel" class='card-image'>
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
    filteredData: Array
  },

  data() {
    return {
      data: producten
    }
  },

  computed: {
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

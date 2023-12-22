<template>
  <div className='body_elements'>
    <NavComponent />
    <HeaderComponent />
    <section className='reclame'>
      <div className='layout'>
        <div className='background-div'>
          <h2>{{ reclame }}</h2>
          <h2>{{ reclameGitaar }}</h2>
        </div>
      </div>
    </section>
    <article>
      <PopularProductsComponent :productsData='sortedStockedProducts' />
    </article>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import NavComponent from '@/components/NavComponent.vue'
import PopularProductsComponent from '@/components/PopularProductsComponent.vue'
import producten from '@/json/producten.json'

export default {
  name: 'HomeView',

  data() {
    return {
      data: producten
    }
  },

  computed: {
    reclame() {
      return 'Bestseller!'
    },
    reclameGitaar() {
      return 'Ibanez 3500X'
    },
    sortedStockedProducts() {
      return this.data.slice().sort((a, b) => b.stock - a.stock)
    }
  },

  components: {
    NavComponent,
    HeaderComponent,
    PopularProductsComponent,
    FooterComponent
  }
}
</script>

<style scoped>

</style>
<template>

  <NavComponent />

  <header class='overzichts_titel'>
    <h1>{{ titel }}</h1>
  </header>

  <section>
    <div class='filter'>
      <form class='filter-form'>
        <label for='filter-item'>{{ filterStModel }}</label>
        <input id='filter-item' type='checkbox' v-model='filterST'>
      </form>
      <form>
        <label for='filter-item-2'>{{ filterTModel }}</label>
        <input id='filter-item-2' type='checkbox' v-model='filterT'>
      </form>
    </div>
  </section>

  <div class='pagination'>
    <router-link v-for='page in paginatie' :key='page' :to="{ path: '/overzicht', query: { page: page } }"
                 class='page-link' :class="{ 'active': currentPage === page }" @click='changePage(page)'>{{ page }}
    </router-link>
    <router-view />
  </div>

  <article>
    <ProductCardComponent :filteredData='filteredData' @productClicked='naarDetailPagina' />
  </article>

  <FooterComponent />

</template>

<script>
import FooterComponent from '@/components/FooterComponent.vue'
import NavComponent from '@/components/NavComponent.vue'
import ProductCardComponent from '@/components/ProductCardComponent.vue'
import producten from '@/json/producten.json'

export default {
  name: 'OverzichtsPaginaView',

  data() {
    return {
      data: producten,
      paginatie: [1, 2, 3, 4, 5],
      filterST: false,
      filterT: false,
      currentPage: 1
    }
  },

  methods: {
    changePage(page) {
      this.currentPage = page
      this.$router.push({ query: { page: page } })
    },
    naarDetailPagina(productId) {
      this.$router.push({ name: 'Detail', params: { id: productId } })
    }
  },

  created() {
    const queryPage = parseInt(this.$route.query.page) || 1
    this.currentPage = queryPage

    const itemsPerPage = 8
    const pageCount = Math.ceil(this.data.length / itemsPerPage)
    this.paginatie = Array.from({ length: pageCount }, (_, index) => index + 1)
  },

  computed: {
    filteredData() {

      const itemsPerPage = 8
      const startIndex = (this.currentPage - 1) * itemsPerPage
      const endIndex = startIndex + itemsPerPage

      let filtered = this.data

      if (this.filterST && this.filterT) {
        return filtered.slice(startIndex, endIndex)
      }

      if (this.filterST) {
        filtered = filtered.filter(item => item.type === 'ST-Model')
      }

      if (this.filterT) {
        filtered = filtered.filter(item => item.type === 'T-Model')
      }

      return filtered.slice(startIndex, endIndex)
    },
    titel() {
      return 'Elektrische gitaren'
    },
    filterStModel() {
      return 'ST-Model'
    },
    filterTModel() {
      return 'T-Model'
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
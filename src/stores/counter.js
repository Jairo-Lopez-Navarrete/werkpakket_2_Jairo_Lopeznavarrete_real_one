/*import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})*/

import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
  }),
  actions: {
    addToCart(product) {
      const existingProduct = this.items.find(item => item.id === product.id);

      if (existingProduct) {
        // Product bestaat al in de winkelmand, verhoog de hoeveelheid
        existingProduct.quantity += product.quantity;
      } else {
        // Voeg nieuw product toe aan de winkelmand
        this.items.push({ ...product, quantity: product.quantity });
      }
    },
  },
  getters: {
    cartItemCount(){
      return this.items.reduce((total, item) => total + item.quantity, 0);
    }
  }
});
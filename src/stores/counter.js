
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
    removeFromCart(item){
      const index = this.items.findIndex(i => i.id === item.id);

      if (index !== -1){
        this.items.splice(index, 1);
      }
    },
  },
  getters: {
    cartItemCount(){
      return this.items.reduce((total, item) => total + item.quantity, 0);
    }
  }
});
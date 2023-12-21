/*import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    currentUser: null,
    isLoggedIn: false,
  }),
  actions: {
    login({ email, password }) {
      const user = gegevens.user.find(u => u.email === email && u.password === password);
      if (user) {
        this.currentUser = user;
        this.isLoggedIn = true;
        return true;
      } else {
        return false;
      }
    },
    logout() {
      this.currentUser = null;
      this.isLoggedIn = false;
    },
  },
});*/
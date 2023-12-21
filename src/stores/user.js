import { defineStore } from 'pinia';

import gegevens from "@/json/gegevens.json";

export const useUserStore = defineStore('user', {
  state: () => ({
    currentUser: null,
    isLoggedIn: false,
    token: null,
  }),
  actions: {
    login({ email, password }) {
      const user = gegevens.user.find(u => u.email === email && u.password === password);
      if (user) {
        this.currentUser = user;
        this.isLoggedIn = true;
        this.token = 'yourGeneratedToken';
        document.cookie = `authToken=${this.token};path=/;max-age=86400`;
        return true;
      } else {
        return false;
      }
    },
    logout() {
      this.currentUser = null;
      this.isLoggedIn = false;
      this.token = null;
      document.cookie = 'authToken=;path=/;expires=Thu, 01 Jan 1970 00:00:00 GMT';
    },
  },
});
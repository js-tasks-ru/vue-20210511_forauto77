import Vue from './vendor/vue.esm.browser.js';

const app = new Vue ({
  template: '#counter',
  data() {
    return {
      count: 0
    }
  },

  methods: {
    countIncrease() {
      this.count++
    }
  }
});

app.$mount('#counter')

// Требуется создать Vue приложение

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import book from './book_data.js'

Vue.config.productionTip = false

let data = {
  books: book,
  cart: [],
  user: null
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')

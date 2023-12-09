import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//Globally Install Tailwind CSS
import './tailwind/app.css'

//Splide
import VueSplide from '@splidejs/vue-splide';

Vue.use(VueSplide);

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

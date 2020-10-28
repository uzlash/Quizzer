import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
// import axios from 'axios'

import VueCoreVideoPlayer from 'vue-core-video-player'

Vue.use(VueCoreVideoPlayer)
// axios.defaults.baseURL = 'http://localhost:3000/course'
// import VueVideoPlayer from 'vue-video-player'
// require videojs style
// import 'video.js/dist/video-js.css'

// import 'video.js/dist/video.min.js';
// Vue.use(VueVideoPlayer)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

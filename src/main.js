import Vue from 'vue'
import App from './App.vue'

import voiceInputButton from './lib'

Vue.use(voiceInputButton, {
  appId: '5eccc34b',
  apiKey: '0aa4dcd2512bbbe86cdebf98fddca25c',
  apiSecret: 'bbad948d40549a93d57f8b276c336d70'
})

new Vue({
  el: '#app',
  render: h => h(App)
})

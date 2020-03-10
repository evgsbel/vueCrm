import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filters'
import messagePlugin from '@/utils/message.plugin'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)

firebase.initializeApp({
  apiKey: 'AIzaSyDj9pgtZLtHINiB72YllilURMOlwLjxP9s',
  authDomain: 'vuecrm-a5ea1.firebaseapp.com',
  databaseURL: 'https://vuecrm-a5ea1.firebaseio.com',
  projectId: 'vuecrm-a5ea1',
  storageBucket: 'vuecrm-a5ea1.appspot.com',
  messagingSenderId: '100579172632',
  appId: '1:100579172632:web:f33d0da623226f59b83e6d'
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})

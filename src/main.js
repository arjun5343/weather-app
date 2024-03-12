

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css';
// import {extend,ValidationObserver, ValidationProvider} from 'vee-validate';
// import * as rules from 'vee-validate/dist/rules';

const app = createApp(App)


// Vue.component('ValidationObserver', ValidationObserver);
// Vue.component('ValidationProvider', ValidationProvider);

// Object.keys(rules).forEach(rule => {
//   extend(rule, rules[rule]);
// });

app.use(router)

app.mount('#app')

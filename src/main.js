import Vue from 'vue';
import App from './App.vue';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router/router';
import Axios from 'axios';
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Element);
Vue.use(Vant);
Vue.prototype.axios = Axios;
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

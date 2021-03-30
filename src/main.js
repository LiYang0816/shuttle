import Vue from 'vue';
import App from './App.vue';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router/router';
import Axios from 'axios';
import Vant from 'vant';
import 'vant/lib/index.css';
// import Clipboard from 'clipboard';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import store from './store/index'
Vue.use(Element);
Vue.use(Vant);
Vue.use(Antd);
// Vue.use(Clipboard);
Vue.directive('title', {
  inserted (el, bind) {
    document.title = bind.value;
  }
});
console.log(process.env.VUE_APP_URL, process.env, 'process.env.VUE_APP_URL')
Vue.prototype.axios = Axios;
Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')

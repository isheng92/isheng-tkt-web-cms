// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import  VueResource  from 'vue-resource'

/**
 * 全局引入公用的jquery, bootstrap.js, bootstrap.css
 */
import "@/components/js/jquery/jquery.min.js" /*jquery.js*/
import "@/components/js/bootstrap/js/bootstrap.min.js" /*bootstrap.js*/
import "@/components/js/bootstrap/css/bootstrap.min.css" /*bootstrap.css*/
import BaseUtil from "@/components/js/common/BaseUtil.js" /*自定义工具类js*/
import Validate from "@/components/js/common/Validate.js" /*自定义校验工具类*/

Vue.config.productionTip = false;
Vue.use(VueResource);
Vue.use(BaseUtil);
Vue.use(Validate);

/* eslint-disable no-new */
new Vue({
  el: '#_indexHtml',
  router,
  components: { App },
  template: '<App/>'
});


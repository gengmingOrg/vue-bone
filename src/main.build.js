/**
 * 最后打包发布的时候会使用此文件，请将main.js中的引用部分转移到这里
 * 不要写入公共依赖文件夹，不要引入iview，iviewex和vuex
 */
import App from './App.vue'

// 在此处引入vuex和router，将下面导出对象改为{app: App, store: store, routes: router}
// import store from './Store'
import elementCss from 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

import BillMain from '@va/bill-main'
import query from "@emergency/common-query-lib";

Vue.component('BillVA', BillMain.Bill.BillRoute)
Vue.component('query', query.CommonQueryExecute)
import rewrite from "./utils/rewrite"
Vue.prototype.$vaRewrite = rewrite
// 消息总线
if (!Vue.prototype.$bus) {
  let EventBus = new Vue()
  Object.defineProperties(Vue.prototype, {
    $bus: {
      get: function () {
        return EventBus
      }
    }
  })
}

export default {
  app: App,
  element: ElementUI,
  elementCss: elementCss,
}
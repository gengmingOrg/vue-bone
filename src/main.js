import Vue from 'vue'
import App from './App.vue'
import iview from 'view-design'
// eslint-disable-next-line import/no-named-default
import { default as NROS } from 'nr.os.js'
import iviewex from 'iviewex'
import 'iviewex/dist/styles/nr-theme.css'
import vuex from 'vuex'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import "../../home-page/src/utils/flexible"
// 引入echarts
import echarts from 'echarts'

let nros = new NROS()

nros.getPlugin('http').setBaseURL(nros.getPlugin('config').getConfig().baseUrl)
nros.getPlugin('login').login({
  psw: 'admin',
  username: 'admin'
}).then((res) => {
  nros.getPlugin('http').setHeaders(nros.getPlugin('login').getHeader())
  render()
  if (window._v) {
    window._v.$Message.info(`登录成功`)
  } else {
    console.log(`登录成功`)
  }
}).catch((res) => {
  render()
  if (window._v) {
    window._v.$Message.error(`<span>登录失败</span><div style="margin-left: 15px;">info: ${res.data.message}</div>`)
  } else {
    console.log(`登录失败`)
  }
})

// 默认只添加了 @nvwa 的图标, 其他产品线 ↓在此数组中添加
nros.getPlugin('resource').loadIcon(['@nvwa'])

function render () {
  window._v = new Vue({
    template: '<App></App>',
    provide: {
      context: nros.getContext(nros.createInstance(nros.getUtils().guid()))
    },
    components: {
      App: App
    }
  }).$mount('#app')
}

Vue.use(iview)
Vue.use(iviewex)
Vue.use(vuex)
Vue.use(ElementUI)
Vue.config.productionTip = false

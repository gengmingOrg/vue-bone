// const path = require('path')
const path = require('path')
const wrapper = require('nros-config-wrapper')
let fonts_dir = path.resolve('./node_modules/iviewex/dist/styles/fonts')
let node_modues = path.resolve('./node_modules')

const devBuild = process.argv.indexOf('production') === -1
const serveMode = process.argv.indexOf('serve') !== -1

var config = {
  configureWebpack: {
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    },
    entry: {
      // app: './src/App.vue'
    },
    externals: {
      ...serveMode
        ? {} : {
          'vue': 'Vue',
          lodash: 'lodash',
          jquery: 'jQuery',
          '$': 'jQuery',
          'vue-router': 'VueRouter',
          vuex: 'Vuex',
          iview: 'iview',
          iviewex: 'iviewex',
          'nr.os.js': 'nros',
          Vuex: 'Vuex',
          '@va/biz-core': 'VaBizCore',
          '@va/biz-common': 'VaBizCommon',
          '@va/bill-main': 'VaBillMain',
          '@va/billlist-main': 'VaBillListMain',
          '@va/todo-main': 'VaTodoMain',
          '@va/workflow-main': 'VaWorkflowMain',
          '@va/meta-manage': 'VaMetaManage'
        }
    },
    devtool: devBuild ? 'eval-source-map' : 'none',
    output: {
      library: 'portal_application',
      libraryTarget: 'window',
      libraryExport: 'default',
      filename: 'app.bundle.js'
    },
    optimization: {
      minimize: !devBuild
    },
    devServer: {
      before: (app, server) => {
        app.get('/css/fonts/*', (res, req) => {
          req.sendFile(path.join(fonts_dir, res.path.substring(11)))
        })
        app.get('/output/*', (res, req, next) => {
          if (res.originalUrl.indexOf('/icon/') === -1) {
            next()
            return
          }
          req.sendFile(path.join(node_modues, res.path.substring(8)))
        })
      }
    }
  },
  chainWebpack: config => {
    config.optimization.delete('splitChunks')
  },
  css: { extract: false }
}

module.exports = wrapper(config)

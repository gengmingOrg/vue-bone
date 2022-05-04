const path = require('path')
const fs = require('fs')
const child_process = require('child_process')

const dirName = path.basename(__dirname)

const config = {
  project_dir: './dist',
  output_dir: path.resolve(__dirname, '../../../nr-os/output/@emergency/' + dirName),
  applist_path: path.resolve(__dirname, '../../../nr-os/output/applist.json')
}


function readAppMiltyConfig() {
  let config = null
  try {
    fs.accessSync(path.resolve(__dirname, './package_config.json'), fs.constants.F_OK)
    let miltyConfig = fs.readFileSync(path.resolve(__dirname, './package_config.json'))
    config = JSON.parse(miltyConfig)
  } catch (error) {} finally {
    return config
  }
}

function run(config) {
  fs.mkdirSync(config.output_dir, { recursive: true }, (e) => {
    console.log('创建输出文件夹失败，错误：' + e)
  })

  console.log('复制package.json')
  child_process.execSync('copy ' + path.resolve(__dirname, config.configfile_dir || 'package.json') + ' ' + config.output_dir + '\\package.json' + ' \/y')
  console.log('复制完成')

  console.log('复制app.config.json')
  try {
    child_process.execSync('copy ' + path.resolve(__dirname, config.configfile_dir || 'app.config.json') + ' ' + config.output_dir + '\\app.config.json' + ' \/y')
    let appConfig = fs.readFileSync(path.resolve(__dirname, config.configfile_dir || 'app.config.json'))
    let tempAppConfig = JSON.parse(appConfig)
    console.log('复制完成')

    console.log('尝试更新applist.json')
    try {
      let oriData = fs.readFileSync(path.resolve(config.applist_path))
      oriData = JSON.parse(oriData)
      if (typeof (oriData) === 'object') {
        let index = oriData.findIndex(item => {
          return item.name === tempAppConfig.name
        })
        if (index === -1) {
          oriData.push(tempAppConfig)
          fs.writeFileSync(path.resolve(config.applist_path), JSON.stringify(oriData))
          console.log(`配置更新成功`)
          return
        }
        // tempAppConfig.id = oriData[index].id
        oriData[index] = tempAppConfig
        fs.writeFileSync(path.resolve(config.applist_path), JSON.stringify(oriData))
        console.log('配置更新成功')
      }
    } catch (error) {
      console.log('配置更新失败' + error)
    }
  } catch (e) {
    console.log('复制失败，错误：' + e)
  }
}

let apps = readAppMiltyConfig()
if (apps) {
  apps.entry.forEach(e => {
    config.project_dir = e.expDir
    config.output_dir = path.resolve(__dirname, '../../../nr-os/output/@emergency/' + e.compoment)
    config.configfile_dir = e.config
    run(config)
  })
} else {
  run(config)
}

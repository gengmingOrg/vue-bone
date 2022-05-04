# Nr.OS Hello World

## 开始

1. 你需要确认你的产品线和 App 名称 (记为 `<prodLine>/<appname>` 本例为 `@demo/app-template`)
2. 在 `develop` 文件夹中创建 `<prodLine>` 文件夹
3. 将此目录放入 `develop/<prodLine>` 文件夹
4. 更改此目录的名字为 `<appname>`

   ```bash
      # 此时如按本例应为
      develop
      └─@demo
        └─app-template
   ```

5. 将此目录下的 `package.json` 中的 `name` 字段改为 `<prodLine>/<appname>`
6. 将此目录下的 `app.config.json` 中的 `name` 字段改为 `<appname>`

## 初始化

```bash
npm install
```

### 启动带热部署的开发服务器

```bash
npm run serve
```

### 编译产品

```bash
npm run build
```

### 审核错误和不标准的语法

```bash
npm run lint
```

### 自定义配置

查看 [Configuration Reference](https://cli.vuejs.org/config/).

### 文档

可以在 [Wiki](http://nvwa.jiuqi.com.cn/gitlab/nvwa/nros/app-template/wikis/NR-portal%E6%89%93%E5%8C%85%E6%A8%A1%E6%9D%BF%E5%B7%A5%E7%A8%8B%E4%BB%8B%E7%BB%8D) 中查看文档

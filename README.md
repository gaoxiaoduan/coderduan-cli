# 说明文档
> duan-cli 可以快速创建一个vue2的脚手架项企业级项目，开箱即用📦

## vue项目模板已经帮你配置：

- 常用的目录结构（你可以在此基础上修改）
- vue.config.js（其中配置了别名，你可以自行修改和配置更多）
- axios（网络请求axios的安装以及二次封装）
- vue-router（router的安装和配置，另外有路由的动态加载，后面详细说明）
- vuex（vuex的安装和配置，另外有动态加载子模块，后面详细说明）

## 使用教程
1. 如何安装？
```bash
npm install -g duan-cli
```

2. 如何创建项目？
```bash
duan create your_project_name
```
自动拉取项目模板、安装项目依赖、打开浏览器 （http://localhost:8080/）、自动启动项目

## 此项目已开发功能

> 注意⚠️：若要使用以下命令，需先进入create的项目中 ==> cd your_project_name

1. 创建vue组件：
```bash
duan addcpn YourComponentName # 例如: duan addcpn NavBar，默认会存放到src/components文件夹中
duan addcpn YourComponentName -d src/pages/home # -d 可以指定存放的具体文件夹
```


2. 创建vue页面，并配置路由

```bash
duan addpage YourPageName # 例如: duan addpage helloWorld，默认会存放到src/pages文件夹中
duan addpage YourPageName -d src/pages/home # -d 可以指定存放的具体文件夹
```

3. 创建vuex子模块

```bash
duan addstore YourStoreName # 例如: duan addstore user，默认会存放到src/store/modules文件夹中
duan addstore YourStoreName -d src/store/modules/user # -d 可以指定存放的具体文件夹
```




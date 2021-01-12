### 安装组件

在新项目的命令行终端运行一下命令
```
yarn add dalou-uiv3 

// 或
npm install dalou-uiv3
```
### 全局使用

安装完本组件库之后在main.js中引入样式文件
```

import dalouUiv3 from "dalou-uiv3"

//引用样式
import 'dalou-uiv3/lib/dalou-uiv3.css'

//全局应用
Vue.use(dalouUiv3)
```

Vue单文件组件中使用

```
<template>
  <z-button theme="primary" @click="test">按钮</z-button>
</template>

<script>
export default {
  name: 'App',
  methods: {
  	test() {
      console.log('点击事件')
    },
  }
}
</script>
```
### 按需引用组件
在使用组件库的项目安装 babel-plugin-import
```
cnpm i babel-plugin-import --save-dev
```
在引入组件库的项目根目录新建.babelrc 文件， 配置如下
```
{
  "plugins": [
    [
      "import",
      {
        "libraryName": "dalou-uiv3", // 组件名
        "libraryDirectory": "packages" // 组件源码包名
      }
    ]
  ]
}
```
Vue单文件组件中使用

```
<template>
  <z-button theme="primary" @click="test">按钮</z-button>
</template>

<script>
import { ZButton } from "dalou-uiv3"
import 'dalou-uiv3/lib/dalou-uiv3.css' // 或者在main.js全局中引入
export default {
  name: 'App',
  components: {
    ZButton
  },
  methods: {
  	test() {
      console.log('点击事件')
    },
  }
}
</script>
```
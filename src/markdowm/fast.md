### 项目环境
```
vue -v
v3.0.0

注意在使用包管理工具的时候，两个不能混合使用。

//yarn 设置淘宝源
yarn config set registry https://registry.npm.taobao.org


//安装cnpm
npm install -g cnpm --registry=https://registry.npm.taobao.org

```
### 发布私有npm
```
//打包库文件
npm run lib

//设置npm地址
npm set registry http://10.51.36.128:4873/

//登录
npm login

//发布
npm publish

```
修改包的版本（package.json 里的 version 字段） version 的字段表现为：”version“:"x.y.z"

> 有很大的改动，无法向后兼容,增加 x

> 增加了新特性，但仍能向后兼容，增加 y

> 修复 bug,小改动，增加 z


### 切换回公共npm库
```
npm set registry https://registry.npmjs.org/

#常用的仓库地址
  npm ---- https://registry.npmjs.org/
  cnpm --- http://r.cnpmjs.org/
  taobao - https://registry.npm.taobao.org/
  nj ----- https://registry.nodejitsu.com/
  rednpm - http://registry.mirror.cqupt.edu.cn/
  npmMirror  https://skimdb.npmjs.com/registry/
  edunpm - http://registry.enpmjs.org/
```
或者安装nrm进行管理
```
npm install -g nrm

//添加npm地址
nrm add verdaccio http://你的私有npm地址:4873

//查看地址列表
nrm ls

//使用
nrm use verdaccio
```


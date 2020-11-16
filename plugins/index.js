/*
* @Author: 澶уぇ澶фゼ.DALOU
* @Date:   2020-11-15 16:52:29
* @Last Modified by:   澶уぇ澶фゼ.DALOU
* @Last Modified time: 2020-11-16 10:43:55
*/
// 为组件提供 install 方法，供组件对外按需引入
import DanButton from './template/src/Button'
import Attr from './template/src/Attr'
import Switch from './template/src/Switch'
import Modal from './template/src/Modal'

//所有组件列表
const components = [
    DanButton,
    Attr,
    Switch,
    Modal
]

//定义install方法，Vue作为参数
const install = Vue=>{
    //判断是否安装，安装过就不用继续执行
    if(install.installed) return
    install.installed = true
    //遍历注册所有组件
    components.map(component => Vue.component(component.name,component))
}

//检测到Vue再执行
if(typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install,
    //所有组件，必须具有install方法才能使用Vue.use()
    ...components
}
/*
* @Author: 澶уぇ澶фゼ.DALOU
* @Date:   2020-11-15 16:52:29
* @Last Modified by:   澶уぇ澶фゼ.DALOU
* @Last Modified time: 2020-11-15 18:18:15
*/
// 为组件提供 install 方法，供组件对外按需引入 （单组件时）
import DanButton from './src/Button'
DanButton.install = Vue=>{
    Vue.component(DanButton.name,DanButton)
}
export default DanButton
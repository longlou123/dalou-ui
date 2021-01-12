import ZButton from './src/index.vue';
 
ZButton.install = function (Vue) {
  Vue.component(ZButton.name, ZButton);
}
 
export default ZButton;
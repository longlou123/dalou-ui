import LSwitch from './src/index.vue';
 
LSwitch.install = function (Vue) {
  Vue.component(LSwitch.name, LSwitch);
}
 
export default LSwitch;
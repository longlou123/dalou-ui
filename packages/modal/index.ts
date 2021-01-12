import LModal from './src/index.vue';
 
LModal.install = function (Vue) {
  Vue.component(LModal.name, LModal);
}
 
export default LModal;
import LTab from './src/index.vue';
//import LTabItem from './src/item.vue';

LTab.install = function (Vue) {
  Vue.component(LTab.name, LTab);
}

// LTabItem.install = function (Vue) {
//     Vue.component(LTabItem.name, LTabItem);
// }

export default LTab;
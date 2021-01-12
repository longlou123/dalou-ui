import ZButton from './button'
import LSwitch from './switch'
import LModal from './modal'
import LTab from './tab'
import LTabItem from './tab/item'
import LAccordion from './accordion'
import LpMessage from './message'
import { createMessage } from './message/src/index.js'
import { createDialog } from './dialog/src/index.js'
// 组件集合，用于遍历
const components = [ZButton, LSwitch, LModal, LTab, LTabItem, LAccordion, LpMessage];


// 定义 install 方法
const install = function(Vue) {
  if (install.installed) return;
  // 遍历注册全局组件
  components.map((component) => Vue.component(component.name, component));
};

// 判断是否是直接引入文件
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  createMessage,
  createDialog,
  //所有组件，必须具有install方法才能使用Vue.use()
  ...components
};

//组件按需引入时需要里添加
export {
  install,
  ZButton,
  LModal,
  LTab,
  LSwitch,
  LAccordion,
  LTabItem,
  LpMessage,
  createMessage,
  createDialog
};
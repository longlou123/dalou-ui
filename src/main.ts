import { createApp } from "vue";
import App from "./App.vue";
import {router} from "./router";
import store from "./store";
import 'github-markdown-css'
import xhwlComponent from "../packages";

createApp(App)
  .use(store)
  .use(xhwlComponent)
  .use(router)
  .mount("#app");

<template>
  <router-view />
</template>
<script>
  import {ref,provide} from 'vue'
  import {menuStatus} from "./utils/utils.js"
  import { createMessage, createDialog } from "../packages";
  import {router} from "./router"

  import NProgress from 'nprogress'
  import 'nprogress/nprogress.css'
  export default {
  name: 'App',
  setup() {
    const menuVisible = ref(menuStatus())
    const width = document.documentElement.clientWidth
    provide('menuVisible',menuVisible)
    // 全局注册组件
    provide('message', createMessage)
    provide('confirm', createDialog)

    router.beforeEach((to, from, next) => {
      NProgress.start()
      next()
    })

    router.afterEach(() => {
      if(width<=900){
        menuVisible.value = false
      }
      NProgress.done()
      window.scrollTo(0, 0)
    })
  }
}
</script>
<style lang="scss">
  @import "assets/scss/_var.scss";
  @import "assets/scss/reset.scss";
  #nprogress {
    .bar {
      background: $theme !important;
    }

    .spinner-icon {
      border-color: $theme transparent transparent $theme;
    }
  }

</style>

<template>
  <div class="container">
    <demo-doc title="基础用法" description="button的基础用法" :imgUrl="url" :modal="buttonModal" :component="modaljs">
    </demo-doc>
    <attr :data="data"></attr>
  </div>
</template>

<script>
  import buttonModal from "@/demoCode/button/buttonModal.vue";
  import modaljs from "@/demoCode/button/buttonModal.ts";
  import DemoDoc from "@/components/demoTemplate.vue";
  import Attr from "@/components/Attr.vue";
  import {ref, onMounted, nextTick} from 'vue'
  export default {
    components: {
      Attr,
      DemoDoc
    },
    setup(props, context) {
      let url = ref('')
      const data = { 
        columns:[{
          params: 'size',
          desc: '尺寸',
          type: 'string',
          select: 'normal / small / mini',
          default: 'normal',
        },
        {
          params: 'theme',
          desc: '按钮类型',
          type: 'string',
          select: 'primary / success / warning / info / danger / text',
          default: 'primary',
        }]
      }
      return {
        buttonModal,
        modaljs,
        data,
        url
      }
    },
  }
</script>

<style lang="scss" scoped>
  .container {
    width: 100%;
  }
</style>
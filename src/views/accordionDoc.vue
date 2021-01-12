<template>
    <div class="container">
      <demo-doc title="基础用法" description="accordion的基础用法" :imgUrl="url" :modal="buttonModal" :component="modalts">
      </demo-doc>
      <attr :data="data"></attr>
    </div>
  </template>
  
  <script>
    import buttonModal from "@/demoCode/accordion/accordionModal.vue";
    import modalts from "@/demoCode/accordion/accordionModal.ts";
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
            params: 'items',
            desc: '需要展示的数据数组',
            type: 'Arry',
            select: '-',
            default: '-',
          },
          {
            params: 'width',
            desc: '长度',
            type: 'Number',
            select: '-',
            default: 600,
          },
          {
            params: 'fontSize',
            desc: '字体大小',
            type: 'Number',
            select: '-',
            default: 14,
          },
          {
            params: 'color',
            desc: '字体颜色',
            type: 'String',
            select: '-',
            default: '#000',
          }]
        }
        return {
          buttonModal,
          modalts,
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
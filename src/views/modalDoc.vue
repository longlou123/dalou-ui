<template>
  <demo-doc title="基本用法" description="弹出一个对话框" :component="ModalDemo" :modal="ModalTemplate"></demo-doc>
  <attr :data="data"></attr>
</template>
<script>
  import DemoDoc from '@/components/demoTemplate.vue';
  import ModalTemplate from '@/demoCode/modal/modalTemplate.vue';
  import ModalDemo from '@/demoCode/modal/modalTemplate.ts';
  import Attr from '@/components/Attr.vue';

  export default {
    components: {
      Attr,
      DemoDoc
    },
    setup() {
      const data = {
        columns: [{
            params: 'visible',
            desc: '是否展示',
            type: 'boolean',
            select: 'true / false',
            default: 'normal',
          },
          {
            params: 'changeModel',
            desc: '关闭/取消/确认回调函数',
            type: 'function',
            select: 'ok/cancel/close',
            default: '--',
          }
        ]
      }
      return {
        ModalDemo,
        ModalTemplate,
        data,
      };
    },
  };
</script>

<style lang="scss" scoped>
  .show-content {
    padding: 40px 20px;
  }
</style>
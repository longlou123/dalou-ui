<template>
    <demo-doc title="基本用法" description="弹出一个对话框" :component="ModalDemo" :modal="MessageModal"></demo-doc>
    <attr :data="data"></attr>
  </template>
  <script>
    import DemoDoc from '@/components/demoTemplate.vue';
    import MessageModal from '@/demoCode/dialog/dialogModal.vue';
    import ModalDemo from '@/demoCode/dialog/dialogModal.ts';
    import Attr from '@/components/Attr.vue';
  
    export default {
      components: {
        Attr,
        DemoDoc
      },
      setup() {
        const data = {
          columns: [{
              params: 'type',
              desc: '类型',
              type: 'string',
              select: 'info | success | err | warning',
              default: 'info',
            },
            {
              params: 'content',
              desc: '消息内容',
              type: 'string',
              select: '-',
              default: '这是一条提示信息',
            },
            {
              params: 'lastTime',
              desc: '消息提示时间',
              type: 'number',
              select: '-',
              default: '2500',
            }
          ]
        }
        return {
          ModalDemo,
          MessageModal,
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
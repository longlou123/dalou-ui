<template>
  <div class="container">
    <demo-doc title="tab切换" description="内容有关联的不同类型的数据" :component="TabDemo" :modal="TabModal"></demo-doc>
    <attr :data="data"></attr>
  </div>
</template>

<script>
  import DemoDoc from '@/components/demoTemplate.vue';
  import TabModal from '@/demoCode/tab/tabModal.vue';
  import TabDemo from '@/demoCode/tab/tabModal.ts';
  import Attr from '@/components/Attr.vue';

  export default {
    components: {
      Attr,
      DemoDoc
    },
    setup() {
      const data = {
        columns: [{
            params: 'key',
            desc: '绑定值，选中选项卡的 name',
            type: 'string',
            select: '--',
            default: '第一个选项卡的 name',
          },
          {
            params: 'title',
            desc: '选项卡标题',
            type: 'string',
            select: '--',
            default: '--',
          }
        ]
      }
      return {
        TabDemo,
        TabModal,
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
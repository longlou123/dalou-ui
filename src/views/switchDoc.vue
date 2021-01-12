<template>
    <div class="container">
      <demo-doc title="基础用法" description="开关按钮的基本用法" :component="templateDemo" :modal="SwitchModal"></demo-doc>
      <attr :data="data"></attr>
    </div>
  </template>
  
  <script lang="ts">
  import SwitchModal from "@/demoCode/switch/switchModal.vue";
  import templateDemo from "@/demoCode/switch/switchModal.ts";
  import DemoDoc from "@/components/demoTemplate.vue";
  import Attr from "@/components/Attr.vue";
  
  export default {
    components: {Attr, DemoDoc},
    setup() {
      const data = {
        columns: [{
          params: 'value',
          desc: '是否选中',
          type: 'boolean',
          select: 'false / true',
          default: 'false',
        }]
      }
      return {
        SwitchModal,
        templateDemo,
        data
      }
    },
    mounted() {
      
    }
  }
  </script>
  
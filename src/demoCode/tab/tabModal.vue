<template>
    <l-tab v-model:active-key="activeKey">
      <l-tab-item class="tab-item-doc" key="1" title="用户管理">用户管理</l-tab-item>
      <l-tab-item class="tab-item-doc" key="2" title="配置管理">配置管理</l-tab-item>
      <l-tab-item class="tab-item-doc" key="3" title="角色管理">角色管理</l-tab-item>
    </l-tab>
  </template>
  <script lang="ts">
  import {ref} from 'vue'

  export default {
    setup() {
      const activeKey = ref('1')
      return {
        activeKey
      }
    }
  };
  </script>
  <style lang="scss">
  .tab-item-doc {
    padding: 20px 12px;
  }
  </style>
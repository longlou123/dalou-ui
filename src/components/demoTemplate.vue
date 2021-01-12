<template>
    <div class="demo-container">
      <img v-if="imgUrl" :src="imgUrl"  alt="组件展示">
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
      <!--展示代码的地方-->
      <code-per ref="codePer"  :modal="modal" :component="component"></code-per>
    </div>
  </template>
  
  <script>
  import CodePer from "./codePer.vue";
  
  export default {
    name: 'demo-doc',
    components: {CodePer},
    props: {
      title: {
        type: String,
        default: '组件功能'
      },
      description: {
        type: String,
        default: '组件功能描述'
      },
      component: {
        type: Object
      },
      imgUrl: {
        type: String,
        default: null
      },
      modal: {
        type: Object
      }
    }
  }
  </script>
  
  <style lang="scss" scoped>
  .demo-container {
    img{
      max-width: 100%;
    }
    h2 {
      font-weight: 400;
      color: #1f2f3d;
      font-size: 22px;
      margin: 55px 0 20px;
    }
  
    p {
      font-size: 14px;
      color: #5e6d82;
      line-height: 1.5em;
      margin: 14px 0;
    }
  }
  </style>
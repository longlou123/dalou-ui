<template>
    <article class="article-wrapper markdown-body" v-html="content">
    </article>
  </template>
  
  <script >
  import {ref} from 'vue'
  export default {
    setup() {
      const content = ref('')
      import('@/markdowm/introduce.md')
      .then((res)=>{
        content.value = res.default
      }).catch((err) => {
          console.log(err);
        })
  
      return {
        content
      }
    }
  }
  </script>
  
  <style lang="scss" scoped>
  .article-wrapper {
    padding: 40px 0;
  }
  </style>
  
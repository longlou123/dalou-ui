<template>
  <article class="article-wrapper markdown-body" v-html="content">
  </article>
</template>

<script>

export default {
  data(){
    return {
      content:''
    }
  },
  mounted(){
    this.getMakdowm()
  },
  methods: {
    getMakdowm(){
      import('@/markdowm/use.md')
      .then((res)=>{

        this.content = res.default

      }).catch((err) => {
        console.log(err);
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.article-wrapper {
  padding: 40px 0;
  text-align: left;
}
</style>
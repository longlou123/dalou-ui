<template>
  <div class="accordion">
    <div v-for="(vo,inx) in items" :key="inx">
      <!-- 手风琴标题 -->
      <div class="item" @click="changeItem(vo,inx)" :style="{width: itemWidth + 'px', color: activeColor, fontSize: fontSize + 'px' }">
        {{vo.title}}
      </div>
      <!-- 手风琴内容 -->
      <div class="content" v-show="active==inx&&vo.show" :style="{width: itemWidth + 'px'}">
        {{vo.content}}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import {
    reactive,
    toRefs
  } from 'vue'
  export default {
    name: 'LAccordion',
    props: {
      items: {
        required: true,
        type: Array,
        default: function () {
          return [{
            title: "JavaScript",
            content: "这是内容",
            show: true
          }]
        }  
      },
      itemWidth: {
        type: Number,
        default: function () {
          return 600
        }   
      },
      activeColor: {
        type: String,
        default: function () {
          return '#000'
        }   
      },
      fontSize: {
        type: Number,
        default: function () {
          return 14
        }   
      }
    },
    setup() {
      //定义接口类型.
      interface ItemObj {
        title: string;
        content: string;
        show: boolean;
      }
      const data = reactive({
        active: 0,
        changeItem: (vo: ItemObj, inx: number) => {
          if (inx === data.active) {
            vo.show = !vo.show
          } else {
            vo.show = true
          }
          data.active = inx
        }
      })
      return {
        ...toRefs(data)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .accordion {
    width: 100%;
    .item {
      text-align: center;
      line-height: 40px;
      margin: 0 auto;
      height: 40px;
      border:1px solid #000;
      cursor: pointer;
      margin-bottom: 5px;
    }
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    .content {
      padding: 10px;
      opacity: 0;
      min-height: 80px;
      margin: 0 auto;
      animation-name: fadeIn;
      animation-duration: 1s;
      animation-fill-mode: both;
    }
  }
</style>
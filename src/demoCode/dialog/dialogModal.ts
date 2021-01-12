const htmlCode: string = `<template>
    <div>
        <z-button class="b-m" theme="success" @click="showMessage1()">删除</z-button>
    </div>
</template>

<script>
import {
  inject
} from 'vue'
export default {
  name: 'button-demo',
  setup() {
    // 接收创建 message 组件的方法
    let $confirm = inject('confirm')

    const showMessage1 = () => {
      // 调用方法
      $confirm({
          content: '确定删除该标签以及该标签下所有网址吗？'
        })
        .then(() => {
          $message({
            type: 'success',
            content: '标签页及子网址删除成功'
          })
        })
        .catch(() => {})
    }

    return {
      showMessage1
    }
  }
}
<\/script>

<style lang="scss" scoped>
.b-m {
  margin-right: 15px
}
</style>`

export default {
	htmlCode
}
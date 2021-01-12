const htmlCode: string = `<template>
    <div>
        <z-button class="b-m" theme="success" @click="showMessage1()">成功</z-button>
        <z-button class="b-m" theme="danger" @click="showMessage2()">失败</z-button>
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
    let $message = inject('message')

    const showMessage1 = () => {
      // 调用方法
      $message({
        type: 'success', // 消息框的类型，可选：info | success | err | warning
        content: '这是一条成功的消息', // 消息内容
        lastTime: 5000 // 消息框持续的时间
      })
    }
    const showMessage2 = () => {
      // 调用方法
      $message({
        type: 'err', // 消息框的类型，可选：info | success | err | warning
        content: '这是一条失败的消息', // 消息内容
        lastTime: 5000 // 消息框持续的时间
      })
    }

    return {
      showMessage1,
      showMessage2
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
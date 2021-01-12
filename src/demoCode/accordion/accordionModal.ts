const htmlCode: string = `<template>
    <div>
        <l-accordion :items="data"></l-accordion>
    </div>
</template>

<script>
import {
  ref
} from "vue";
export default {
  name: 'accordion-demo',
  setup() {
    let data = ref([{
        title: "JavaScript",
        content: "这是内容1",
        show: true
      },
      {
        title: "Java",
        content: "这是内容2",
        show: true
      },
      {
        title: "C++",
        content: "这是内容3",
        show: true
      }
    ])
    return {
      data
    }
  }
}
<\/script>

<style lang="scss" scoped>

</style>
`

export default {
  htmlCode
}
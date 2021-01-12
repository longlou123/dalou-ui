const htmlCode: string = `<template>
<div>
    <l-switch v-model:value="check"></l-switch>
</div>
</template>

<script lang="ts">
import {
    ref
} from "vue";
export default {
    name: 'switch-demo',
    setup() {
        const check = ref(true)
        return {
            check
        }
    }
}
<\/script>`

export default {
  htmlCode
}
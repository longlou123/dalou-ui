<template>
	<z-button size="mini" theme="primary" @click="showModal">打开对话框</z-button>
	<l-modal v-model:visible="visible" :ok="onOk" :cancel="onCancel">
		<template v-slot:title>
			<span class="modal-title-doc">标题</span>
		</template>
		<template v-slot:content>
			<div class="content-doc">展示的内容</div>
		</template>
	</l-modal>
</template>
<script lang="ts">
	import {
		ref
	} from "vue";
	export default {
		name: 'modal-demo',
		setup() {
			const visible = ref(false)
			const showModal = () => {
				visible.value = true
			}
			const onOk = () => {}
			const onCancel = () => {}
			return {
				showModal,
				visible,
				onOk,
				onCancel,
			}
		}
	}
</script>
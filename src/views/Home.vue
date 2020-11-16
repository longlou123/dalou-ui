<template>
  <div class="home">
    <z-button theme="primary" @click.native="test">按钮</z-button>
    </br>
    <z-switch :value="check" @changeV="getValue"></z-switch>
    </br>
    <z-button size="mini" theme="primary" @click.native="showModal()">打开对话框</z-button>
    <z-modal :top="styles" :width="widths" :visibles="modalV" @changeModel="changeModel">
      <template v-slot:title>
        <span class="modal-title-doc">标题</span>
      </template>
      <template v-slot:content>
        <div class="content-doc">展示的内容</div>
      </template>
    </z-modal>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  data() {
    return {
      check: true,
      modalV: false,
      styles: '200px',
      widths: "60%"
    }
  },
  methods: {
    getValue(val) {
      this.check = val
    },
    test() {
      console.log(555)
    },
    showModal(){
      this.modalV = true
    },
    changeModel(val) {
      console.log(val)
      if(val === "ok"){
        this.modalV = false
      }else if(val === "cancel"){
        this.modalV = false
      }else{
        this.modalV = false
        console.log('关闭')
      }
    }
  },
  components: {
    // HelloWorld
  }
};
</script>
<style lang="scss" scoped>
	.home{
		
	}
</style>

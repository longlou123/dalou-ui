<template >
    <div to="body" v-if="visibles">
      <div class="z-modal">
        <div class="z-modal-wrapper" :style="styles">
          <div class="z-modal-header">
            <slot name="title"/>
            <div class="close" @click="changeModel('close')">X</div>
            <!-- <svg class="close" aria-hidden="true" @click="close">
              <use xlink:href="#icon-guanbi"></use>
            </svg> -->
          </div>
          <div class="z-modal-content">
            <slot name="content"/>
          </div>
          <div class="z-modal-footer">
            <z-button size="mini" style="margin-right: 10px" @click.native="changeModel('cancel')">取消</z-button>
            <z-button size="mini" theme="primary" @click.native="changeModel('ok')">确认</z-button>
          </div>
        </div>
      </div>
    </div>
  </template>

<script>
import ZButton from "./Button.vue";

export default {
  name: 'z-modal',
  components: {ZButton},
  data() {
    return {
      styles : {
        width: '',
        marginTop: ''
      },
      enter: true,
      show: false,
      leave: true,
      height: 0,
      computedHeight: 0,
    }
  },
  watch: {
    visibles(newVal,oldVal) {
      console.log(newVal)
    }
  },
  props: {
    visibles: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
      default: '50%',
    },
    top: {
      type: String,
      default: '100px'
    },
    ok: {
      type: Function,
    },
    cancel: {
      type: Function
    },
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    }
  },
  mounted() {
    this.styles.width = this.width
    this.styles.marginTop = this.top
  },
  methods: {
    changeModel(val) {
      this.$emit('changeModel', val)
    }
  }
  // setup(props, context) {
  //   const close = () => {
  //     context.emit('update:visible', false)
  //     console.log('关闭');
  //   }

  //   const cancel = () => {
  //     if (props.cancel && props.cancel() !== false)
  //       close()
  //   }

  //   const ok = () => {
  //     if (props.ok && props.ok() !== false)
  //       close()
  //   }


  //   return {
  //     cancel,
  //     ok,
  //     close
  //   }
  // }
}
</script>


<style lang="scss">
$zIndex: 2007;
.z-modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  background: rgba(0, 0, 0, 0.5);
  z-index: $zIndex;

  .z-modal-wrapper {
    width: 50%;
    position: relative;
    margin: 0 auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, .3);
    margin-top: 100px;

    .z-modal-header {
      padding: 20px 20px 10px;
      position: relative;
      text-align: left;
      .close {
        fill: #909399;
        position: absolute;
        right: 10px;
        top: 10px;
        padding: 10px;
        width: 36px;
        height: 36px;
        box-sizing: border-box;
        cursor: pointer;
        &:hover{
          color: #1E90FF;
        }
      }
    }

    .z-modal-content {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }

    .z-modal-footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
    }
  }
}
</style>

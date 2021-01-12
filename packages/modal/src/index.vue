<template>
    <template v-if="visible">
      <Teleport to="body">
        <div class="l-modal">
          <div class="l-modal-wrapper" :style="styles">
            <div class="l-modal-header">
              <slot name="title"/>
              <svg class="close" aria-hidden="true" @click="close">
                <use xlink:href="#icon-guanbi"></use>
              </svg>
            </div>
            <div class="l-modal-content">
              <slot name="content"/>
            </div>
            <div class="l-modal-footer">
              <z-button size="mini" style="margin-right: 10px" @click="cancel">取消</z-button>
              <z-button size="mini" theme="primary" @click="ok">确认</z-button>
            </div>
          </div>
        </div>
      </Teleport>
    </template>
  </template>
  
  <script lang="ts">
  
  export default {
    name: 'l-modal',
    props: {
      visible: {
        type: Boolean,
        default: false
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
    setup(props, context) {
      const styles = {
        width: props.width,
        marginTop: props.top
      }
      const close = () => {
        context.emit('update:visible', false)
      }
  
      const cancel = () => {
        if (props.cancel && props.cancel() !== false)
          close()
      }
  
      const ok = () => {
        if (props.ok && props.ok() !== false)
          close()
      }
      
      return {
        styles,
        cancel,
        ok,
        close
      }
    }
  }
  </script>
  
  
  <style lang="scss">
  $zIndex: 2007;
  .l-modal {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    background: rgba(0, 0, 0, 0.5);
    z-index: $zIndex;
  
    .l-modal-wrapper {
      width: 50%;
      position: relative;
      margin: 0 auto 50px;
      background: #fff;
      border-radius: 2px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, .3);
      margin-top: 100px;
  
      .l-modal-header {
        padding: 20px 20px 10px;
        position: relative;
  
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
        }
      }
  
      .l-modal-content {
        padding: 30px 20px;
        color: #606266;
        font-size: 14px;
        word-break: break-all;
      }
  
      .l-modal-footer {
        padding: 10px 20px 20px;
        text-align: right;
        box-sizing: border-box;
      }
    }
  }
  </style>
  
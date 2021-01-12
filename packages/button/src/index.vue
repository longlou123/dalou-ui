/*
* @Author: DALOU
* @Date: 2020-12-11
* @Last Modified by: DALOU
* @Last Modified time: 2020-12-11
*/
<template>
  <button class="z-button" :class="classes" @click="onClick" :disabled="disabled">
    <span v-if="loading" class="z-button-spin"><svg class="menu" aria-hidden="true" @click="toggleMenu">
        <use xlink:href="#icon-jiazaizhong"></use>
      </svg></span>
    <span>
      <slot/>
    </span>
  </button>
</template>

<script>
  export default {
    name: 'ZButton',
    props: {
      //按钮主题
      theme: {
        type: String,
        default: 'default'
      },
      size: {
        type: String,
        default: 'normal'
      },
      loading: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false,
      }
    },
    methods: {
      onClick() {
        if (this.disabled) {
          return
        }
        //this.$emit('click')
      },
    },
    computed: {
      classes() {
        const loadingClass = this.loading ? ' z-button-loading' : ''
        return `z-button-${this.theme} z-button-${this.size}${loadingClass}`
      }
    }
  }
</script>

<style lang="scss">
  //主题色
  $theme: #1E90FF;

  //浅色背景
  $simpleBg: #DEDDFF;

  @keyframes spin {
    0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  .z-button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    color: #606266;
    text-align: center;
    box-sizing: border-box;
    outline: none;

    &.z-button-loading {
      pointer-events: none;

      .z-button-spin {
        width: 20px;
        height: 20px;
        margin-right: 5px;
        animation: spin infinite 1s linear;

        >svg {
          width: 100%;
          height: 100%;
        }
      }
    }

    >span {
      display: inline-block;
      vertical-align: middle;

    }

    margin: 0;
    transition: .1s;
    font-weight: 500;
    font-size: 14px;
    border-radius: 4px;

    &.z-button-default {
      background: #fff;
      border: 1px solid #dcdfe6;

      &:hover,
      &:focus {
        color: #0049FF;
        border-color: #0049FF;
        background-color: #fff;
      }
    }

    &.z-button-primary {
      background: #0049FF;
      border: 1px solid #dcdfe6;
      color: #eeeeee;

      &:hover,
      &:focus {
        color: #eeeeee;
        background-color: #2664FF;
      }
    }

    &.z-button-success {
      background: #3CB371;
      border: 1px solid #dcdfe6;
      color: #eeeeee;

      &:hover,
      &:focus {
        color: #eeeeee;
        background-color: #6be3bc;
      }
    }

    &.z-button-danger {
      background: #d72323;
      border: 1px solid #d72323;
      color: #eeeeee;

      &:hover,
      &:focus {
        color: #eeeeee;
        background-color: #dd5656;
      }
    }

    &.z-button-info {
      background: #52616b;
      border: 1px solid #dcdfe6;
      color: #eeeeee;

      &:hover,
      &:focus {
        color: #eeeeee;
        background-color: #6c777d;
      }
    }

    &.z-button-warning {
      background: #fce38a;
      border: 1px solid #dcdfe6;
      color: #4a4444;

      &:hover,
      &:focus {
        color: #8e8282;
        background-color: #f7e4a4;
      }
    }

    &.z-button-text {
      background: #fff;
      border: 0;
      color: #4a4444;

      &:hover,
      &:focus {
        >span {
          color: #8e8282;
          border-color: #222831;
          background-color: #f7e4a4;
        }
      }
    }

    &.z-button-normal {
      padding: 12px 20px;
    }

    &.z-button-small {
      padding: 10px 20px;
      font-size: 14px;
      border-radius: 4px;
    }

    &.z-button-mini {
      padding: 9px 15px;
      font-size: 12px;
      border-radius: 3px;
    }
  }
</style>
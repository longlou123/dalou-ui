<template>
    <div class="top-nav">
      <div class="icon">
        <router-link class="icon" to="/">
          <img class="logo" src="../assets/logo1.png" alt="logo">
          <!-- <svg aria-hidden="true">
            <use xlink:href="#icon-hehua1"></use>
          </svg> -->
        </router-link>
      </div>
      <ul class="menu-right-link">
        <li><a target="_blank" href="https://github.com/longlou123/dalou-ui">github</a></li>
        <li>
          <router-link to="/doc/introduce">文档</router-link>
        </li>
        <li><a target="_blank" href="http://www.otu11.xyz/app/index">博客</a></li>
      </ul>
    </div>
    <div class="mobel-nav">
      <svg class="menu" v-if="!isHome" aria-hidden="true" @click="toggleMenu">
        <use xlink:href="#icon-weibiaoti302"></use>
      </svg>
      <svg class="vue" aria-hidden="true">
        <use xlink:href="#icon-hehua1"></use>
      </svg>
    </div>
  </template>
  
  <script >
  import {inject, ref} from 'vue'
  export default {
    name:'top-nav',
    setup() {
      const menuVisible = inject('menuVisible')
      const toggleMenu = () => {
        menuVisible.value = !menuVisible.value
      }
      return {
        toggleMenu
      }
    },
    data(){
      return {
        isHome:false
      }
    },
    mounted() {
      this.isHome = this.checkPath()
    },
    methods: {
      checkPath(){
        const path = this.$route.path
        return path === '/' ? true : false
      }
    }
  }
  </script>
  
  <style lang="scss" scoped>
  .top-nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    padding: 10px 20px;
    color: #69258d;
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.25);
    z-index: 10;
    font-size: 16px;
    background: #fff;
    .logo{
      width: 40px;
      height: 40px;
    }
    .icon {
      float: left;
  
      > svg {
        width: 40px;
        height: 40px;
      }
    }
  
    .menu-right-link {
      float: right;
      height: 40px;
      line-height: 40px;
  
      > li {
        display: inline-block;
        vertical-align: middle;
        margin-right: 50px;
  
        > a {
          color: #1E90FF;
        }
      }
    }
  }
  .mobel-nav{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
    z-index: 20;
    display: none;
    box-shadow: 0 0 2px rgba(0,0,0,0.25);
    .menu{
      color: #8f8f8f;
      position: absolute;
      width: 24px;
      height: 24px;
      top: 8px;
      left: 12px;
    }
    .vue{
      width: 30px;
      height: 30px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
    }
  }
  
  @media (max-width: 900px){
    .top-nav{
      display: none;
    }
    .mobel-nav{
      display: block;
    }
  }
  </style>
  
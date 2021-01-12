<template>
  <div class="z-attr">
    <h2>Attributes</h2>
    <table class="attr-table">
      <thead>
        <tr>
          <th class="z-attr-title" v-for="(item,index) in columns">{{ item.title }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in data.columns">
          <td class="z-attr-title td" v-for="(value,key) in item">{{ value }}</td>
        </tr>
      </tbody>
    </table>
    <div v-if="data.events">
      <h2>Events</h2>
      <table class="attr-table">
        <thead>
          <tr>
            <th class="z-attr-title" v-for="(item,index) in events">{{ item.title }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in data.events">
            <td class="z-attr-title td" v-for="(value,key) in item">{{ value }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-if="data.methods">
      <h2>Methods</h2>
      <table class="attr-table">
        <thead>
          <tr>
            <th class="z-attr-title" v-for="(item,index) in methods">{{ item.title }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in data.methods">
            <td class="z-attr-title td" v-for="(value,key) in item">{{ value }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-if="data.slots">
      <h2>Slots</h2>
      <table class="attr-table">
        <thead>
          <tr>
            <th class="z-attr-title" v-for="(item,index) in slots" :key="index">{{ item.title }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in data.slots" :key="index">
            <td class="z-attr-title td" v-for="(value,key) in item" :key="key">{{ value }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import {
    columns,
    events,
    methods,
    slots
  } from "../utils/data";
  export default {
    name: 'attr',
    props: {
      data: {
        type: Object
      }
    },
    setup(props, context) {
      
      return {
        columns,
        events,
        methods,
        slots
      }
    }
  }
</script>

<style lang="scss" scoped>
  .z-attr {
    width: 100%;
    overflow-x: auto;

    h2 {
      font-weight: 400;
      color: #1f2f3d;
      font-size: 22px;
      margin: 55px 0 20px;
    }

    .attr-table {
      width: 100%;
      border-collapse: collapse;
      background-color: #fff;
      font-size: 14px;
      margin-bottom: 45px;
      line-height: 1.5em;
    }

    .z-attr-title {
      text-align: left;
      color: #909399;
      font-weight: 400;
      border-bottom: 1px solid #dcdfe6;
      padding: 15px;
      max-width: 250px;
      overflow: hidden;
      word-wrap: break-word;
      word-break: normal;
    }

    .td {
      color: #606266;
    }
  }
</style>
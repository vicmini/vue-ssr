<template>
  <div>
    <h2>{{msg}}</h2>
    <div>
      <button @click="increment">加1 +1</button>
      <button @click="decrement">减1 -1</button>
      <h3>Count is {{count}}</h3>
    </div>
  </div>
</template>
<script>
import {mapActions,mapGetters} from 'vuex';
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods: {
    test() {
      alert("测试初始化方法成功");
    },
    ...mapActions(["increment", "decrement"])
  },
  computed:{
    ...mapGetters({
      count:'getCount'
    })
  }
};
</script>
<style scoped>
</style>

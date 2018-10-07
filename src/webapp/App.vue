<template>
  <div id="app">
    <ul>
      <li>
        <router-link to='/' exact>首页</router-link>
        <router-link to='/test'>测试页</router-link>
        <router-link to='/about'>关于我们</router-link>
        <router-link to='/topics'>新闻列表</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name:'App'
}
</script>


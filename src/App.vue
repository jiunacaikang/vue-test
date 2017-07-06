<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar v-show="!$route.meta.keepAlive"></tab-bar>
  </div>
</template>

<script>
import tabBar from './components/tabBar'
export default {
  name: 'app',
  components:{tabBar},
  mounted () {
    //console.log(this.$router.params)
    this.hintPop.pop();
  },
  data () {
    return {
  
    }
  },
  methods:{
    
  }
}
</script>

<style lang="scss">
@import "./style/common.scss";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

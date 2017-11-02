<template>
  <div id="app">
    <transition name="component-fade" mode="out-in">
      <router-view></router-view>
    </transition>
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
    let that = this;
    that.hintPop.loading();
    setTimeout(that.hintPop.loadingClose,2000)
    //that.hintPop.pop({
    //  content:"是否登录？",
    //  confirm:function(){       //弹框 点击确认回调函数
    //      that.hintPop.hint("已登录");
    //      localStorage.username = true;
    //  },
    //  cancel:function(){         //弹框 点击取消回调函数 
    //      that.hintPop.hint("未登录");
    //      localStorage.username = false;
    //      that.$router.push({path: '/hello', query: {'unlogin': "你没有登录"}});
    //  }
    //});
  },
  data () {
    return {
      transitionName: 'slide-left'
    }
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
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
}
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .2s ease-in-out;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active for below version 2.1.8 */ {
  opacity: 0;
}
</style>

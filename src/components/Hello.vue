<template>
  <div class="hello">
    {{msg}}
    <div class="ts" @click="showHint">show hint</div>
    <div class="ts" @click="showPop">show pop</div>
    <div class="ts" @click="login">立即登录</div>
    <img src="../assets/logo.png" height="200" width="200" alt="">
  </div>
</template>

<script>
export default {
  name: 'hello',
  mounted () {
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      hint:['我是一个hint','我是一个hint提示~~~~~','我是一个hint!我是一个hint!','hint','提示~~']
    }
  },
  methods:{
    showHint:function(){
      this.hintPop.hint(this.hint[Math.floor(Math.random()*5)])
    },
    showPop:function(){
      this.hintPop.pop()
    },
    login:function(){
      let that = this;
      this.hintPop.pop({
        content:"现在登录？",
        confirm:function(){       //弹框 点击确认回调函数
          that.hintPop.hint("已登录");
          localStorage.username = true;
          that.$router.push('/')
        },
        cancel:function(){        //弹框 点击取消回调函数 
          that.hintPop.hint("未登录");
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scope>
@import "../style/mixin.scss";
.hello{
  margin-top:80px;
}
.ts{
  color: $blue;
  border:1px solid $blue;
  @include wh(25%, .7rem);
  @include borderRadius(5px);
  @include hb-t($blue);
  @include hb-b($blue);
  margin:10px auto;
  line-height: .7rem;
}
</style>

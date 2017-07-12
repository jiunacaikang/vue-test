<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
    <form>
      <input type="text" v-model="user.name" placeholder="name">
      <input type="text" v-model="user.age" placeholder="age">
      <input type="text" v-model="user.password" placeholder="password">
      <button @click="submit">提交</button>
      <button @click="reset">重置</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'index',
  mounted () {
    /*this.user = {
      name:"xxx",
      age:18,
      password:"yyyyy"
    }*/
  },
  data () {
    return {
      msg: 'Welcome to Your account',
      user:{}
    }
  },
  methods:{
    submit () {

    },
    reset () {
      this.user = {};
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../style/mixin.scss";
form{
  margin-top:30px;
}
input {
  @include wh(4rem,.8rem);
  @include borderRadius(5px);
  display: block;
  padding-left:5px;
  margin:5px auto;
}
button{
  @include wh(2rem,.8rem);
  @include borderRadius(5px);
  background: #ccc;
}
.mint-swipe{
  height: 200px;
}
.mint-swipe-item{
  background: pink;
}
.mint-swipe-item:nth-child(2){
  background: aqua;
}
.mint-swipe-item:nth-child(3){
  background: #abcdef;
}
</style>

<template>
  <div>
    <input type="text" v-model="user.name" placeholder="name">
    <input type="text" v-model="user.age" placeholder="age">
    <input type="text" v-model="user.password" placeholder="password">
    <button @click="submit">提交</button>
    <button @click="reset">重置</button>
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
      console.log(this.user)
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
</style>

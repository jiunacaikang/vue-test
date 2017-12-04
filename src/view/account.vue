<template>
  <div>
    <mt-swipe :auto="4000" @change="swiperEnd">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
    <div class="account-logo">
      <img src="../assets/jn.jpg" height="50" width="50" alt="">
    </div>
    <p>vuex-count:{{count}}</p>
    <div v-for='todo in doneTodos' :key='todo.id'>{{todo.text}}</div>
    <div class="form">
      <input type="text" v-model="user.name" placeholder="name">
      <input type="text" v-model="user.age" placeholder="age">
      <input type="text" v-model="user.password" placeholder="password">
      <button class='submit' @click="submit">提交</button>
      <button @click="reset">清空</button>
    </div>
    <div>
      <button class="changeCount" @click="changeCount()">add</button>
      <button class="changeCount change" @click="asyncChangeCount()">change</button>
      <button class="reset" @click="changeCount('reset')">reset</button>
    </div>
    <button class="all" @click="countAll()">count all</button>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { mapState,mapGetters } from 'vuex'
  import { Swipe, SwipeItem } from 'mint-ui';
  Vue.component(Swipe.name, Swipe);
  Vue.component(SwipeItem.name, SwipeItem);
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
    },
    swiperEnd(index) {
      //console.log(index)
    },
    changeCount (type) {
      if(type === 'reset') {
        this.$store.commit('RESET');
      }else{
        this.$store.commit('INCREMENT');
      }
    },
    asyncChangeCount () {
      let val = Math.floor(Math.random() * 50);
      this.$store.dispatch('asyncSetCount',val);
    },
    countAll () {
      let data = {
        count:8,
        num:5
      }
      this.$store.commit('COUNTALL',data)
    }
  },
  computed: {
    ...mapState ([
      'count'
    ]),
    ...mapGetters([
      'doneTodos'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../style/mixin.scss";
.form{
  margin-top:30px;
}
input {
  @include wh(4rem,.8rem);
  @include borderRadius(5px);
  display: block;
  padding-left:5px;
  margin:5px auto 0;
}
button{
  @include wh(2rem,.8rem);
  @include borderRadius(5px);
  margin-top:5px;
  line-height: 0.8rem;
  background: #ddd;
  &.submit{
    background: #00adff;
    color:#fff;
  }
  &.changeCount{
    @include wh(1.3rem,.8rem);
    background:red;
    color:#fff;
  }
  &.reset{
    width: 1.3rem;
  }
  &.change{
    background: #00adff;
  }
  &.all{
    width: 4.1rem;
    background: #00adff;
    color:#fff;
  }
}
.account-logo{
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  margin:10px;
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

<template>
  <div class="hello">
    {{msg}}
    <div class="ts" @click="showHint">show hint</div>
    <div class="ts" @click="showPop">show pop</div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  mounted () {
    // var t = Boolean(this.$route.query.hideBar);
    // console.log(t)
   this.$emit("hideBar",true);
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scope>
@import "../style/mixin.scss";
.ts{
  color: $blue;
  border:1px solid pink;
  @include wh(30%, .8rem);
  @include borderRadius(5px);
  @include hb-t(pink);
  @include hb-b(pink);
  margin:10px auto;
  line-height: .7rem;
}
*{margin:0;padding:0;list-style: none;}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

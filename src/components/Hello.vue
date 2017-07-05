<template>
  <div class="hello">
    {{msg}}
    <div class="ts">hello world</div>
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
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scope>
@import "../style/mixin.scss";
.ts{
  color: $blue;
  @include wh(100%, .5rem);
  @include borderRadius(5px);
  @include hb-t(pink);
  @include hb-b(pink);
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

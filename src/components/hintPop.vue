<template>
  <div class="hintPop">
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'hello',
  mounted () {
  },
  data () {
    return {
      msg: 'Welcome to Your hint-pop'
    }
  },
  methods:{
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scope>
@import "../style/mixin.scss";
.hintPop{
  color: $blue;
  @include wh(100%, 2.5rem);
  @include borderRadius(5px);
  @include hb-t(pink);
  @include hb-b(pink);
  margin-top:1rem;
  padding-top:0.3rem;
}

</style>

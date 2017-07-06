<template>
  <div>
    {{msg}}
    <div class="toHello">
      <router-link :to="{path:'hello'}">去hello</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'invite',
  mounted () {
  },
  data () {
    return {
      msg: 'Welcome to Your invite'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../style/mixin.scss';
.toHello a{
  @include wh(1rem,.6rem);
  @include borderRadius(5px);
  display: block;
  border:1px solid $blue;
  margin:0 auto;
  margin-top:1rem;
  color:red;
  line-height: .55rem;
}
</style>

<template>
  <div class="wraper">
    {{msg}}
    <div class="toHello">
      <router-link :to="{path:'hello'}">去hello</router-link>
    </div>
  </div>
</template>

<script>
import $http from "@/common/http"

export default {
  name: 'invite',
  mounted () {
    $http.get('mock/db.json',{"page":1}).then(function(res){
      console.log(res)
    }).catch(function(res){
      console.log("error")
    });
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
.wraper{
  margin-top:60px;
}
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

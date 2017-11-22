<template lang="jade">
  div.nav-bar
    <router-link :to="{path:item.link}" v-for="(item,index) in tabData" :key="item.name" @mouseenter.native="tab(index)" @click.native="tab(index)" exact>{{item.name}}
    </router-link>
</template>

<script>
export default {
  name: 'tabBar',
  mounted () {
    // var t = Boolean(this.$route.query.hideBar);
    // console.log(t)
  },
  data () {
    return {
      tabData:[{
        name:"立即抢购",
        link:"/"
      },{
        name:"我的账户",
        link:"account",
        hideTab:true
      },{
        name:"我的邀请",
        link:"invite"
      }]
    }
  },
  methods: {
    tab:function(i){
      //console.log(i)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
@import "../style/mixin.scss";
.nav-bar{
  width:100%;
  position: fixed;
  bottom: 0;
}
.nav-bar a{
  @include hb-t(#ddd);
  width: 33.33%;
  height:1rem;
  float: left;
  background: #f8f8f8;
  color: #666;
  line-height: 1rem;
  /* border-top:2px solid #ddd; */
  display: block;
}
.nav-bar .router-link-active{
  @include hb-t($red);
  color: #f2414f;
}
</style>

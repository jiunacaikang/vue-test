<template>
  <div class="nav-bar">
    <router-link :to="{path:item.link}" v-for="(item,index) in tabData" :key="item.name" @click.native="tab(index)" exact>{{item.name}}
    </router-link>
  </div>
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-bar{
  width:7.5rem;
  position: fixed;
  bottom: 0;
}
.nav-bar a{
  width: 33.33%;
  height:1rem;
  float: left;
  background: #f8f8f8;
  color: #666;
  line-height: 1rem;
  border-top:2px solid #ddd;
  display: block;
}
.nav-bar .router-link-active{
  border-top-color: #f2414f;
  color: #f2414f;
}
</style>

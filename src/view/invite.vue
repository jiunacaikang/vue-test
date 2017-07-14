<template>
  <div class="wraper">
    {{msg}}
    <div class="toHello">
      <router-link :to="{path:'hello'}">去hello</router-link>
    </div>

    <div class="nav">
        <span :class='{"active":active=="tab-container1"}' @click="test('tab-container1')">tab 1</span>
        <span :class='{"active":active=="tab-container2"}' @click="test('tab-container2')">tab 2</span>
        <span :class='{"active":active=="tab-container3"}' @click="test('tab-container3')">tab 3</span>
    </div>
    <mt-tab-container v-model="active" swipeable>
      <mt-tab-container-item id="tab-container1">
        <mt-cell v-for="n in 3" :key='n' title="tab-container 1"></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-container2">
        <mt-cell v-for="n in 5" :key='n' title="tab-container 2"></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-container3">
        <mt-cell v-for="n in 10" :key='n' title="tab-container 3"></mt-cell>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
import Vue from 'vue'
import $http from "@/common/http"
import {Cell, TabContainer, TabContainerItem } from 'mint-ui';

Vue.component(Cell.name, Cell);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
export default {
  props:{
    swipeable:true
  },
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
      msg: 'Welcome to Your invite',
      active:"tab-container3"
    }
  },
  methods:{
    test (id) {
      this.active = id;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../style/mixin.scss';
.wraper{
  margin-top:50px;
}
.toHello a{
  @include wh(1rem,.6rem);
  @include borderRadius(5px);
  display: block;
  border:1px solid $blue;
  margin:0 auto;
  margin:0.5rem auto;
  color:red;
  line-height: .55rem;
}
.nav {
  margin-bottom: .3rem;
  font-size: 0;
  span{
    width: 100px;
    height: 34px;
    background: snow;
    line-height: 32px;
    border-radius: 5px;
    display: inline-block;
    margin:0 5px;
    font-size: 12px;
    &.active {
      background: $red;
      transition:all 0.35s;
      color:#fff;
    }
  }
}
</style>

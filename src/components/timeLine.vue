<template lang="jade">
  div.timeLine
    div(v-for="item,index in timeMsg" v-bind:key="index")
      div.year.clearfix(v-if="item.type==='yy'")
        div.yearCon.rel.fl
          span.yearValue.abs {{item.value}}
          span.line.abs
          i.point.abs
      div.month.clearfix(v-if="item.type==='mm'")
        div.monthCon.rel.fr
          span.monthValue.abs {{item.value}}月
          span.monthMsg {{item.msg}}
          span.line.abs(v-bind:class="{'last':timeMsg.length-1 == index}")
          i.point.abs
</template>

<script>
export default {
  name: 'timeLine',
  props:{
    timeMsg:Array
  },
  mounted () {
    console.log(this.timeMsg)
  },
  data () {
    return {
    }
  },
  methods:{}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scope>
@import "../style/mixin.scss";
.yearCon{
  height: 50px;
  width: 30%;
  .yearValue{
    width: 60px;
    height: 30px;
    right:20px;
    top:-10px;
    line-height: 30px;
    display: inline-block;
    background: #f60;
    color: #fff;
    border-radius: 5px;
  }
}
.line{
  width: 6px;
  height: 100%;
  background: #ccc;
  right: -3px;
  top:0;
}
.point{
  width: 10px;
  height: 10px;
  background: #f60;
  right:-5px;
  border-radius: 50%;
}
.monthCon{
  min-height: 30px;
  padding-bottom: 10px;
  width: 70%;
  .point{
    background: #aaa;
    left:-5px;
    top:2px;
  }
  .monthValue{
    width: 50px;
    text-align: right;
    left: -65px;
    top:0;
  }
  .monthMsg{
    width: 100%;
    display: inline-block;  
    text-align: left;
    padding:0 15px;
    box-sizing:border-box;
  }
  .line{
    left: -3px;
  }
}
.line.last{
  height: 5px;
}
</style>

<template>
  <div>
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your account'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.title{
  width:3rem;
  height: 2rem;
  background: #000;
}
.main-top{
  width:4.2rem;
  height: 4.2rem;
  border-radius: 50%;
  border:2px solid #f2caca;
  margin: 0 auto;
}
.main-top-con{
  width:3.4rem;
  height: 3.4rem;
  border-radius: 50%;
  border:.2rem solid #f2414f;
  margin: 0.2rem auto 0
}
.tap{
  font-size:.24rem;
  margin-top: 1rem;
}
.profile{
  text-align: center;
  font-size: .7rem;
  font-weight: bold;
  height: auto;
  padding-bottom: .4rem;
}
.profile span{
  border-bottom: 1px solid #ddd;
  padding-bottom: .4rem;
}
.detail{
  line-height: .5rem;
}
.total{
  padding-top: .5rem;
  color: #666;
  font-size: .28rem;
  font-weight: bold;
}
.total span{
  font-size: .24rem;
  font-weight: normal;
}
.buy{
  padding: .8rem .7rem .5rem;
  background: #fff;
  margin-top: .5rem;
}
.buy ul{
  overflow: hidden;
}
.buy ul li{
  float: left;
  width: 33%;
}
a.main-button{
  width:100%;
  height: .76rem;
  background: #f2414f;
  display: block;
  margin-top: .5rem;
  border-radius: 5px;
  color: #fff;
  line-height: .76rem;
  font-size: .34rem;
}
.protect{
  margin-top: .4rem;
}
</style>

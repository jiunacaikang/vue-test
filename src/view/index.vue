<template>
  <div>
    <div class="main">
      <div class="main-top">
          <div class="main-top-con">
              <p class="tap redC">预期年化收益</p>
              <p class="profile redC"><span>8.00%</span></p>
              <a href="javascript:;" class="detail redC">查看详情</a>
          </div>
      </div>
      <p class="total">已有<i class="redC">1820</i>位投资人投资葫芦宝<br><span>到期一次性还本付息</span></p> 
      <div class="buy">
        <ul>
          <li>投资期限<i class="redC">30天</i></li>
          <li>起投金额<i class="redC">100元</i></li>
          <li>计息<i class="redC">T+1</i></li>
        </ul>
        <a href="javascript:;" class="main-button">立即投资</a>
        <p class="protect">账户资金安全由新浪支付和永安保险保障</p>
      </div> 
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
  margin: 0.2rem auto 0;
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
.redC {
  color:#f2414f;
}
</style>

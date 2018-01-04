<template>
  <div class="main">
    <div class="item">
      <span class='fl type'>手机号码</span>
      <input class='fl ipt' type="tel" v-model="phoneNum" placeholder="请输入手机号码" maxlength="11">
    </div>
    <div class="item">
      <span class='fl type'>登录密码</span>
      <input class='fl ipt' type="password" v-model="password" placeholder="请输入登录密码">
    </div>
    <span class="btn" @click="register()">注册</span>
    <div class='to_login'><router-link class='to fr' :to="'/login'" exact>去登录&gt&gt</router-link></div>
  </div>
</template>

<script>
import $http from "@/common/http"
export default {
  name: 'register',
  data () {
    return {
      phoneNum:'',
      password:''
    }
  },
  methods:{
    register () {
      let that = this;
      let data = {
        userName:this.phoneNum,
        password:this.password
      }
      if(!data.userName || !data.password){
        that.hintPop.pop({
          content:"请填写完整信息"
        })
        return false;
      }
      $http({
        method: 'post',
        url: 'api/register',
        data
      }).then(res => {
        if(res.code !== 0){
          that.hintPop.hint(res.msg)
        }else{
          that.hintPop.hint('注册成功')
          localStorage.islogin = true;
          this.$router.push('/')
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
@import '../style/mixin.scss';
.item{
  height: 48px;
  background: #fff;
  border-top:1px solid #ccc;
  border-bottom:1px solid #ccc;
  margin-top:15px;
  line-height: 48px;
  padding:0 12px;
  font-size: 16px;
  .type{
    width: 2rem;
  }
  .ipt{
    height: 48px;
    font-size: 16px;
    padding-left: 15px;
    line-height: 48px;
  }
}
.to_login{
  padding-right:6%;
  .to{
    height: 38px;
    line-height: 38px;
    color:#999;
  }
}
</style>

<template>
  <div class="left-nav">
      <ul>
        <li>
            <router-link :to="{name: 'CashierLink'}">
                <i class="icon iconfont icon-wodezichan"></i>
                <div>收银</div>
            </router-link>
        </li> 
        <li>
            <router-link :to="{name: 'ShopLink'}">
                <i class="icon iconfont icon-dianpu"></i>
                <div>店铺</div>
            </router-link>
        </li>
        <li>
            <router-link :to="{name: 'PosLink'}">
                <i class="icon iconfont icon-hanbao"></i>
                <div>商品</div>
            </router-link>
        </li>
        <li>
            <router-link :to="{name: 'MemberLink'}">
                <i class="icon iconfont icon-huiyuanqia"></i>
                <div>会员</div>
            </router-link>
        </li>
        <li>
            <router-link :to="{name: 'StatisticsLink'}">
                <i class="icon iconfont icon-diamonds"></i>
                <div>统计</div>
            </router-link>
        </li>
        <li>
            <router-link :to="{name: 'SetupLink'}">
                <i class="icon iconfont icon-gongnengjianyi"></i>
                <div>设置</div>
            </router-link>
        </li>
      </ul>
  </div>
</template>
<script>
    export default {
      components: {

      }
    }
</script>
<style>
.left-nav {
    color: #ffffff;
    font-size: 10px;
    height: 100%;
    background-color: #1d8ce0;
    float: left;
    width: 5%;
}
.iconfont {
    font-size: 24px;
}
.left-nav ul {
    padding: 0px;
    margin: 0px;
}
.left-nav ul li {
    list-style: none;
    text-align: center;
    border-bottom: 1px solid #20a0ff;
    padding: 10px;
}
a {
    text-decoration: none;
    color: white;
}
</style>


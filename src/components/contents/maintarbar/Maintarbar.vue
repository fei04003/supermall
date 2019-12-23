<template>
  <tarbar>
    <tarbar-item path="/home">
      <!--dom 中使用路径需要用 ~ 来识别配置的别名-->
      <img slot="tabber-navPicNo" src="~assets/images/tarbar/home.svg" alt />
      <img slot="tabber-navPic" src="~assets/images/tarbar/home_active.svg" alt />
      <div slot="tarbar-txt">首页</div>
    </tarbar-item>
    <tarbar-item path="/category">
      <img slot="tabber-navPicNo" src="~assets/images/tarbar/category.svg" alt />
      <img slot="tabber-navPic" src="~assets/images/tarbar/category_active.svg" alt />
      <div slot="tarbar-txt">分类</div>
    </tarbar-item>
    <tarbar-item path="/cart">
      <img slot="tabber-navPicNo" src="~assets/images/tarbar/shopcart.svg" alt />
      <img slot="tabber-navPic" src="~assets/images/tarbar/shopcart_active.svg" alt />
      <div slot="tarbar-txt">购物车</div>
    </tarbar-item>
    <tarbar-item path="/me">
      <img slot="tabber-navPicNo" src="~assets/images/tarbar/profile.svg" alt />
      <img slot="tabber-navPic" src="~assets/images/tarbar/profile_active.svg" alt />
      <div slot="tarbar-txt">我的</div>
    </tarbar-item>
  </tarbar>
</template>
<script>
import Tarbar from "components/common/tarbar/Tarbar";
import TarbarItem from "components/common/tarbar/TarbarItem";
export default {
  name: "maintarbar",
  components: {
    Tarbar,
    TarbarItem
  }
};
</script>

<style scoped>
</style>
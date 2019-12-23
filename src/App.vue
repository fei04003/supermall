<template>
  <div id="app">
    <!--因有路由需要添加一个路由出口-->
    <router-view></router-view>
    <main-tarbar></main-tarbar>
    <!-- <div style="height:49px;width:100%;position:fixed;top:0;left:0;background:blue;"></div>
    <div style="height:49px;width:100%;position:fixed;bottom:0;left:0;background:blue;"></div>-->
  </div>
</template>

<script>
import MainTarbar from "components/contents/maintarbar/Maintarbar";
export default {
  name: "app",
  components: {
    MainTarbar
  }
};
</script>

<style>
@import url("assets/css/base.css");
</style>

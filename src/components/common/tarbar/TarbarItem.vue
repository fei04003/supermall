<template>
  <div class="tarbarBox-item" @click="itemClick">
    <slot v-if="!isActive" name="tabber-navPic"></slot>
    <slot v-else name="tabber-navPicNo"></slot>
    <!--此处直接给slot绑定：style效果不显示 因为 插槽直接替换了slot 所以外层包个div设置样式-->
    <div :style="styleIsActive" class="tarbar-txt">
      <slot name="tarbar-txt"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "tarbaritem",
  props: {
    path: {
      type: String
    },
    activeStyle: {
      //props中不单可以传递 父组件传过来的 也可以定义子组件自身的变量
      type: String,
      default: "coral"
    }
  },
  methods: {
    itemClick() {
      //点击跳转地址
      this.$router.replace(this.path);
    }
  },
  computed: {
    isActive() {
      //this.$route指的当前页面的路由
      //如果地址栏中的地址（this.$route.path）中含有父组件中传过来的path
      //证明是当前页面，返回true ，则显示
      return this.$route.path.indexOf(this.path) == -1;
    },
    styleIsActive() {
      //如果isActive为true 添加样式为空 否则添加 color为this.activeStyle

      return this.isActive ? {} : { color: this.activeStyle };
    }
  }
};
</script>
<style scoped>
@import url("~/assets/css/base.css");
.tarbarBox-item {
  flex: 1;
  height: 1rem;
  text-align: center;
}
.tarbarBox-item img {
  width: 0.5rem;
  height: 0.5rem;
  margin-top: 0.1rem;
  display: inline-block;
  vertical-align: top;
}
.tarbar-txt {
  font-size: 0.28rem;
  height: 0.3rem;
}
.actived {
  color: coral;
  font-weight: bolder;
}
</style>
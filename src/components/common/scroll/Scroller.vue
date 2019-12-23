<template>
  <div ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "scroller",
  data() {
    return {
      scroller: {
        type: Object,
        default() {
          return {};
        }
      }
    };
  },
  mounted() {
    /* probeType 为 3  实时监听页面滚动的位置(x,y)
     *this.scroller.on("scroll", postion =>{ console.log(postion); }
     *绑定scroller 的scroll滚动时间 获取option 滚动的x--y
     */
    this.scroller = new BScroll(this.$refs.wrapper, {
      probeType: 3
    });
    this.scroller.on("scroll", postion => {
      this.$emit("scroll", postion); //将postion传到父组件中
      // console.log(postion);
    });
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
</style>
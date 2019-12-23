<template>
  <div class="tab-controlBox">
    <div
      class="tab-control-list"
      v-for="(item,index) in titles"
      :key="index"
      @click="tabControl(index)"
    >
      <span :class="{active:index === currentIndex}">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: ["titles"],
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    tabControl(index) {
      this.currentIndex = index;
      //因为父组件home中需要确定点击的是哪个下标 所有用￥emit传给父组件 同时将index传出去
      this.$emit("pTabClick", index);
    }
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.tab-controlBox {
  width: 100%;
  height: 0.88rem;
  line-height: 0.88rem;
  display: flex;
  position: sticky; //此属性此 0.88以上是 sticky  以下变成fixed;必须配合top使用
  top: 0.88rem;
  font-size: 0.3rem;
  color: var(--font-color);
  background: #fff;
  z-index: 99;
  .tab-control-list {
    flex: 1;
    height: 0.88rem;
    text-align: center;
    span {
      padding: 0.15rem;
    }
  }
}
.active {
  border-bottom: 2px solid #ff8198;
  color: #ff8198;
}
</style>
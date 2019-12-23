<template>
  <div id="goodsList" class="goodListBox">
    <div class="goodslist" v-for="(item) in showgood" :key="item.iid">
      <goodlist-item :goodItem="item"></goodlist-item>
    </div>
  </div>
</template>
<script>
import GoodlistItem from "./GoodListItem";

export default {
  name: "GoodList",
  props: ["showgood"],
  components: { GoodlistItem }
};
</script>

<style lang="scss" scoped>
.goodListBox {
  width: 98%;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0 auto;
}
.goodslist {
  width: 46%;
  position: relative;
}
</style>
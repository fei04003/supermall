<template>
  <div class="goodItemBox" goodsid="goodItem.show.iid">
    <img :src="goodItem.show.img" />
    <div>
      <p>{{goodItem.title}}</p>
      <div class="goodsPriceLikes">
        <span class="price">{{goodItem.orgPrice}}</span>
        <span class="collect">{{goodItem.cfav}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodListItem",
  props: ["goodItem"],
  components: {}
};
</script>

<style lang="scss" scoped>
.goodItemBox {
  width: 100%;

  img {
    width: 100%;
    height: 4.5rem;
    display: block;
    border-radius: 6px;
  }
  p {
    width: 100%;
    font-size: 0.3rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: 0.05rem;
  }
  .goodsPriceLikes {
    font-size: 0.28rem;
    margin: 0.1rem 0 0.3rem;
    text-align: center;
    .price {
      color: var(--color-high-text);
      margin-right: 0.5rem;
    }
    .collect {
      position: relative;
    }
    .collect::before {
      content: "";
      position: absolute;
      left: -15px;
      top: -1px;
      width: 14px;
      height: 14px;
      background: url("~assets/images/common/collect.svg") 0 0/14px 14px;
    }
  }
}
</style>
<template>
  <div class="back-top">
    <img src="~assets/images/common/top.png" alt />
  </div>
</template>

<script>
export default {
  name: "BackTop"
};
</script>

<style lang="scss" scoped>
.back-top {
  position: fixed;
  bottom: 0.8rem;
  right: 0.2rem;
  z-index: 2222;
  img {
    width: 1rem;
  }
}
</style>
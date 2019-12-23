<template>
  <div class="navbar-box">
    <div class="left">
      <slot name="nav-left"></slot>
    </div>
    <div class="center">
      <slot name="nav-center"></slot>
    </div>
    <div class="right">
      <slot name="nav-right"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.navbar-box {
  height: 0.88rem;
  line-height: 0.88rem;
  display: flex;
  text-align: center;
  box-shadow: 0 0.01px 0.01px rgba(100, 100, 100, 0.1);
  font-size: 0.4rem;
  z-index: 1111;
  .left,
  .right {
    width: 1.2rem;
  }
  .center {
    flex: 1;
  }
}
</style>

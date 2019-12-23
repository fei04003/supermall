<template>
  <div>
    <div class="tabbarBox">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.tabbarBox {
  height: 49px;
  width: auto;
  border-top: 2px solid rgba(100, 100, 100, 0.1);
  background: #f6f6f6;
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
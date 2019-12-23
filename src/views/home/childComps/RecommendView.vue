<template>
  <div class="home-recommenview">
    <div class="home-recommend">
      <div class="home-recommend-item" v-for="item in crecommend" :key="item.backgournd">
        <a :href="item.background">
          <img :src="item.image" alt />
          <p>{{item.title}}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "recommendview",
  props: ["crecommend"]
};
</script>

<style lang="scss" scoped>
.home-recommend {
  width: 100%;
  display: flex;
  height: 2.6rem;
  padding: 0.16rem 0 0.24rem;
  font-size: 0.28rem;
  overflow: hidden;
  border-bottom: 0.16rem solid #f6f6f6;
  .home-recommend-item {
    flex: 1;
    height: 2rem;
    text-align: center;
    color: var(--font-color);
    img {
      height: 1.5rem;
      width: 1.5rem;
    }
    p {
      margin-top: 0.1rem;
    }
  }
}
</style>
<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="nav-center">购物车</div>
    </nav-bar>
    <scroller class="home-scroll" ref="scroller" :probe-type="3" @scroll="getPostion">
      <swiper>
        <swiper-item v-for="item in banner" :key="item.background">
          <a :href="item.background">
            <img :src="item.image" alt />
          </a>
        </swiper-item>
      </swiper>
      <recommend-view :crecommend="recommends"></recommend-view>
      <feature-view />
      <tab-control :titles="['流行','新歌','精选']" @pTabClick="getTabCon"></tab-control>
      <good-list :showgood="goodsInfo"></good-list>
    </scroller>
    <back-top v-show="isShow" @click.native="backTopClick"></back-top>
  </div>
</template>

<script>
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/HomeFeatureView";

import TabControl from "components/contents/tabControl/Tabcontrol";
import GoodList from "components/contents/good/GoodList";
import BackTop from "components/contents/backTop/BackTop";
import NavBar from "components/common/navbar/NavBar";
import Scroller from "components/common/scroll/Scroller";

import { getHomeMulidata, getHomeGoods } from "network/home";
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  name: "home",
  components: {
    NavBar,
    Swiper,
    SwiperItem,
    RecommendView,
    FeatureView,
    TabControl,
    GoodList,
    Scroller,
    BackTop
  },
  data() {
    return {
      banner: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      isShow: false
    };
  },
  computed: {
    goodsInfo() {
      return this.goods[this.currentType].list;
    }
  },
  created() {
    //1.请求多个数据
    this.homeMulidata();
    //2.请求商品列表
    this.homeGoods("pop");
    this.homeGoods("new");
    this.homeGoods("sell");
  },
  mounted() {},
  methods: {
    homeMulidata() {
      getHomeMulidata().then(res => {
        this.banner = res.data.banner.list;
        this.recommends = res.data.recommend.list;
        console.log(this.banner);
      });
    },
    homeGoods(type) {
      let page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        console.log(res.data.list);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page = page;
      });
    },
    getTabCon(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          console.log(this.currentType);
          break;
        case 1:
          this.currentType = "new";
          console.log(this.currentType);
          break;
        case 2:
          this.currentType = "sell";
          console.log(this.currentType);
          break;
      }
    },
    getPostion(postion) {
      this.isShow = -postion.y > 800;
      //postion.y为负值
    },
    backTopClick() {
      // 通过$refs拿到组件中的对象
      this.$refs.scroller.scrollTo(0, 0, 500);
    }
  }
};
</script>

<style lang="scss" scoped>
#home {
  position: relative;
  height: 100vh;
}
.home-nav {
  background: var(--color-tint);
  color: #fff;
  top: 0;
  left: 0;
  right: 0;
  z-index: 22;
}
.wrapper {
  width: 375px;
  overflow: hidden;
  height: 195px;
  position: relative;
  .content {
    height: 150px;
    width: 3000px;
    position: absolute;

    li {
      float: left;
      height: 195px;
      width: 375px;
      img {
        width: 375px;
      }
    }
  }
}
.home-scroll {
  width: 100%;
  left: 0;
  top: 0.88rem;
  bottom: 1rem;
  z-index: 88;
  overflow: hidden;
  position: absolute;
}
</style>

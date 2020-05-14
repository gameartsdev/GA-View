<template>
  <div class="home">
    <Throttle :time="500" events="mousewheel">
      <el-carousel
        height="100vh"
        direction="vertical"
        :autoplay="false"
        @mousewheel.native="mouseEvent"
        ref="box"
        @change="pageChange"
        v-touch:swipe="swipe"
      >
        <el-carousel-item>
          <div class="bg-0">
            <img :src="bg0[0]" alt="content" />
            <p>
              艺游生态，希望从游戏最本质的精神和体验出发，通过区块链技术，
              让游戏资产和游戏归属权属于游戏玩家，为游戏赋予更多元化的价值和意义
            </p>
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="bg-1">
            <img v-for="(item, i) in bg1" :key="i" :src="item" alt="content" />
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="bg-2">
            <img v-for="(item, i) in bg2" :key="i" :src="item" alt="content" />
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="bg-3">
            <img v-for="(item, i) in bg3" :key="i" :src="item" alt="content" />
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="bg-4">
            <img v-for="(item, i) in bg4" :key="i" :src="item" alt="content" />
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="bg-5">
            <img v-for="(item, i) in bg5" :key="i" :src="item" alt="content" />
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="bg-6">
            <compete-card />
            <compete-card />
            <compete-card />
          </div>
        </el-carousel-item>
      </el-carousel>
    </Throttle>
    <index-footer />
  </div>
</template>

<script>
import CompeteCard from '@/components/CompeteCard.vue';
import IndexFooter from '@/components/IndexFooter.vue';

export default {
  name: 'home',
  components: {
    CompeteCard,
    IndexFooter,
  },
  data() {
    return {
      bg0: [
        require('@/assets/activity/content_0.png'),
      ],
      bg1: [
        require('@/assets/home/content_1_0.png'),
        require('@/assets/home/content_1_1.png'),
        require('@/assets/home/content_1_2.png'),
        require('@/assets/home/content_1_3.png'),
      ],
      bg2: [
        require('@/assets/home/content_2_0.png'),
        require('@/assets/home/content_2_1.png'),
        require('@/assets/home/content_2_2.png'),
      ],
      bg3: [
        require('@/assets/home/content_3_0.png'),
        require('@/assets/home/content_3_1.png'),
        require('@/assets/home/content_3_2.png'),
      ],
      bg4: [
        require('@/assets/home/content_4_0.png'),
        require('@/assets/home/content_4_1.png'),
        require('@/assets/home/content_4_2.png'),
      ],
      bg5: [
        require('@/assets/home/content_5_0.png'),
        require('@/assets/home/content_5_1.png'),
        require('@/assets/home/content_5_2.png'),
      ],
      prev: null,
    };
  },
  methods: {
    mouseEvent(e) {
      if (e && e.deltaY && e.deltaY < 0) {
        this.$refs.box.prev();
      } else {
        this.$refs.box.next();
      }
    },
    pageChange(no) {
      if (no === 6) {
        window.scrollTo(0, document.body.scrollHeight);
      } else {
        window.scrollTo(0, 0);
      }
    },
    swipe(e) {
      if (e === 'top') {
        this.$refs.box.next();
      } else if (e === 'bottom') {
        this.$refs.box.prev();
      }
    },
  },
  mounted() {
  },
};
</script>

<style lang="scss" scoped>
@mixin verticalSlide() {
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

@mixin leftSlide() {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  padding-left: 20px;
}

.home {
  min-width: 100vw;
  overflow-x: hidden;
  overflow-y: hidden;
}
.bg {
  &-0,
  &-1,
  &-2,
  &-3,
  &-4,
  &-5,
  &-6 {
    @include verticalSlide();
    img {
      display: block;
      margin: 1rem;
      max-width: 90vw;
    }
  }
  &-0 {
    background: url('../assets/home/bg_0.png');
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    p {
      text-align: center;
      position: relative;
      top: 10vh;
      color: white;
      max-width: 50vw;
      font-size: 1.2rem;
      line-height: 2.2rem;
    }
  }
  &-1 {
    background: url('../assets/home/bg_1.png');
    @include leftSlide();
  }
  &-2 {
    background: url('../assets/home/bg_2.png');
    @include leftSlide();
  }
  &-3 {
    background: url('../assets/home/bg_3.png');
    @include leftSlide();
  }
  &-4 {
    background: url('../assets/home/bg_4.png');
    @include leftSlide();
  }
  &-5 {
    background: url('../assets/home/bg_5.png');
    @include leftSlide();
  }
  &-6 {
    background: url('../assets/home/bg_6.png');
    // @include leftSlide();
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
}
.el-carousel /deep/ .el-carousel__indicators {
  position: fixed !important;
}
</style>

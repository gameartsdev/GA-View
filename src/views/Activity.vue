<template>
    <div class="activity">
  <Throttle :time="500" events="mousewheel">
      <el-carousel
        height="100vh"
        direction="vertical"
        :autoplay="false"
        :initial-index="slideIndex"
        ref="box"
        v-touch:swipe="swipe"
        @mousewheel.native="mouseEvent"
      >
        <el-carousel-item>
          <div class="bg-0">
            <img :src="bg1[0]" alt="content" />
            <div class="jump-link">
              <span class="btn" @click="jumpSlide(1)">探索游戏</span>
              <span class="btn" @click="jumpSlide(2)">探索社区</span>
            </div>
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="bg-1">
            <div class="content">
              <img v-for="(path, index) in gameContent"
              :key="index" :src="path"
              alt="content" />
            </div>
            <card-slide />
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="bg-2">
            <div class="content">
              <img
                v-for="(path, index) in communityContetn"
                :key="index"
                :src="path"
                alt="content"
              />
            </div>
            <card-slide />
          </div>
        </el-carousel-item>
      </el-carousel>
  </Throttle>
    </div>
</template>

<script>
import CardSlide from '@/components/CardSlide.vue';

export default {
  name: 'activity',
  components: {
    CardSlide,
  },
  data() {
    return {
      bg1: [require('@/assets/activity/content_0.png')],
      slideIndex: 0,
      gameContent: [
        require('@/assets/activity/content_1_0.png'),
        require('@/assets/activity/content_1_1.png'),
      ],
      communityContetn: [
        require('@/assets/activity/content_2_0.png'),
        require('@/assets/activity/content_2_1.png'),
      ],
    };
  },
  methods: {
    jumpSlide(index) {
      this.$refs.actSlides.setActiveItem(index);
    },
    swipe(e) {
      if (e === 'top') {
        this.$refs.box.next();
      } else if (e === 'bottom') {
        this.$refs.box.prev();
      }
    },
    mouseEvent(e) {
      if (e && e.deltaY && e.deltaY < 0) {
        this.$refs.box.prev();
      } else {
        this.$refs.box.next();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@mixin verticalSlide() {
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.activity {
  min-width: 100vw;
}

.bg {
  &-0,
  &-1,
  &-2 {
    @include verticalSlide();
    img {
      display: block;
      margin: 1rem;
      max-width: 90vw;
    }
  }
  &-0 {
    background: url("../assets/activity/bg_0.png");
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  &-1 {
    display: flex;
    background: url("../assets/activity/bg_1.png");
  }
  &-2 {
    display: flex;
    background: url("../assets/activity/bg_2.png");
  }

  &-1,
  &-2 {
    flex-direction: column;
    justify-content: center;

    .content {
      margin-left: 5rem;
      margin-bottom: 2rem;
      max-width: 80vw;
      img {
        max-width: 100%;
        display: block;
      }
    }
  }
}

.btn {
  color: #fff;
  &:hover {
    cursor: pointer;
  }
  font-size: 1.6rem;
}

.jump-link {
  margin-top: 8rem;
  min-width: 100vw;
  display: flex;
  justify-content: space-evenly;
}
</style>

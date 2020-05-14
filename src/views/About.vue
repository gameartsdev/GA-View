<template>
  <div class="about" @mousewheel="toDown" v-touch:swipe="touchEvent">
    <el-carousel trigger="click" height="100vh">
      <el-carousel-item>
        <div class="bg-img-0">
          <img :src="slide1.title" alt="title" class="title" />
          <img :src="slide1.content" alt="content" class="content" />
        </div>
      </el-carousel-item>
      <el-carousel-item>
        <div class="bg-img-1">
          <img v-for="(content, i) in slide2" :key="i" :src="content" />
        </div>
      </el-carousel-item>
      <el-carousel-item>
        <div class="bg-img-2">
          <img v-for="(content, i) in slide3" :key="i" :src="content" />
        </div>
      </el-carousel-item>
      <el-carousel-item>
        <div class="bg-img-3">
          <img v-for="(content, i) in slide4" :key="i" :src="content" />
        </div>
      </el-carousel-item>
    </el-carousel>
    <timeline />
  </div>
</template>

<script>
import Timeline from '@/components/Timeline.vue';

export default {
  name: 'about',
  components: {
    Timeline,
  },
  data() {
    return {
      slide1: {
        // eslint-disable-next-line import/no-unresolved
        title: require('@/assets/about/title_0.png'),
        content: require('@/assets/about/content_0.png'),
      },
      slide2: [
        require('@/assets/about/content_1_2.png'),
        require('@/assets/about/title_1_0.png'),
        require('@/assets/about/content_1_1.png'),
        require('@/assets/about/content_1_0.png'),
      ],
      slide3: [
        require('@/assets/about/title_2_0.png'),
        require('@/assets/about/content_2_0.png'),
        require('@/assets/about/content_2_1.png'),
        require('@/assets/about/content_2_2.png'),
      ],
      slide4: [
        require('@/assets/about/title_3_0.png'),
        require('@/assets/about/content_3_0.png'),
        require('@/assets/about/content_3_1.png'),
        require('@/assets/about/content_3_2.png'),
      ],
    };
  },
  methods: {
    toDown(e) {
      // y 方向上的滚动大于0，页面滚动至底部
      // 反之，滚动到
      if (e.deltaY > 0) {
        window.scrollTo(0, document.body.scrollHeight);
      } else {
        window.scrollTo(0, 0);
      }
    },
    // 触控事件判断
    touchEvent(e) {
      if (e === 'top') {
        window.scrollTo(0, document.body.scrollHeight);
      } else if (e === 'bottom') {
        window.scrollTo(0, 0);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@mixin blockImg() {
  display: block;
  margin: 1rem;
  max-width: 90vw;
}

@mixin columnCenter() {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.about {
  min-width: 100vw;
}

.el-carousel {
transition: margin-right 4s;
}

.bg-img {
  &-0 {
    @include columnCenter();

    min-height: 100vh;
    background: url('../assets/about/bg_0.png');
    align-items: center;
    img {
      @include blockImg();
    }
  }
  &-1 {
    @include columnCenter();

    min-height: 100vh;
    background: url('../assets/about/bg_1.png');
    align-items: flex-start;

    img {
      @include blockImg();
    }
  }
  &-2 {
    @include columnCenter();

    min-height: 100vh;
    background: url('../assets/about/bg_2.png');
    align-items: flex-start;
    img {
      @include blockImg();
    }
  }
  &-3 {
    @include columnCenter();
    align-items: flex-start;

    min-height: 100vh;
    background: url('../assets/about/bg_3.png');
      img {
    margin-left: 30px;
    @include blockImg();
  }
  }

}
</style>

<style lang="scss">
</style>

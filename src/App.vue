<template>
  <div id="app">
    <navbar />
    <transition :name="transitionClass">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'app',
  components: {
    Navbar,
  },
  data() {
    return {
      transitionClass: '',
    };
  },
  watch: {
    $route(to, from) {
      // console.log(to.meta.index);
      if (to.meta.index > from.meta.index) {
        this.transitionClass = 'slide-left';
      } else {
        this.transitionClass = 'slide-right';
      }
    },
  },
};
</script>

<style>
#app {
  font-family: -apple-system,
  BlinkMacSystemFont, 'Segoe UI', Roboto,
  'Helvetica Neue', Helvetica, 'PingFang SC',
    'Hiragino Sans GB', 'Microsoft YaHei', SimSun, sans-serif;
}

.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 500ms;
  position: absolute;
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>

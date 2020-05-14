<template>
  <div class="navbar">
    <div class="logo">
      <router-link to="/">
        <img :src="imgSrc" alt="logo" />
      </router-link>
    </div>
    <el-menu
      :default-active="this.$route.path"
      mode="horizontal"
      text-color="#fff"
      active-text-color="#fff"
      :router="true"
    >
      <el-menu-item v-for="(item, i) in navList" :key="i" :index="item.path">
        {{item.title}}
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // eslint-disable-next-line global-require
      imgSrc: require('@/assets/logo.png'),

      navList: [
        { path: '/about', title: '关于艺游生态' },
        { path: '/introduction', title: '艺游介绍' },
        { path: '/activity', title: '艺游活动' },
      ],
    };
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  display: flex;
  justify-content: space-around;
  z-index: 999;
  min-width: 100%;
  top: 1rem;

  .logo {
    max-width: 10rem;
    display: flex;
    align-items: center;
    img {
      width: 100%;
    }
  }

  @media (max-width: 700px) {
    flex-direction: column;
    // flex-wrap: nowrap;

    .el-menu /deep/ * {
      display: flex;
      font-size: 1rem;
    }
  }
}
</style>
<style lang="scss">
.el-menu {
  background: rgba(255, 255, 255, 0) !important;
}
.el-menu-item:not(.is-disabled):focus {
  background-color: rgba(255, 255, 255, 0) !important;
  font-weight: bold !important;
}
.el-menu-item:not(.is-disabled):hover {
  background-color: rgba(255, 255, 255, 0) !important;
}

.el-menu.el-menu--horizontal {
  border: none !important;
  & > .el-menu-item.is-active {
    border-bottom: none !important;
  }
}

.el-menu-item {
  transition: none !important;
  font-size: 1.2rem !important;
}
</style>

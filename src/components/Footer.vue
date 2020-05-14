<template>
  <footer class="footer" :class="isFixed?'fixed': ''">
    <div class="left">
      <div class="left-1">
        <p>关注我们</p>
        <a href>Facebook</a>
        <a href>Twitter</a>
        <a href>Telegram</a>
        <a href>Weibo</a>
      </div>
      <div class="left-2">
        <p>联系我们</p>
        <a href>社区服务</a>
        <a href>合作洽谈</a>
      </div>
    </div>
    <div class="right">
      <img :src="footLogo" alt="logo">
    </div>
  </footer>
</template>

<script>
export default {
  name: 'my-footer',
  props: {
    isFixed: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  data() {
    return {
      // eslint-disable-next-line import/no-unresolved
      footLogo: require('@/assets/footer_logo.png'),
    };
  },
};
</script>

<style lang="scss" scoped>
footer {
  min-height: 30vh;
  background: #242772;
  width: 100%;
  justify-content: space-around;
  display: flex;
  // position: fixed;
  // bottom: 0;

  p {
    color: #fff;
    font-weight: bold;
  }

  a {
    color: #fff;
    text-decoration: none;
    display: block;
    margin: 10px 0;
  }

  .left {
    display: flex;
    // align-items: center;

    &-1 {
      margin-right: 20px;
    }

    &-1, &-2 {
      margin-top: 1.2rem;
    }
  }
  .right {
    display: flex;
    align-items: center;
    position: relative;
    bottom: 0;
    img {
      display: block;
    }
  }
}

.fixed {
  position: fixed;
  bottom: 0;
}

@media (max-width: 700px) {
  footer {
    display: flex;
    flex-direction: column;
  }
}
</style>

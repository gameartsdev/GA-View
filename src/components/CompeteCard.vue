<template>
  <div class="compete-card">
    <el-card :body-style="{ padding: '0px' }">
      <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
      <div style="padding: 14px;">
        <span>好吃的汉堡</span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'compete-card',
  data() {
    return {
      currentDate: Date.now(),
    };
  },
};
</script>

<style lang="scss" scoped>
.el-card {
  img {
    display: block;
    max-width: 100%;
  }
}
</style>

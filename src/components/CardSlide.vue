<template>
  <div class="card-slide">
    <el-carousel :interval="4000" type="card" height="424px">
      <el-carousel-item v-for="item in 4" :key="item">
        <!-- <h3 class="medium">{{ item }}</h3> -->
        <div class="img-wrapper">
        <img src="../assets/activity/game_0.png" alt />

        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'card-slide',
};
</script>

<style lang="scss" scoped>
.card-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100%;
}
.el-carousel {
  min-width: 80vw;
  /deep/ &__mask {
    max-width: 289px;
  }
}
.el-carousel__item img {
  display: block;
  color: #475669;
  margin: 0;
  max-width: 100%;
}
</style>

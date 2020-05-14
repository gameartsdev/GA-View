<template>
  <div class="container">
    <my-header />
    <div class="timeline">
      <h2>艺游大事件</h2>
      <el-timeline :reverse="reverse">
        <el-timeline-item
          v-for="(activity, index) in activities"
          :key="index"
          color="white"
          :timestamp="activity.timestamp"
        >{{activity.content}}</el-timeline-item>
      </el-timeline>
    </div>
    <my-footer />
  </div>
</template>

<script>
import myHeader from '@/components/Header.vue';
import myFooter from '@/components/Footer.vue';

export default {
  components: {
    myHeader,
    myFooter,
  },
  data() {
    return {
      reverse: true,
      activities: [{
        content: '艺游链生态对接',
        timestamp: '2018-04-15',
      }, {
        content: '艺游链测试完成',
        timestamp: '2018-04-13',
      }, {
        content: '技术框架搭建，底层开发',
        timestamp: '2018-04-11',
      }],
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 100vh;

  .timeline {
    min-height: 50vh;
    background-color: #181940;
    color: white;
    padding: 10px 0;
    padding-left: 10rem;

    h2 {
      margin-bottom: 10px;
      margin-left: 10px;
    }

    .el-timeline {
      margin-left: 10px;

      /deep/ .el-timeline-item__content  {
        color: #fff;
      }
    }
  }
}
</style>
<style>
.el-timeline-item__content {
  /* color: white !important; */
}
</style>

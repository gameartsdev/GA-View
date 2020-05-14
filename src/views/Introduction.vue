<template>
  <div class="activity">
    <my-header />
    <article>
      <product title="自研产品" :actived="false" />
      <product title="合作产品" :actived="false" />
      <product title="平台产品" :actived="false" />
    </article>
    <my-footer />
  </div>
</template>

<script>
import myFooter from '@/components/Footer.vue';
import myHeader from '@/components/Header.vue';
import Product from '@/components/Product.vue';

export default {
  name: 'introduction',
  components: {
    myFooter,
    myHeader,
    Product,
  },
};
</script>

<style lang="scss" scoped>
.activity {
  min-width: 100vw;
  article {
    background: #181940;
    overflow: auto;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    p {
      margin-left: 2rem;
    }
  }
}
</style>

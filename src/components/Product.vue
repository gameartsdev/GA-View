<template>
  <div class="product">
    <p  @click="actived = !actived" :class="actived? 'is-active': ''">
      {{title}}
    </p>
  </div>
</template>

<script>
export default {
  name: 'product',
  props: {
    actived: {
      type: Boolean,
      default() {
        return false;
      },
    },
    title: {
      type: String,
      default() {
        return '自研产品';
      },
    },
  },
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>
p {
  margin-top: 1rem;
  display: block;
  margin-left: 2rem;
  color: #fff;
  font-weight: 500;
  border-left: 0.1rem solid rgba(255, 255, 255, 0);
  padding-left: 10px;
}

.is-active {
  border-left: 0.1rem solid rgba(255, 255, 255, 1);

}
</style>

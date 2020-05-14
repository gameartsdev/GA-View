<template>
  <div class="index-footer">
    <div class="index-footer-item" v-for="item in items" :key="item.title">
      <p class="index-footer-item-title">{{item.title}}</p>
      <ul>
        <li v-for="link in item.links" :key="link.name">
          <a :href="link.path">{{link.name}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index-footer',
  data() {
    return {
      items: [
        {
          title: '关注我们',
          links: [
            {
              path: '#',
              name: '微信',
            },
            {
              path: '#',
              name: '新浪微博',
            },
          ],
        },
        {
          title: '加入我们',
          links: [
            {
              path: '#',
              name: '社会招聘',
            },
            {
              path: '#',
              name: '校园招聘',
            },
            {
              path: '#',
              name: '国际招聘',
            },
          ],
        },
        {
          title: '联系我们',
          links: [
            {
              path: '#',
              name: '客户服务',
            },
            {
              path: '#',
              name: '合作洽谈',
            },
            {
              path: '#',
              name: '服务采购',
            },
          ],
        },
        {
          title: '法律信息',
          links: [
            {
              path: '#',
              name: '服务协议',
            },
            {
              path: '#',
              name: '隐私政策',
            },
            {
              path: '#',
              name: '知识产权',
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.index-footer {
  min-height: 20vh;
  background: #221f40;
  padding-top: 10px;
  display: flex;
  justify-content: space-evenly;

  &-item {
    display: flex;
    flex-direction: column;
    &-title {
      color: white;
      margin-bottom: 1rem;
    }

    ul {
      list-style-type: none;
      li {
        margin-bottom: 0.7rem;

        a {
          text-decoration: none;
          color: #aea7e5;
        }
      }
    }
  }
}
</style>

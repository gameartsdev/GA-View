import Vue from 'vue';
import {
  Button, Menu, MenuItem, Carousel, CarouselItem, Timeline, TimelineItem,
  Card,
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

export default function () {
  Vue.use(Button);
  Vue.use(Menu);
  Vue.use(MenuItem);
  Vue.use(Carousel);
  Vue.use(CarouselItem);
  Vue.use(Timeline);
  Vue.use(TimelineItem);
  Vue.use(Card);
}

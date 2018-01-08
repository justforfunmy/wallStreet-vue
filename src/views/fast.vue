<template>
    <div>
        <top-menu :menu='menu' bg='white'></top-menu>
        <w-bottom :activeIndex='1'></w-bottom>
        <trend></trend>
    </div>
</template>

<script>
import wBottom from "../components/Bottom";
import topMenu from "../components/TopMenu";
import trend from '../components/trend'
export default {
  components: {
    wBottom,
    topMenu,
    trend
  },
  data() {
    return {
      menu: [
        {
          text: "日历"
        },
        {
          text: "宏观"
        },
        {
          text: "A股"
        },
        {
          text: "外汇"
        },
        {
          text: "美股"
        },
        {
          text: "商品"
        },
        {
          text: "黄金"
        },
        {
          text: "原油"
        }
      ]
    };
  }
};
</script>


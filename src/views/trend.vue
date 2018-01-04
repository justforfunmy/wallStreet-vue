<template>
    <div>
        <top-menu :menu='menu' bg='white'></top-menu>
        <w-bottom :activeIndex='3'></w-bottom>
    </div>
</template>

<script>
import wBottom from "../components/Bottom";
import topMenu from "../components/TopMenu";
export default {
  components: {
    wBottom,
    topMenu
  },
  data() {
    return {
      menu: [
        {
          text: "自选"
        },
        {
          text: "外汇"
        },
        {
          text: "商品"
        },
        {
          text: "股指"
        },
        {
          text: "沪深"
        },
        {
          text: "债券"
        },
        {
          text: "股指期货"
        },
        {
          text: "数字货币"
        },
        {
          text: "ETF"
        }
      ]
    };
  }
};
</script>


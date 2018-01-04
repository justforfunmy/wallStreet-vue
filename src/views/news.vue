<template>
  <div>
      <top-menu bg='black' :menu='menu'></top-menu>
      <banner :bannerList='bannerList'></banner>
      <w-bottom :activeIndex='0'></w-bottom>
  </div>
</template>

<script>
import topMenu from "../components/TopMenu";
import wBottom from "../components/Bottom";
import banner from '../components/Banner'
export default {
  components: {
    topMenu,
    wBottom,
    banner
  },
  data() {
    return {
      menu: [
        {
          text: "全球"
        },
        {
          text: "付费"
        },
        {
          text: "免费"
        },
        {
          text: "关注"
        },
        {
          text: "专题"
        },
        {
          text: "视频"
        },
        {
          text: "科技"
        },
        {
          text: "最热"
        },
        {
          text: "股票"
        },
        {
          text: "债券"
        },
        {
          text: "商品"
        },
        {
          text: "外汇"
        },
        {
          text: "经济"
        },
        {
          text: "公司"
        },
        {
          text: "中国"
        },
        {
          text: "美国"
        },
        {
          text: "日本"
        }
      ],
      bannerList:[{
        img:'/static/images/banner-1.jpg'
      },{
        img:'/static/images/banner-2.jpg'
      },{
        img:'/static/images/banner-3.jpg'
      },{
        img:'/static/images/banner-4.jpg'
      }]
    };
  }
};
</script>


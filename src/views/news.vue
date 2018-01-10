<template>
  <div>
      <top-menu :bg='bg' :menu='menu' @changeRotated='handleChange' :isRotated='isShowed'></top-menu>
      <router-view></router-view>
      <transition name="fade">
          <add-channel v-show="isShowed" :menu='menu' @changeMenu='changeMenu'></add-channel>
      </transition>
      <w-bottom :activeIndex='0'></w-bottom>
  </div>
</template>

<script>
import topMenu from "../components/TopMenu";
import wBottom from "../components/Bottom";
import addChannel from '../components/addChannel'
import Bus from '../eventBus'
export default {
  components: {
    topMenu,
    wBottom,
    addChannel
  },
  data() {
    return {
      menu: [
        {
          text: "全球",
          name:'global'
        },
        {
          text: "付费",
          name:'paid'
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
      bg:'black',
      isShowed:false
    };
  },
  mounted(){
  },
  methods:{
    handleChange(data){
      this.isShowed = data;
    },
    changeMenu(val){
      this.menu = val;
      this.handleChange(false);
      Bus.$emit('rotatedChanged',false)
    }
  }
};
</script>

<style>
</style>



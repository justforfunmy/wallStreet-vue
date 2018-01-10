<template>
    <div>
        <top-menu :menu='menu' bg='white' @changeRotated='handleChange' :isRotated='isShowed'></top-menu>
        <w-bottom :activeIndex='1'></w-bottom>
        <div class="content">
          <calendar></calendar>
        </div>
        <transition name="fade">
          <add-channel v-show="isShowed" :menu='menu' @changeMenu='changeMenu'></add-channel>
        </transition>
    </div>
</template>

<script>
import wBottom from "../components/Bottom";
import topMenu from "../components/TopMenu";
import calendar from '../components/calendar'
import addChannel from '../components/addChannel'
import Bus from '../eventBus'
export default {
  components: {
    wBottom,
    topMenu,
    calendar,
    addChannel
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
      ],
      isShowed:false
    };
  },
  methods:{
    handleChange(val){
      this.isShowed = val;
    },
    changeMenu(val){
      this.menu = val;
      this.handleChange(false);
      Bus.$emit('rotatedChanged',false)
    }
  }
};
</script>


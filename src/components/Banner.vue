<template>
  <mt-swipe :auto="4000" class="swipe">
    <mt-swipe-item v-for="(item,index) in bannerList" class="all-center" :key="index">
        <div :style="{background:'url('+item.img+')'}" class="banner-img"></div>
    </mt-swipe-item>
  </mt-swipe>
</template>

<script>
export default {
  props:['bannerList']
}
</script>

<style lang="scss" scoped>
.swipe{
    width: 100%;
    height: 180px;
}
.banner-img{
    height: 100%;
    background-size: 100% !important;
    background-position: center center !important;
}
</style>





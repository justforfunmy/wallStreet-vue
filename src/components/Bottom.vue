<template>
  <div class="all-center bottom-bar">
      <div v-for="(item,index) in menu" :key="index" class="fg item" @click="goRouter(item.path)">
          <img :src="activeIndex === index ?item.acticveImg:item.img" alt="" class="icon">
          <div :class="{active:activeIndex === index}">{{item.text}}</div>
      </div>
  </div>
</template>

<script>
export default {
  data(){
      return {
          menu:[{
              text:'见闻',
              path:'news',
              img:'/static/images/news.png',
              acticveImg:'/static/images/news-1.png'
          },{
              text:'快讯',
              path:'fast',
              img:'/static/images/fast.png',
              acticveImg:'/static/images/fast-1.png'
          },{
              text:'精选',
              path:'selected',
              img:'/static/images/selected.png',
              acticveImg:'/static/images/selected-1.png'
          },{
              text:'行情',
              path:'trend',
              img:'/static/images/trend.png',
              acticveImg:'/static/images/trend-1.png'
          },{
              text:'我的',
              path:'me',
              img:'/static/images/me.png',
              acticveImg:'/static/images/me-1.png'
          }]
      }
  },
  props:['activeIndex'],
  methods:{
      goRouter(name){
          this.$router.push({name})
      }
  }
}
</script>

<style lang='scss' scoped>
.bottom-bar{
    width: 100%;
    height: 40px;
    position: fixed;
    bottom: 0;
    left: 0;
    border-top: 1px solid #dbdbdb;
    padding:5px 0;
}
.icon{
    width: 20px;
}
.item{
    text-align: center;
    font-size: 12px;
    color:#dbdbdb;
    letter-spacing: 3px;
}
.active{
    color:#1296db;
}
</style>



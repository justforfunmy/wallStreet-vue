<template>
  <div>
      <top-menu :bg='bg' :menu='menu' @changeRotated='handleChange'></top-menu>
      <news-list>
        <div slot="banner">
          <banner :bannerList='bannerList'></banner>
        </div>
      </news-list>
      <trend :trendData='trendData'></trend>
      <transition name="fade">
          <add-channel v-show="isShowed" :menu='menu'></add-channel>
      </transition>
      <w-bottom :activeIndex='0'></w-bottom>
  </div>
</template>

<script>
import topMenu from "../components/TopMenu";
import wBottom from "../components/Bottom";
import banner from '../components/Banner'
import newsList from '../components/List'
import trend from '../components/trend'
import addChannel from '../components/addChannel'
export default {
  components: {
    topMenu,
    wBottom,
    banner,
    newsList,
    trend,
    addChannel
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
      }],
      bg:'black',
      trendData:[],
      isShowed:false
    };
  },
  mounted(){
    this.getTrendData();
    console.log(this.trendData)
  },
  methods:{
    getTrendData(){
      let self = this;
      this.$http.get('http://localhost:3000/wsTrendNumber').then(res=>{
        console.log(res.data.data)
        self.trendData = res.data.data;
      }).catch(err=>{
        console.log(err)
      })
    },
    handleChange(data){
      this.isShowed = data;
    }
  }
};
</script>

<style>
</style>



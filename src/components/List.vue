<template>
<div class="page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
    <mt-loadmore 
    :top-method='loadTop' 
    :bottom-method='loadBottom'
    @top-status-change='handleTopChange'
    ref="loadmore"
    :bottom-all-loaded="allLoaded"
    @translate-change="translateChange"
    @bottom-status-change="handleBottomChange">
    <slot name='banner'></slot>
    <ul class="news-list">
        <li v-for="(item,index) in list" :key="index" class="all-center news-item">
            <div class="fg news-content">
                <span class="title">{{item.title}}</span>
                <div class="notes">
                    {{item.display_time}}  |  {{item.author.display_name}}
                </div>
            </div>
            <div :style="{background:'url('+item.image_uri+')'}" class="news-img"></div>
        </li>
    </ul>
    <div slot="top" class="mint-loadmore-top">
        <span v-show="topStatus !== 'loading'" :class="{ 'is-rotate': topStatus === 'drop' }">↓</span>
        <span v-show="topStatus === 'loading'">
        <mt-spinner type="snake"></mt-spinner>
        </span>
    </div> 
    <div slot="bottom" class="mint-loadmore-bottom">
        <span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }">↑</span>
        <span v-show="bottomStatus === 'loading'">
        <mt-spinner type="snake"></mt-spinner>
        </span>
    </div>
    </mt-loadmore>
</div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      topStatus: "",
      bottomStatus: "",
      allLoaded: false,
      wrapperHeight: 0,
      translate: 0,
      moveTranslate: 0,
      list: [
        {
          author: {
            avatar: "https://dn-wscn-avatar.qbox.me/e9/39/83/weexlogo.png",
            display_name: "WEEX"
          },
          content_short:
            "三菱日联银行认为，美联储加快升息的阻力很大，料美元2018年将难以扭转去年的走弱趋势。德意志银行预言2018年欧元/美元将暴涨逾8%至1.30，并建议投资者买入欧元/美元。不过，丹斯克银行提醒投资者，欧元/美元在未来1-3个月内将会短暂下跌，除非未来几个月的核心通胀出现明显上升。",
          display_time: 1515117620,
          image_uri:
            "https://wpimg.wallstcn.com/3838fe0d-b8bd-4c0b-983a-9b5d0d694cbc.png",
          title: "每日机构观点汇总 | 2018年，美元料继续挣扎 欧元将暴涨8%！ "
        },
        {
          author: {
            avatar:
              "https://dn-wscn-avatar.qbox.me/86/36/41/b076508aeb971785d75c1d236bd1149b.jpg",
            display_name: "祁月"
          },
          content_short:
            "美国上千种药品提价近10%，远超2.2%的通胀率。辉瑞将伟哥等148种药品价格提高6%-13.5%不等。艾尔建将治疗老年痴呆症的关键药全线上调9.5%。Hikma公司吗啡价格狂涨75%-90%。",
          display_time: 1515116205,
          image_uri:
            "https://wpimg.wallstcn.com/4490aa9c-adb7-4b94-b01b-4af6d74b0424.jpg",
          title: "涨价近10%！新年第一周，美国上千种药品掀起新一轮提价潮 "
        },
        {
          author: {
            avatar: "https://dn-wscn-avatar.qbox.me/e9/39/83/weexlogo.png",
            display_name: "WEEX"
          },
          content_short:
            "三菱日联银行认为，美联储加快升息的阻力很大，料美元2018年将难以扭转去年的走弱趋势。德意志银行预言2018年欧元/美元将暴涨逾8%至1.30，并建议投资者买入欧元/美元。不过，丹斯克银行提醒投资者，欧元/美元在未来1-3个月内将会短暂下跌，除非未来几个月的核心通胀出现明显上升。",
          display_time: 1515117620,
          image_uri:
            "https://wpimg.wallstcn.com/3838fe0d-b8bd-4c0b-983a-9b5d0d694cbc.png",
          title: "每日机构观点汇总 | 2018年，美元料继续挣扎 欧元将暴涨8%！ "
        },
        {
          author: {
            avatar:
              "https://dn-wscn-avatar.qbox.me/86/36/41/b076508aeb971785d75c1d236bd1149b.jpg",
            display_name: "祁月"
          },
          content_short:
            "美国上千种药品提价近10%，远超2.2%的通胀率。辉瑞将伟哥等148种药品价格提高6%-13.5%不等。艾尔建将治疗老年痴呆症的关键药全线上调9.5%。Hikma公司吗啡价格狂涨75%-90%。",
          display_time: 1515116205,
          image_uri:
            "https://wpimg.wallstcn.com/4490aa9c-adb7-4b94-b01b-4af6d74b0424.jpg",
          title: "涨价近10%！新年第一周，美国上千种药品掀起新一轮提价潮 "
        },
        {
          author: {
            avatar: "https://dn-wscn-avatar.qbox.me/e9/39/83/weexlogo.png",
            display_name: "WEEX"
          },
          content_short:
            "三菱日联银行认为，美联储加快升息的阻力很大，料美元2018年将难以扭转去年的走弱趋势。德意志银行预言2018年欧元/美元将暴涨逾8%至1.30，并建议投资者买入欧元/美元。不过，丹斯克银行提醒投资者，欧元/美元在未来1-3个月内将会短暂下跌，除非未来几个月的核心通胀出现明显上升。",
          display_time: 1515117620,
          image_uri:
            "https://wpimg.wallstcn.com/3838fe0d-b8bd-4c0b-983a-9b5d0d694cbc.png",
          title: "每日机构观点汇总 | 2018年，美元料继续挣扎 欧元将暴涨8%！ "
        },
        {
          author: {
            avatar:
              "https://dn-wscn-avatar.qbox.me/86/36/41/b076508aeb971785d75c1d236bd1149b.jpg",
            display_name: "祁月"
          },
          content_short:
            "美国上千种药品提价近10%，远超2.2%的通胀率。辉瑞将伟哥等148种药品价格提高6%-13.5%不等。艾尔建将治疗老年痴呆症的关键药全线上调9.5%。Hikma公司吗啡价格狂涨75%-90%。",
          display_time: 1515116205,
          image_uri:
            "https://wpimg.wallstcn.com/4490aa9c-adb7-4b94-b01b-4af6d74b0424.jpg",
          title: "涨价近10%！新年第一周，美国上千种药品掀起新一轮提价潮 "
        }
      ]
    };
  },
  mounted() {
    this.wrapperHeight =
      document.documentElement.clientHeight -
      this.$refs.wrapper.getBoundingClientRect().top;
  },
  methods: {
    handleTopChange(status) {
      this.moveTranslate = 1;
      this.topStatus = status;
    },
    handleBottomChange(status) {
      this.bottomStatus = status;
    },
    translateChange(translate) {
      const translateNum = +translate;
      this.translate = translateNum.toFixed(2);
      this.moveTranslate = (1 + translateNum / 70).toFixed(2);
    },
    loadTop() {
      this.topStatus = "loading";
      const that = this;
      const loadmore = this.$refs.loadmore;
      axios
        .get("http://localhost:3000/list")
        .then(res => {
          that.topStatus = "";
          loadmore.onTopLoaded();
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    loadBottom() {
      this.bottomStatus = "loading";
      console.log(this.bottomStatus);
      const loadmore = this.$refs.loadmore;
      const list = this.list;
      setTimeout(() => {
        list.push(list[0]);
        this.bottomStatus = "";
        // this.allLoaded = true;
        loadmore.onBottomLoaded();
      }, 2000);
    }
  }
};
</script>

<style lang="scss" scoped>
.page-loadmore-wrapper {
  overflow: scroll;
}
.loading-background,
.mint-loadmore-top span {
  -webkit-transition: 0.2s linear;
  transition: 0.2s linear;
}
.mint-loadmore-top span {
  display: inline-block;
  vertical-align: middle;
}

.mint-loadmore-top span.is-rotate {
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
}

.page-loadmore .mint-spinner {
  display: inline-block;
  vertical-align: middle;
}
.mint-loadmore-bottom span {
  display: inline-block;
  -webkit-transition: 0.2s linear;
  transition: 0.2s linear;
  vertical-align: middle;
}

.mint-loadmore-bottom span.is-rotate {
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
}
.news-list {
  padding-bottom: 10px;
}
.news-item {
  padding: 3px 10px;
  height: 130px;
  border-bottom: 1px solid lightgrey;
}
.news-content {
  margin-right: 10px;
  .title {
    display: block;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    word-wrap: break-word;
    overflow-wrap: break-word;
    width: 100%;
    font-size: 15px;
    color: #333;
    line-height: 25px;
    overflow: hidden;
    cursor: pointer;
    font-weight: bold;
  }
  .notes {
    color: #666;
    font-size: 12px;
    padding-top: 15px;
  }
}
.news-img {
  width: 130px;
  height: 90px;
  background-size: cover !important;
  background-position: center center !important;
}
</style>



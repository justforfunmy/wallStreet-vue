<template>
  <div class="trend" :class="{moveUp:!show,moveDown:show}">
      <div class="top all-center" @click="handleShow">
          <div class="title fg">{{title}}</div>
          <img :src="show?upImg:downImg" alt="">
      </div>
      <div class="main">
          <mt-swipe :auto='0' @change="handleChange">
              <mt-swipe-item 
                v-for="(item,index) in trendData"
                :key="index">
                <div class="item">
                    <div class="shortContent">{{item.shortContent}}</div>
                    <div class="trendNumber all-center">
                        <div v-for="(subItem,idx) in item.trendDatas" :key="idx" class="subItem fg">
                            <div class="standard">{{subItem.standard}}</div>
                            <div class="all-center num">
                                <div class="number fg">{{subItem.number}}</div>
                                <div class="" :style="{color:subItem.trend==='up'?'red':'green'}">
                                    <span v-if="subItem.trend==='up'">+</span>
                                    <span v-if="subItem.trend==='down'">-</span>
                                    {{subItem.percent}}%
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              </mt-swipe-item>
          </mt-swipe>
      </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      show: true,
      upImg: "/static/images/up.png",
      downImg: "/static/images/down.png",
      title:'全球资产'
    };
  },
  mounted() {},
  methods: {
    handleShow() {
      this.show = !this.show;
    },
    handleChange(index){
        this.title = this.trendData[index].title
    }
  },
  props: ["trendData"]
};
</script>

<style lang="scss" scoped>
.trend {
  width: 100%;
  position: fixed;
  bottom: -90px;
  left: 0;
  transition: all 1s ease;
}
.top {
  width: 100px;
  height: 20px;
  background: #111;
  color: #fff;
  border-top-right-radius: 5px;
  .title {
    text-align: center;
    line-height: 20px;
    font-size: 12px;
    letter-spacing: 2px;
    -webkit-transform-origin-x: 0;
    -webkit-transform: scale(0.9);
  }
  img {
    max-height: 70%;
    margin-right: 10px;
  }
}
.main {
  width: 100%;
  height: 150px;
  background: #111;
  color: #fff;
}
.item {
  position: relative;
  height: 100%;
}
.shortContent {
  padding: 10px;
  padding-top: 20px;
  color: #fff;
  font-size: 13px;
  width: 100%;
}
.trendNumber {
  border-top: 1px solid #999;
  border-bottom: 1px solid #999;
  position: absolute;
  left: 0;
  bottom: 40px;
  width: 100%;
  .subItem {
    border-right: 1px solid #999;
    padding: 5px 10px;
    .standard {
      font-size: 12px;
    }
    .num {
      font-size: 12px;
      -webkit-transform-origin-x: 0;
      -webkit-transform: scale(0.8);
      margin-top: 5px;
      .number {
        color: gray;
      }
    }
  }
  .subItem:last-child {
    border-right: none;
  }
}

.moveUp {
  transform: translateY(-139px);
}
.moveDown {
  transform: translateY(0);
}
</style>


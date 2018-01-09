<template>
  <div class="channel">
      <div class="flex title">
          <p>已选频道</p>
          <span>请拖动排序</span>
      </div>
      <draggable v-model='channels' @start="drag=true" @end="drag=false" class="items">
          <div 
            v-for="(item,index) in channels"
            :key="index"
            class="all-center">
            <div>{{item.text}}</div>
            <img :src="delIcon" alt="" class="icon">
          </div>
      </draggable>
      <div class="flex title">
          <p>未选频道</p>
      </div>
      
      <div class="finishBtn" @click="finish">完成</div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  props:['menu'],
  computed:{
      channels:{
          get(){
              if(this.fakeChannels.length === 0){
                  return this.menu
              }
              return this.fakeChannels
              
          },
          set(value){
              this.fakeChannels = value;
          }
      }
  },
  data(){
      return{
          addIcon:'/static/images/addChannel.png',
          delIcon:'/static/images/delChannel.png',
          drag:false,
          fakeChannels:[]
      }
  },
  components:{
      draggable
  },
  methods:{
      finish(){
          this.$emit('changeMenu',this.channels)
      },
  },
  mounted(){
      
  }
}
</script>

<style lang="scss" scoped>
.channel{
    position: fixed;
    top:40px;
    left:0;
    bottom:0;
    right: 0;
    background: #fff;
    z-index: 1112;
    padding:15px;
}
.title{
    justify-content: space-between;
    align-items: center;
    letter-spacing: 1px;
    p{
        font-size: 16px;
    }
    span{
        font-size: 14px;
        color:#999;
    }
}
.items{
    padding:10px 0;
    display: flex;
    flex-wrap: wrap;
    &>div{
        width: 20%;
        margin: 2.5%;
        box-shadow:-1px 2px 4px #999;
        border-radius: 5px;
        font-size: 14px;
        padding:5px 0;
        .icon{
            width: 15px;
            margin-left: 5px;
        }
    }
}
.finishBtn{
    width: 100%;
    height: 40px;
    background: skyblue;
    color:#fff;
    font-size: 16px;
    line-height: 40px;
    text-align: center;
    position: absolute;
    left: 0;
    bottom: 0;
    letter-spacing: 5px;
}
</style>



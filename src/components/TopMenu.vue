<template>
    <div class="top-menu all-center" :style="{background:topBg ==='black'?blackBg:whiteBg}">
        <img :src="topBg!=='black'?blackSearchImg:whiteSearchImg" alt="" class="icon">
        <div class="list-wrapper fg" ref="wrapper">
            <ul class="list-content all-center" ref="content">
                <li 
                  v-for='(item,index) in menu' 
                  class='menu-item' 
                  :style="{color:topBg==='black'?'#fff':'#dbdbdb'}" 
                  @click="handleClick(index)"
                  :class="{active:index === activeIndex}">{{item.text}}</li>
            </ul>
        </div>
        <img 
          :src="topBg!=='black'?blackAddImg:whiteAddImg" 
          class="icon" 
          :class="{rotate:isRotated}"
          @click="handleAdd">
    </div>
</template>

<script>
import BScroll from 'better-scroll'
import Bus from '../eventBus'
export default {
  props:['menu','bg'],
  computed:{
      topBg:{
          get(){
              if(this.fakeBg === ''){
                  return this.bg
              }else{
                  return this.fakeBg
              }
          },
          set(val){
              this.fakeBg = val;
          }
      }
  },
  data(){
      return {
          whiteSearchImg:'/static/images/search-1.png',
          blackSearchImg:'/static/images/search.png',
          whiteAddImg:'/static/images/add-1.png',
          blackAddImg:'/static/images/add.png',
          blackBg:'rgba(0,0,0,0)',
          whiteBg:'#fff',
          activeIndex:0,
          isRotated:false,
          fakeBg:''
      }
  },
  mounted(){
      this.initScroll();
      const self = this;
      Bus.$on('rotatedChanged',(val)=>{
          self.isRotated = val;
      })
  },
  methods:{
      initScroll(){
          const children = this.$refs.content.children;
          const cLength = children.length;
          const wrapper = this.$refs.wrapper;
          let allWidth = 0;
          for(let item of children){
              let width = item.getBoundingClientRect().width;
              allWidth+=width;
          }
          this.$refs.content.style.width = allWidth + "px";
          this.$nextTick(()=>{
              this.scroll = new BScroll(wrapper,{
                    scrollX: true,
                    scrollY: false,
                    tap: true,
                    click:true,
                    probeType: 2
              })
          })
      },
      handleClick(index){
          this.activeIndex = index;
          const self = this;
          const name = self.menu[index].name;
          this.$router.push({name});
          if(name !== 'global'){
              this.topBg = 'white'
          }else{
              this.topBg = 'black'
          }
          
      },
      handleAdd(){
          this.isRotated = !this.isRotated;
          //向父组件传递值，是否添加
          this.$emit('changeRotated',this.isRotated)
      }
  }
}
</script>

<style lang="scss" scoped>
.top-menu{
    width: 100%;
    height: 40px;
    position: fixed;
    top:0;
    left:0;
    z-index: 1111;
}
.list-wrapper{
    overflow: hidden;
}
.menu-item{
    padding:0 10px;
    white-space: nowrap;
    font-size: 14px;
}
.icon{
    width: 25px;
    padding:0 10px;
    transition: all 1s;
}
.rotate{
    transform: rotateZ(45deg)
}
.active{
    color:#111 !important;
    font-weight: bold;
}
</style>



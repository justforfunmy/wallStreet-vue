<template>
  <div>
      <news-list>
        <div slot="banner">
          <banner :bannerList='bannerList'></banner>
        </div>
      </news-list>
      <trend :trendData='trendData'></trend>
  </div>
</template>

<script>
import banner from "../components/Banner";
import newsList from "../components/List";
import trend from "../components/trend";
export default {
  components: {
    banner,
    newsList,
    trend
  },
  data() {
    return {
      bannerList: [
        {
          img: "/static/images/banner-1.jpg"
        },
        {
          img: "/static/images/banner-2.jpg"
        },
        {
          img: "/static/images/banner-3.jpg"
        },
        {
          img: "/static/images/banner-4.jpg"
        }
      ],
      trendData: []
    };
  },
  mounted() {
    this.getTrendData();
  },
  methods: {
    getTrendData() {
      let self = this;
      this.$http
        .get("http://localhost:3000/wsTrendNumber")
        .then(res => {
          self.trendData = res.data.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style>

</style>



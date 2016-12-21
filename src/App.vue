<template>
  <div id="app">
    <vheader :seller="seller"></vheader>
    <div class="tab border-1px">
        <div class="tab-item">
          <router-link to="/goods">商品</router-link>
        </div>
        <div class="tab-item">
         <router-link to="/ratings">评论</router-link>
        </div>
        <div class="tab-item">
          <router-link to="/seller">商家</router-link>
        </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import vheader from 'components/header/header';
  // import axios from 'axios';
  const ERR_OK = 0;
  export default {
    data() {
      return {
        seller: {}
      }
    },
    created() {
      this.$http.get('/api/seller').then((response) => {
        if (response.body.errno == ERR_OK) {
            this.seller = response.body.data;
        }
      }, (response) => {
        console.log(response)
      });
    },
    components:{
      vheader
    }
  };
</script>

<style type="text/css">
  #app .tab{
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    /*border-bottom: 1px solid rgba(7,17,27,0.1);*/
    position: relative;
  }

  #app .tab .tab-item{
    flex:1;
    text-align: center;
  }
  .tab-item a{
    display: block;
    line-height: 40px;
    font-size: 14px;
    color: rgb(77,85,93);
  }
  .tab-item .router-link-active{
    color: rgb(240,20,20);
  }
</style>

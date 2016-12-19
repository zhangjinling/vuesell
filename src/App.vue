<template>
  <div id="app">
    <vheader></vheader>
    <div class="tab">
      <div class="tab-item">商品</div>
      <div class="tab-item">评论</div>
      <div class="tab-item">商家</div>
    </div>
  </div>
</template>

<script>
  import vheader from './components/header/header';
  export default {
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
}
#app .tab .tab-item{
  flex:1;
  text-align: center;
}
</style>

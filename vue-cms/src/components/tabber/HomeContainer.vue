<template>
    <div>
      <mt-swipe :auto="4000">
         <mt-swipe-item>
             <img src="../../lib/img/timg.jpg" alt="">
         </mt-swipe-item>
         <mt-swipe-item>
             <img src="../../lib/img/timg (2).jpg" alt="">
         </mt-swipe-item>
         <mt-swipe-item>
             <img src="../../lib/img/timg (1).jpg" alt="">
         </mt-swipe-item>
      </mt-swipe> 

          <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4">
        <router-link to="/home/newslist">
          <img src="../../lib/img/menu1.png" alt>
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4">
        <router-link to="/home/photolist">
          <img src="../../lib/img/menu2.png" alt>
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4">
        <router-link to="/home/goodslist">
          <img src="../../lib/img/menu3.png" alt>
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4">
        <a href="#">
          <img src="../../lib/img/menu4.png" alt>
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4">
        <a href="#">
          <img src="../../lib/img/menu5.png" alt>
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4">
        <a href="#">
          <img src="../../lib/img/menu6.png" alt>
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
    </div>
</template>

<script>

import {Toast} from "mint-ui"
export default {
    data(){
        return{
            lunbotuList: [

            ]
        }
    },
    created(){
        this.getLunbotu();
    },
    methods:{
        getLunbotu(){
            this.$http.get('http://www.liulongbin.top:3005/api/getlunbo').then(result => {
            if(result.body.status ===0) {
              this.lunbotuList = result.body.message;
            }else{
                Toast("加载轮播图失败//")
            }
            })
        }
    }
}
</script>

<style>
.mint-swipe{
    height: 200px;
}
.mint-swipe-item img{
    width: 100%;
    height: 100%;
}

.mui-grid-view.mui-grid-9{
  background-color: #fff;
  border: none;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: none;
}

.mui-grid-view.mui-grid-9 img{
    width: 60%;
    height: 60%;;
}
.mui-table-view-cell.mui-media.mui-col-xs-4 .mui-media-body{
    font-size: 13px;
}
</style>


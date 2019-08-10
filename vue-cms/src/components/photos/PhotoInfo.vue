<template>
    <div class="photoinfo-container">
        <h3>{{photoinfo.title}}</h3>
        <p class="subtitle">
            <span>发表时间:{{photoinfo.add_time|dataFormat}}</span>
            <span>点击:{{photoinfo.click}}次</span>
        </p>
        <hr>

        <div class="suoluetu">
            <vue-preview :slides="list" @close="getThumbs"></vue-preview>
        </div>

        <div class="content" v-html="photoinfo.content">

        </div>

        
        <comment :id="id"></comment>
    </div>
</template>

<script>

import comment from '../subcomponents/comment.vue'
export default {
    data(){
        return {
            id:this.$route.params.id,
            photoinfo:{},
            list:[]
        }
    },
    created(){
        this.getPhotoInfo();
        this.getThumbs();
        
    },
    methods:{
        getPhotoInfo(){
            
            this.$http.get('http://www.liulongbin.top:3005/api/getimageInfo/' + this.id).then(result=>{
                if(result.body.status ===0){
                    this.photoinfo = result.body.message[0]
                }
            })
        },
        getThumbs(){
            this.$http.get('http://www.liulongbin.top:3005/api/getthumimages/' + this.id).then(result=>{
                if(result.body.status === 0){
                    
                    result.body.message.forEach(item => {
                        item.msrc = item.src,
                        item.w = 600;
                        item.h = 400;
                    });
                    
                    this.list = result.body.message
                }
            })
        }
    },
    components:{
        comment
    }
}
</script>

<style lang="scss">
.photoinfo-container{
    padding: 3px;
    h3{
        color:#26A2FF;
        font-size: 15px;
        text-align: center;
        margin:15px 0;
    }
    .subtitle{
        display: flex;
        justify-content: space-between;
        font-size: 13px;
    }
    .content{
        font-size: 13px;
        line-height: 25px;
        text-indent: 25px;
    }
    .suoluetu{
        display: grid;
        
    //    border:1px solid red;
       
       img{
           width: 25%;
        // //    height:80px;
           margin-left: 20px;
           margin-bottom: 10px;
           float: left;
        margin: 10px;
        box-shadow: 0 0 8px #999;
          
       }
    }
}
</style>

<template>
    <div class="friend">
        <banner isHome="true" text="归 档"></banner>
        <div class="site-content">
            <!-- <div style="color: red; font-size: 15px; text-align: right; margin: 0 10px 10px 0;">
                <i class="el-icon-star-on"></i>Ctrl+D收藏导航, 方便下次使用
            </div> -->
            <el-row style="margin-top: 20px;">
                <el-col :span="24" class="left-col">
                    <div v-for="(item, i) in archives" :key="i">
                        <h2 class="year-title">{{item.year}}</h2>
                        <ul class="ul-box" v-for="(_item, _i) in item.list" :key="_i">
                            <li>
                                <a :href="`/web/article?id=${_item.id}`" target="_blank"><i>[{{_item.created_at_format}}]</i> {{_item.title}}</a>
                            </li>
                        </ul>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<style>

</style>
<script>
    import sectionTitle from '@/components/section-title'
    import Quote from "@/components/quote";
    import Banner from '@/components/banner'
    import {getArchive} from '../api/article'
    export default {
        name: "Archive",
        data(){
          return{
              archives: []
          }
        },
        components:{
            Quote,
            sectionTitle,
            Banner
        },
        methods: {
            getArchiveList() {
                let that = this;
                let archives_list;
                getArchive().then(res => {
                    that.archives = res.list;
                }).catch(err => {
                    console.log(err)
                })
            },
        },
        
        mounted() {
            // this.getWebSiteInfo();
            // this.fetchFriend();
            this.getArchiveList();
        },
        destroyed () {//离开该页面需要移除这个监听的事件
        },
    }
</script>

<style scoped lang="less">
    .friend{
        //padding-top: 80px;
    }
    .left-col{
        // text-align: center;
    }
    .friend-header{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        //margin-top: 80px;
        font-weight: 400;
        .title{
            font-size: 20px;
        }
        .apply:hover{
            color: #56ABE0;
        }
    }
    .statement{
        margin: 60px 0 20px 0;
        a{
            color: #56ABE0;
        }
        p{
            line-height: 2rem;
        }
    }
    hr{
        margin: 40px 0;
        border: 0;
        height: 1px;
        background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(255, 109, 109, 0.75), rgba(0, 0, 0, 0));
    }
    .friend-list{
        width: 100%;
        .friend-item{
            display: inline-block;
            width: 30%;
            /*height: 100px;*/
            margin: 0 5% 20px 0;
            padding: 10px 30px;
            border: 1px solid #ECECEC;
            border-radius: 3px;
            &:hover{
                box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
            }
            &:nth-of-type(3n){
                margin-right: 0;
            }
            .site-name,.site-detail{
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                padding-bottom: 10px;
                line-height: 1.5rem;
            }
            .site-name{
                color: #8fd0cc;
                border-bottom: 1px dotted #ECECEC;
            }
            .site-detail{
                font-size: 13px;
                padding-top: 10px;
            }
        }
    }
    .year-title{
        font-size: 30px;
        font-weight: 600;
        margin: 0 0 20px 0;
    }
    .ul-box{
        margin: 0 0 20px 40px;

        li {
            margin: 0 0 15px 0;
            -webkit-line-clamp: 1;
            overflow: hidden;
            height: 16px;
            line-height: 16px;
            font-size: 15px;
            text-overflow: ellipsis;
            i {
                font-weight: 500;
                color: #56ABE0;
            }
        }
    }
    /*******/
    @media (max-width: 1000px) {
        .friend-header{
            margin-top: 0;
        }
        .site-content{
            padding-top: 0;
        }
        .friend-list{
            .friend-item{
                width: 45%;
                &:nth-of-type(2n){
                    margin-right: 0;
                }
                &:nth-of-type(3n){
                    margin-right: 5%;
                }
            }
        }
    }
    @media (max-width: 800px){
        .friend-list{
            .friend-item{
                display: block;
                width: 90%;
                margin: 0 auto 20px auto;
                &:nth-of-type(2n){
                    margin-right: auto;
                }
                &:nth-of-type(3n){
                    margin-right: auto;
                }
            }
        }
    }
</style>

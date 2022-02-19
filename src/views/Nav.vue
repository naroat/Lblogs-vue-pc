<template>
    <div class="friend">
        <div class="site-content" style="margin-top:80px;">
            <div style="color: red; font-size: 15px; text-align: right; margin: 0 10px 10px 0;">
                <i class="el-icon-star-on"></i>Ctrl+D收藏导航, 方便下次使用
            </div>
            <el-row>
                <el-col :span="5" class="left-col">
                    <el-menu
                        id="searchBar"
                        default-active="1-0"
                        class="el-menu-vertical-demo fixed"
                        @open="handleOpen"
                        @close="handleClose"
                        @select="jump"
                        style="border-right:0;">
                        <!-- <el-menu-item index="2">
                            <i class="el-icon-edit"></i>
                            <span slot="title">自定义导航</span>
                        </el-menu-item> -->
                        <el-submenu index="1" :collapse="false">
                            <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>网址导航</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item :index="'1-' + i" v-for="(item,i) in navs" :key="i">{{item.title}}</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                    </el-menu>
                </el-col>
                <el-col :span="19" @scroll="onScroll" :offset="5">
                    <el-card class="box-card" v-for="item in navs" :key="item" ref="1-2">
                        <div slot="header" class="clearfix">
                            <span>{{item.title}}</span>
                            <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
                        </div>
                        <div class="box-bottom-con" v-for="nav_item in item.navs" :key="nav_item">
                            <a :href="nav_item.link" target="_blank">
                                <img :src="nav_item.logo" :alt="nav_item.desc">
                                <h3>{{nav_item.title}}</h3>
                                <p>{{nav_item.desc}}</p>
                            </a>
                        </div>
                    </el-card>
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
    import {getList} from '../api/nav'
    export default {
        name: "Nav",
        data(){
          return{
              navs: []
          }
        },
        components:{
            Quote,
            sectionTitle
        },
        methods: {
            getNavList() {
                let that = this;
                getList().then(res => {
                    this.navs = res.list;
                }).catch(err => {
                    console.log(err)
                })
            },
            handleScroll () { //改变元素#searchBar的top值
                var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                var offsetTop = document.querySelector('#searchBar').offsetTop;

                if(scrollTop<=170){
                    offsetTop = 180 - Number(scrollTop);
                    document.querySelector('#searchBar').style.top = offsetTop+'px';
                }else{
                    document.querySelector('#searchBar').style.top = '10px';
                }
            },
        },
        
        mounted() {
            // this.getWebSiteInfo();
            // this.fetchFriend();
            this.getNavList();
            window.addEventListener('scroll', this.handleScroll)
        },
        destroyed () {//离开该页面需要移除这个监听的事件
            window.removeEventListener('scroll', this.handleScroll)
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
    .box-card{
        width: 100%;
        margin-bottom: 30px;
    }
    .box-bottom-con{
        width:18.5%;
        display: inline-block;
        margin: 0 10px 20px 0;
        a {
            display: block;
            box-sizing: border-box;
            img {
                float: left; 
                width:26px; 
                height:26px; 
                border-radius:100%;
            }
            h3 {
                font-size:14px; 
                height:21px; 
                line-height:21px; 
                margin-bottom:4px; 
                margin-left:32px; 
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
                white-space: nowrap;
            }
            p {
                margin-left: 32px;
                font-size:12px;
                height:3em;
                line-height: 1.5em;
                display: -webkit-box;
                color: #8f8f8f;
                overflow: hidden;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }
        }
        
    }
    .fixed{
        position: fixed;
        bottom: 100px;
        top: 180px;/*开始处于距离顶部180px的位置，之后随着滚动条滚动top值改变，然后在top==100时停止*/
        left: 218px;
        box-sizing: border-box;
        z-index: 2;
    }
    /*******/
    @media (max-width: 800px) {
        .friend-header{
            margin-top: 0;
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
    @media (max-width: 600px){
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

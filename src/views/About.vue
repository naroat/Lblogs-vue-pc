<template>
    <div class="about">
        <banner isHome="true" text="关 于"></banner>
        <div class="site-content">
            <div class="content-warp">
                <div class="about-site about-info">
                    <section-title style="font-size: 24px;font-weight:600;">关于</section-title>
                    <!-- <div class="info-card"> -->
                    <div style="margin-top: 20px;">
                        <li class="content-li">作者：一线码农，后端开发，热爱编程；喜欢电影，乒乓球</li>
                        <li class="content-li">建站原因：闲的</li>
                        <li class="content-li">网站定位：技术分享，学习笔记 问题记录</li>
                    </div>
                </div>
                <div class="about-site about-info">
                    <section-title style="font-size: 24px;font-weight:600;">博客历史</section-title>
                    <!-- <div class="info-card"> -->
                    <div style="margin-top: 20px;">
                        <li class="content-li">2022.01.04 上线小程序和App版本</li>
                        <li class="content-li">2021.12.26 首页和网址导航页面改版</li>
                        <li class="content-li">2021.12.10 老博客文章迁移</li>
                        <li class="content-li">2021.11.30 优化前后端问题，提升访问速度， 添加网址导航功能</li>
                        <li class="content-li">2021.10.30 搭建博客</li>
                    </div>
                </div>
                <div class="about-site about-info">
                    <section-title style="font-size: 24px;font-weight:600;">版权声明</section-title>
                    <!-- <div class="info-card"> -->
                    <div style="margin-top: 20px;">
                        <li class="content-li">本站的原创博文转载请务必注明作者ranblogs以及原文出处链接</li>
                        <li class="content-li">另外，本站博文未经授权不得用于任何商业目的</li>
                    </div>
                </div>
                <div class="about-site about-info">
                    <section-title style="font-size: 24px;font-weight:600;">其他版本</section-title>
                    <!-- <div class="info-card"> -->
                    <div style="margin-top: 20px;">
                        <li class="content-li">小程序：微信中搜索`ranblogs`</li>
                        <li class="content-li">APP</li>
                        <img src="https://baseran2.oss-cn-shenzhen.aliyuncs.com/markdown/1642730844241.jpg" alt="" style="width: 200px; height:200px;margin-left: 25px;">
                    </div>
                </div>
                <!-- <div class="about-me about-info">
                    <section-title id="Guestbook">给我留言</section-title>
                    <div class="info-card">
                        <div class="contactForm">
                            <div class="form-item">
                                <label for="mail">邮箱</label>
                                <input class="v" type="email" name="mail" id="mail" v-model="feedback.email">
                            </div>
                            <div class="form-item">
                                <label for="content">内容</label>
                                <textarea class="v" id="content" name="content" v-model="feedback.content"></textarea>
                            </div>
                            <div class="form-item">
                                <label></label>
                                <button @click="submit()">提交</button>
                            </div>
                        </div>
                    </div>
                </div> -->
            </div>
        </div>
    </div>
</template>
<style>
.content-li{
    margin: 0 0 10px 0;
}
</style>
<script>
    import sectionTitle from '@/components/section-title'
    import {getTime,getTimeInterval} from '@/utils'
    import { el_message } from '@/utils/common'
    import Banner from '@/components/banner'
    import { addFeedback } from '@/api/feedback'
    // import Quote from "@/components/quote";
    // import {fetchFriend} from '../api'
    export default {
        name: "About",
        data() {
            return {
                list: [],
                feedback: {}
            }
        },
        components: {
            // Quote,
            sectionTitle,
            Banner
        },
        methods: {
            /**
             * 提交留言
             */
            submit() {
                this.$message({
                    showClose: true,
                    message: '留言系统开发中',
                    type: 'error'
                });
                return ;

                
                let that = this;
                let ajaxData = {};
                if (that.feedback.email == "") {
                    this.$message({
                        showClose: true,
                        message: '请填写邮箱地址！',
                        type: 'error'
                    });
                }

                if (that.feedback.content == "") {
                    this.$message({
                        showClose: true,
                        message: '请填写内容！',
                        type: 'error'
                    });
                }
                ajaxData = that.feedback;
                addFeedback(ajaxData).then(res => {

                }).catch(err => {
                    console.log(err)
                })
            },
        },
        mounted() {
        }
    }
</script>
<style scoped lang="less">
    .about {
        //padding-top: 40px;
    }

    .content-warp {
        //margin-top: 80px;

        .about-info {
            margin: 30px 0;

            span {
                color: red;
                margin-right: 10px;
            }

            .info-card {
                min-height: 100px;
                padding: 20px;
                border-radius: 3px;
                margin: 30px 0 50px 0;
                box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
                p{
                    line-height: 1.7rem;
                }
            }
        }
        .contactForm{
            width: 100%;
            padding: 20px;
            .form-item{
                align-items: center;
                display: flex;
                &:not(:last-child){
                    margin-bottom: 20px;
                }
                label{
                  width: 80px;
                }
                .v{
                    min-height: 40px;
                    line-height: 20px;
                    border-radius: 3px;
                    padding: 2px 10px;
                    outline:none;
                    border: 1px solid #8fd0cc;
                    width: 100%;
                    resize: vertical;
                }
                button{
                    width: 100px;
                    height: 40px;
                    border-radius: 3px;
                    outline:0;
                    border-style: none;
                    cursor: pointer;
                    background-color: #409eff;
                    color: white;
                    &:hover{
                        opacity: 0.8;
                    }
                }
            }
        }
    }

    /*******/
    @media (max-width: 1000px) {
        .content-warp {
            margin-top: 0;
        }
        .site-content{
            padding-top: 0;
        }
    }
    @media (max-width: 800px) {
        .content-warp {
            margin-top: 0;
        }
        .site-content{
            padding-top: 0;
        }
    }
</style>

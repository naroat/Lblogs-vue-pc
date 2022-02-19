import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/Home.vue'),
        meta: { title: '首页'}
    },
    {
        path: '/category/:cate',
        name: 'category',
        component: () => import('../views/Home.vue'),
        meta: { title: '分类', params: 'cate'}
    },
    {
        path: '/search/:words',
        name: 'search',
        component: () => import('../views/Home.vue'),
        meta: { title: '搜索', params: 'words'}
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/About.vue'),
        meta: { title: '关于'}
    },
    {
        path: '/friend',
        name: 'friend',
        component: () => import('../views/Friend.vue'),
        meta: { title: '友链'}
    },
    {
        path: '/nav',
        name: 'nav',
        component: () => import('../views/Nav.vue'),
        meta: { title: '网址导航'}
    },
    {
        path: '/article',
        name: 'article',
        component: () => import('../views/Articles.vue'),
        meta: { title: '文章'}
    },
    {
        path: '/archive',
        name: 'archive',
        component: () => import('../views/Archive.vue'),
        meta: { title: '归档'}
    }
]

const router = new VueRouter({
    mode: 'history',
    //base: process.env.BASE_URL,
    base: '/web/',  // 二级目录
    routes
})
router.beforeEach((to, from, next) => {
    let title = 'RanBlogs'
    if (to.meta.params){
        title = `${to.meta.title}:${to.params[to.meta.params] || ''} - ${title}`
    }else {
        title = `${to.meta.title} - ${title}`
    }
    document.title = title
    if (to.path !== from.path) {
        store.dispatch('setLoading', true);
    }
    next();
})
router.afterEach((to, from) => {
    // 最多延迟 关闭 loading
    setTimeout(() => {
        store.dispatch('setLoading', false);
    }, 1500)
})
export default router
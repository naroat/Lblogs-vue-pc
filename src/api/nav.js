import request from '@/utils/request'

//文章列表
export function getList(params) {
    return request({
        url: '/api/navs',
        method: 'get',
        params: params
    })
}

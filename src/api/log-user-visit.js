import request from '@/utils/request'

//文章列表
export function add(params) {
    return request({
        url: '/api/log/user/visits',
        method: 'post',
        data: params
    })
}

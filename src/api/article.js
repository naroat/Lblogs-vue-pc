import request from '@/utils/request'

//文章列表
export function getList(params) {
    return request({
        url: '/api/articles',
        method: 'get',
        params: params
    })
}

//文章详情
export function getOne(id) {
    return request({
        url: '/api/articles/' + id,
        method: 'get',
        params: {}
    })
}

//文章归档
export function getArchive(params) {
    return request({
        url: '/api/article/archives',
        method: 'get',
        params: params
    })
}
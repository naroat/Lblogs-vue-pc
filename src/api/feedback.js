import request from '@/utils/request'

//文章列表
export function addFeedback(data) {
    return request({
        url: '/api/feedbacks',
        method: 'post',
        data: {}
    })
}

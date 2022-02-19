const Mock = require('mockjs');
export default [
    // 站点信息
    {
        url: '/site',
        type: 'get',
        response: () => {
            return {
                code: 20000,
                data: {
                    avatar: '',
                    slogan: '逆水行舟，不进则退！',
                    name: 'RanBlogs',
                    domain: 'https://www.ranblogs.com',
                    notice: '',
                    desc: '...'
                }
            }
        }
    }
]
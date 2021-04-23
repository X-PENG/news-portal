import request from '@/utils/request'

/**
 * 首页的api
 */

export function cols() {
    return request({
        url: '/frontend/index/cols',
        method: 'get'
    })
}
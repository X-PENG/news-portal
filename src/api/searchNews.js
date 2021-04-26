import request from '@/utils/request'


/**
 * 搜索新闻相关api
 */

export function searchNewsList(queryParam) {
    return request({
        url: '/frontend/search/',
        method: 'get',
        params: queryParam
    })
}
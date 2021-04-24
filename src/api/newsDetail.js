import request from '@/utils/request'

/**
 * 新闻详情页面相关api
 */

export function getOneNews(newsId) {
    return request({
        url: `/frontend/newDetail/${newsId}`,
        method: 'get'
    })
}

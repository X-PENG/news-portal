import request from '@/utils/request'

/**
 * 新闻列表相关api
 */

export function newsListPageByColId(colId, queryParam) {
    return request({
        url: `/frontend/newsList/${colId}`,
        method: 'get',
        params: queryParam
    })
}
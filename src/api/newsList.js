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

/**
 * 查询子栏目列表
 * @param {*} colId 
 * @returns 
 */
export function subColList(colId) {
    return request({
        url: `/frontend/newsList/subColList/${colId}`,
        method: 'get'
    })    
}
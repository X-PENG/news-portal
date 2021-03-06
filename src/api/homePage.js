import request from '@/utils/request'

/**
 * 首页的api
 */

const prefix =  '/frontend/index'


/**
 * 查询所有一级新闻栏目
 * @returns
 */
export function cols() {
    return request({
        url: `${prefix}/cols`,
        method: 'get'
    })
}

/**
 * 查询头条
 */
export function getHeadlines() {
    return request({
        url: `${prefix}/headlines`,
        method: 'get'
    })
}

/**
 * 查询轮播新闻
 * @param amount 查询几个轮播新闻
 * @returns 
 */
export function getCarouselNews(amount) {
    return request({
        url: `${prefix}/carouselNews`,
        method: 'get',
        params: {
            amount
        }
    })
}
/**
 * 该模块为window.onresize事件服务，当窗口变化时，保存最新宽度
 */
const state = {
    //浏览器窗口宽度
    screenWidth: document.body.clientWidth
}


const mutations = {
    SET_SCREEN_WIDTH: (state, width) => {
        console.log('改变SCREEN_WIDTH state, newState='+width)
        state.screenWidth = width
    }
}

export default {
    namespaced: true,
    state,
    mutations
}

/**
 * 格式化yyyy-MM-dd HH:mm:ss 这样的字符串为 yyyy/MM/dd
 * @param timeStr 
 */
export function formatTime(timeStr) {
    let time = new Date(timeStr)
    let year = time.getFullYear()
    let month = time.getMonth() + 1 + ''
    if(month.length == 1) {
        month = '0'+month
    }
    let date = time.getDate() + ''
    if(date.length == 1) {
        date = '0'+date
    }

    return year+'/'+month+'/'+date
}
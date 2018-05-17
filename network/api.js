import config from './config'

export default function(option,mockJson){
    if (!config.debug) {
        wx.request({
            url: config.host + option.url,
            method: option.method ? option.method : 'GET',
            data: option.data,
            header: option.header ? option.header : { "Content-Type": "application/json" },
            success: function (res) {
                option.fn(res);
            }
        });
    } else {
        // 模拟数据
        var res = config.mock.mock(mockJson)
        // 输出结果
        // console.log(JSON.stringify(res, null, 2))
        option.fn(res);
    }
}
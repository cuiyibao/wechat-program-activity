import api from '../api'
export const API_GET_SWIPER = ''

//预约中的活动列表
export function getOrderList(data = {}, fn, method = "GET", header = '') {
    let option = {}
    option.url = API_GET_SWIPER
    option.data = data
    option.fn = fn
    option.method = method
    option.header = header
    api(option, {
        'error_code': '',
        'error_msg': '',
        'data|10': [{
            'id|+1': 1,
            'title': '@ctitle(3,8)',
            'type': '@integer(0,100)',
            'status|1': [{
                'type': 'default', 
                'text': '人已满'
            },{
                'type': 'primary',
                'text': '预约'
            },{
                'type': 'warn',
                'text': '放鸽子'
            }],
            'order': '@cname()',
            'startTime': '@date("yyyy-MM-dd")',
            'endTime': '@date("yyyy-MM-dd")'
        }]
    })
}

//已结束的活动列表
export function getEndList(data = {}, fn, method = "GET", header = '') {
    let option = {}
    option.url = API_GET_SWIPER
    option.data = data
    option.fn = fn
    option.method = method
    option.header = header
    api(option, {
        'error_code': '',
        'error_msg': '',
        'data|10': [{
            'id|+1': 1,
            'title': '@ctitle(3,8)',
            'type': '@integer(0,100)',
            'status|1': ['活动结束',
                '人未齐',
                '其他原因',
            ],
            'order': '@cname()',
            'startTime': '@date("yyyy-MM-dd")',
            'endTime': '@date("yyyy-MM-dd")'
        }]
    })
}

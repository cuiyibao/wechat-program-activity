//index.js
import { getOrderList,getEndList } from '../../network/index/index'
//获取应用实例
const app = getApp()

Page({
    data: {
        navTopItems:[{
            id: 1,
            text: '预约中'
        },{
            id: 2,
            text: '已关闭'
        }],
        curNav: 1,

    },
    onLoad: function () {
        console.log('onLoad')
        var that = this
        // 使用 Mock
        getOrderList('', function (res) {
            //这里既可以获取模拟的res
            console.log(res)
            that.setData({
                orderList: res.data
            })
        });

        getEndList('', function (res) {
            //这里既可以获取模拟的res
            console.log(res)
            that.setData({
                endList: res.data
            })
        });
        console.log(this.data.list)
    },

    //事件处理函数
    switchBottomTab: function(e) {
        let id = e.target.dataset.id;
		this.setData({
			curNav: id,
		})
    },
    navDetail: function(e) {
        console.log(e.target)
    }
})

var app = getApp()
Page( {
  data: {
    userInfo: {},
  },

  onLoad: function() {
    
  },

  //事件处理函数
  formSubmit: function(e) {
    console.log(e.detail)
    wx.showModal({  
      title: '提示',  
      content: '这是一个模态弹窗',  
      success: function(res) {  
        if (res.confirm) {  
          console.log('用户点击确定')  
        } else if (res.cancel) {  
          console.log('用户点击取消')  
        }  
      }
    })  
  },
  formReset: function() {
    console.log('form发生了reset事件')
  }
})
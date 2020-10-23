// pages/test/test.js
Page({

  data: {
    message: '我是第一条信息',
    number: 1,
    condition: true,
    array: [{
      message: 'foo',
    }, {
      message: 'bar'
    }],
    str: '我是一条信息',
    arr: [1, 2, 3, 4],
    obj: {
      id: 1,
      text: "我是信息1"
    },
    xx:true
  },
  changeColor(){
  this.setData({xx:!this.data.xx})
  },
  pushItem() {
    let last = this.data.arr[this.data.arr.length - 1] + 1
    let newArr = [last]
    this.data.arr = this.data.arr.concat(newArr)
    this.setData({
      arr: this.data.arr
    })
  },
  changeObjText(){
    this.setData({"obj.text":"我的信息2"})
  },

  reverseStr() {
    this.setData({
      str: this.data.str.split('').reverse().join('')
    })
  },

  onLoad: function (options) {

  },

  onReady: function () {

  },

  onShow: function () {},

  onHide: function () {

  },

  onUnload: function () {

  },

  onPullDownRefresh: function () {

  },


  onReachBottom: function () {

  },

  onShareAppMessage: function () {

  }
})
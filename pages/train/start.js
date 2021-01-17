// pages/train/start.js

const exerDoc = require('../../static/exer.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    exer:'',
    list:[],
    n: 0,
    sec: 0,
    order: 0,
    start: '',
    process: '',
    note: '',
    muscle: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var list = []
    for (let i = 0; i < exerDoc.length; i++) {
      list.push(exerDoc[i].title)
    }
    var index = list.indexOf(options.exer)
    var subs = exerDoc[index].time.split('：')[1].split(' ')[0]
    this.setData({
      exer: options.exer,
      list: list,
      n: exerDoc[index].set.split('：')[1],
      sec: subs.substring(0, subs.length-1),
      order: index + 1,
      start: exerDoc[index].start,
      muscle: exerDoc[index].muscle,
      note: exerDoc[index].note,
      process: exerDoc[index].process,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  }
})
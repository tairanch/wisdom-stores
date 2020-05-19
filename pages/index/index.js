//index.js
//获取应用实例
const app = getApp()
const _data = require("../../utils/data")

Page({
  data: {
    flowdata: {},
    photolist: {},
    progressdata: [],
    shopdata: ['¥2344', '¥2344', '60%'],
    shopdata_title: ['本月', '完成', '完成率']

  },
  onLoad: function () {
    let _flowdata = {
      yestoday_flow: "123",
      yestoday_sell: "566.12",
      today_flow: "13",
      today_sell: "14566.12"
    }
    console.log(_data.photodata())
    this.setData({
      flowdata: _flowdata,
      photolist: _data.photodata(), //模拟数据
      progressdata: _data.progressdata(),//模拟列表数据
    })

    this.getLocation()
  },
  goMore: function (e) {
    const type = e.currentTarget.dataset.type
    switch (type) {
      case "monthmore":
        console.log("aaaaaa")
        break;

      default:
        break;
    }
  },
  getLocation: function () {
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success (res) {
        const latitude = res.latitude
        const longitude = res.longitude
        console.log(latitude);

      }
    })
  },
})

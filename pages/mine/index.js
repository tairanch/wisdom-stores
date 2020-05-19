//index.js
//获取应用实例
const app = getApp()
const _data = require("../../utils/data")

Page({
  data: {
    shopdata: ['34', '3345.5', '56.34', '12'],
    shopdata_title: ['上月佣金(元)', '本月佣金(元)', '今日佣金(元)', '我的会员'],
    defimg: "./../../image/home/photo.png",

    photolist: {},
    currentData: 0,
    tablist: ['会员', '熟客', '新客'],
    scrollTop: 0,

  },
  onLoad: function () {
    console.log(_data.photodata(), 'photolist')
    this.setData({
      photolist: _data.photodata(), //模拟数据
    })
  },
  //获取当前滑块的index
  bindchange: function (e) {
    const that = this;
    that.setData({
      currentData: e.detail.current
    })
  },
  //点击切换，滑块index赋值
  checkCurrent: function (e) {
    const that = this;

    if (that.data.currentData === e.target.dataset.current) {
      return false;
    } else {

      that.setData({
        currentData: e.target.dataset.current
      })
    }
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
  /**
   * 上拉刷新
   */
  refreshTop () {
    // 显示顶部刷新图标
    console.log("top")
    console.log(this.data.currentData);

  },

  /**
   * 下拉加载
   */
  reactBottom () {
    console.log("bottom")
    console.log(this.data.currentData);
  },
})

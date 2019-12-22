//Page Object
var localData = require("./swiper.js");
var localDataA = require("./catitems.js");
var localDataB = require("./floorList.js");
Page({
  data: {
    // 轮播图数组
    background: [],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500,
    // 导航
    catesList: [],
    // 数组
    floorList: [],
  },
  //options(Object)
  onLoad: function () {
    localData.message.map((value, index) => {
      this.data.background.push(value.image_src)
    })
    this.setData({
      background: this.data.background
    })

    localDataA.message.map((value, index) => {
      this.data.catesList.push(value.image_src)
    })
    this.setData({
      catesList: this.data.catesList
    })

    localDataB.message.map((value, index) => {
      this.data.floorList.push(value)
    })
    this.setData({
      floorList: this.data.floorList
    })
  },
  onReady: function () {

  },
  onShow: function () {

  },
  onHide: function () {

  },
  onUnload: function () {

  },
  onPullDownRefresh: function () {

  },
  onReachBottom: function () {

  },
  onShareAppMessage: function () {

  },
  onPageScroll: function () {

  },
  //item(index,pagePath,text)
  onTabItemTap: function (item) {

  }
});

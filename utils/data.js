function photodata () {
  let _data = [
    {
      imglist: ["/image/base/head_icon.png"],
      name: 'NO.11122 未知客户',
      time: '2019-08-21 10:43',
      showarrow: false
    }, {
      imglist: ["/image/base/head_icon.png", "/image/base/head_icon.png"],
      name: 'NO.11122 未知客户',
      time: '2019-08-21 10:43',
      showarrow: true
    }, {
      imglist: ["/image/base/head_icon.png"],
      name: 'NO.11122 未知客户',
      time: '2019-08-21 10:43',
      showarrow: false
    }
  ]

  return _data
}


function progressdata () {
  let _data = [
    {
      name: '香薰蜡烛礼盒烛盒烛礼',
      cell: 5,
      all: 20
    }, {
      name: '香薰蜡烛礼盒烛盒烛礼',
      cell: 5,
      all: 15
    }, {
      name: '香薰蜡烛礼盒烛盒烛礼',
      cell: 10,
      all: 20
    }
  ]
  return _data
}

module.exports = {
  photodata: photodata,
  progressdata: progressdata
}
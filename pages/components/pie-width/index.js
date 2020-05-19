function initChart (canvas, width, height, F2) {
  const fontSize = 16;

  var data = [{
    name: '会员：12人',
    percent: 25.45,
    a: '1',
    iconfont: 'e64b'
  }, {
    name: '新客：12人',
    percent: 25,
    a: '1',
    iconfont: 'e650'
  }, {
    name: '熟客：26人',
    percent: 64.55,
    a: '1',
    iconfont: 'e64f'
  }];

  var map = {};
  data.map(function (obj) {
    map[obj.name] = obj.percent + '%';
  });

  var chart = new F2.Chart({
    el: canvas,
    width,
    height
  });
  chart.source(data, {
    percent: {
      formatter: function formatter (val) {
        return val + '%';
      }
    }
  });
  chart.tooltip(false);
  chart.legend(false);
  chart.coord('polar', {
    transposed: true,
    innerRadius: 0.4,
    radius: 0.85
  });
  chart.axis(false);

  chart.pieLabel({
    label1: function label1 (data) {
      return {
        text: data.name
      };
    },
    label2: function label2 (data) {
      return {
        text: data.percent + '%'
      };
    }
  });

  chart.interval().position('a*percent').color('name', ['#27CBD5', '#F54B88', '#8665FF']).adjust('stack').shape('pie-with-icon');
  chart.render();
}

Page({
  onShareAppMessage: function (res) {
    return {
      title: 'F2 微信小程序图表组件，你值得拥有~',
      path: '/pages/index/index',
      success: function () { },
      fail: function () { }
    }
  },
  data: {
    opts: {
      onInit: initChart
    }
  },

  onReady () { }
});
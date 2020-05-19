//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    tablist: ['客流统计', '客户画像', '类目排行', '热区分析'],
    currentData: 0,
    mescard: ['￥121', '13%', '12%', '1'], //详情数据
    progress_txt: '2344.33',
    count: 0, // 设置 计数器 初始为0
    countTimer: null,// 设置 定时器 初始为null
  },
  countInterval: function () {
    // 设置倒计时 定时器 每100毫秒执行一次，计数器count+1 ,耗时6秒绘一圈
    this.countTimer = setInterval(() => {
      if (this.data.count <= 40) {
        /* 绘制彩色圆环进度条  
        注意此处 传参 step 取值范围是0到2，
        所以 计数器 最大值 60 对应 2 做处理，计数器count=60的时候step=2
        */
        this.drawCircle(this.data.count / (60 / 2))
        this.data.count++;
      } else {
        clearInterval(this.countTimer);
      }
    }, 100)
  },
  drawProgressbg: function () {
    // 使用 wx.createContext 获取绘图上下文 context
    var ctx = wx.createCanvasContext('canvasProgressbg')
    ctx.setLineWidth(8); // 设置圆环的宽度
    ctx.setStrokeStyle('#10121B'); // 设置圆环的颜色
    ctx.setLineCap('round') // 设置圆环端点的形状
    ctx.beginPath(); //开始一个新的路径
    ctx.arc(82, 82, 72, 0, 2 * Math.PI, false);
    //设置一个原点(100,100)，半径为90的圆的路径到当前路径
    ctx.stroke(); //对当前路径进行描边
    ctx.draw();
  },

  drawCircle: function (step) {
    var context = wx.createCanvasContext('canvasProgress');
    // 设置渐变
    var gradient = context.createLinearGradient(164, 72, 72, 164);
    gradient.addColorStop("0", "#A26FFF");
    gradient.addColorStop("0.5", "#BB8AFF");
    gradient.addColorStop("1.0", "#BB8AFF");
    context.setLineWidth(8);
    context.setStrokeStyle(gradient);
    context.setLineCap('round')
    context.beginPath();
    // 参数step 为绘制的圆环周长，从0到2为一周 。 -Math.PI / 2 将起始角设在12点钟位置 ，结束角 通过改变 step 的值确定
    context.arc(82, 82, 72, -Math.PI / 2, step * Math.PI - Math.PI / 2, false);
    context.stroke();
    context.draw()
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

  onReady: function () {
    this.drawProgressbg();
    // this.drawCircle(2);
    this.countInterval()

  },
})
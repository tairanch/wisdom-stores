//index.js
//获取应用实例
//Component Object
Component({
  properties: {
    photoList: {
      type: Array,
      value: []
    },

  },
  data: {
    arrow: "../../../image/base/arrow-right-s-icon.png"
  },
  methods: {
    openEdit: function (e) {
      let _item = e.currentTarget.dataset.item
      if (_item.showarrow) {
        console.log(e.currentTarget.dataset.item)
      }
    }
  },
  created: function () {

  },
  attached: function () {

  },
  ready: function () {

  },
  moved: function () {

  },
  detached: function () {

  },
});

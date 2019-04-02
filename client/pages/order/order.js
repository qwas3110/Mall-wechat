const qcloud = require('../../vendor/wafer2-client-sdk/index.js');
const config = require('../../config.js');

const app = getApp()


Page({
  data: {
    userInfo: null,
    locationAuthType: app.data.locationAuthType
  },

  onLoad() {

  },

	onShow() {
		this.setData({
			locationAuthType: app.data.locationAuthType
		})
		app.checkSession({
			success: ({ userInfo }) => {
				this.setData({
					userInfo
				})
			}
		})
	},

  onTapLogin: function() {
    app.login({
      success: ({
        userInfo
      }) => {
        this.setData({
          userInfo,
          locationAuthType: app.data.locationAuthType
        })
      },
      error: () => {
        this.setData({
          locationAuthType: app.data.locationAuthType
        })
      }
    })
  },

})
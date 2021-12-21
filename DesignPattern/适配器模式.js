// 获取用户信息
// 微信 getUserProfile
// 抖音 getUserInfo

var wx = {
  getUserProfile: function () {
    console.log('获取微信用户信息');
  },
};

var tt = {
  getUserInfo: function () {
    console.log('获取抖音用户信息');
  },
};

var wxHandel = {
  // getUserInfo: function(){
  //   return wx.getUserProfile();
  // },
  getUserInfo: wx.getUserProfile,
};

function getUserInfo(target) {
  target.getUserInfo();
  // 获取到用户信息进行别的操作
}

getUserInfo(tt);
getUserInfo(wxHandel);

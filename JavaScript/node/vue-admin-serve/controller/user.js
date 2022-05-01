var svgCaptcha = require("svg-captcha");

async function svgFunc(ctx) {
  var captcha = svgCaptcha.create({
    width: 130,
    height: 40,
    fontSize: 40,
    ignoreChars: '0O1il',  // 忽略字符
    color: true  // 设置颜色
  });
  //  console.log(captcha);

  ctx.session.captcha = captcha.text;

  ctx.body = {
    result: "ok",
    data: captcha.data,
  };
}

module.exports = {
  svgFunc,
};

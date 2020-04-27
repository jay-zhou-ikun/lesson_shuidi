var clound = require('wx-server-sdk');//云服务器
var rp = require('request-promise');// npm 各APi 发出请求
clound.init();

exports.main = async(event, context) => {
  console.log(`http://feedback.api.juhe.cn/ISBN?sub=${event.isbn}&key=d5007e33b006f8c84cc29c961d1a8b1f`);
  var res = rp (`http://feedback.api.juhe.cn/ISBN?sub=${event.isbn}&key=d5007e33b006f8c84cc29c961d1a8b1f`)
  .then(html => {
    return html;
  })
  return res;
}
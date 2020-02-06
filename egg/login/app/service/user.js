const Service = require('egg').Service;
const crypto = require('crypto');
const uuid = require('uuid');
class UserService extends Service {
   async register(user) {
    const { ctx } = this;
    console.log(user, 'service');
    // 密码绝对不能存明文的 单向加密
    user.password = crypto.createHmac('sha256', 'cxk1728')
        .update(user.password)//更新password里面的值
        .digest('hex');//生成一个hex格式的加密字符串
    // user.user_id = uuid.v4().replace(/-/g, '');
      const userInfo = await this.ctx.model.User.create(user);


    ctx.body = {
        user,
        msg: '注册成功',
        userInfo


        // user_id: 10001,
        // user_id: user.user_id
    }
   }
}

module.exports = UserService;
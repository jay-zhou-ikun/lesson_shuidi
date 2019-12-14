exports.getPosts = async ctx => {
    //中间件处理函数
   //向外返回txt文件   ctx是上下文环境 .body是响应体
    await ctx.render('posts', {

    })
}

exports.getRedirectPosts = async ctx => {
    ctx.redirect('/posts');
}
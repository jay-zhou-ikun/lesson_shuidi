Page({
    data: {
        greeting: ''
    },
    greet(greeting) {
        return greeting[Math.floor(Math.random() * greeting.length)]
    },
    onLoad() {
        console.log('页面加载')
        this.setData({
            greeting: this.greet(app.globalData.greeting)
        })
    },
    onShow() {
        console.log('页面显示')
    },
    onReady() {
        console.log('页面首次渲染完成')
    },
    onHide() {
        console.log('页面隐藏')
    },
    onLoad() {
        console.log('页面卸载')
    }
})
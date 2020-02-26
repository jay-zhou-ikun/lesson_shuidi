// 手动的计算
// console.log('rem');
(function(doc, win) {
    // 不会污染外界
    //html fontSize  width/16 栅格
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in win ? 'orientationchange' : 'resize',
        recalc = function() {
            // 设备无差异计算  16rem = 100% width
            var clientWidth = docEl.clientWidth;

            if (!clientWidth) return;
            // 设计稿 750  375  640  320
            docEl.style.fontSize  = 20 * (clientWidth/320) + 'px'; 
            // console.log(clientWidth);
            // ?设备可能由纵向变成横着拿  手机发生变化
            win.addEventListener(resizeEvt, recalc, false);
        };
        // 从外到内， 从内到外   
        // .box  click  a()    true  由外向内执行;  捕获执行
        //    .innerBOX  b()   false 内层向外层执行;  冒泡执行
    doc.addEventListener('DOMCotentLoaded', recalc, false);
    docEl.style.fontSize = '23.5px'
})(document, window)  // 闭包， 立即执行函数  实参
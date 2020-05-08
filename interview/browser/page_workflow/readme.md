虚拟DOM(vue/react 提升页面性能) + 算法Tree(二叉树, 二叉搜索树， 平衡树， 红黑树...) + 重绘(CTO 滴滴顶级传统)  浏览器工作原理 = 顶级公司就业(相遇， DOM 树).

# 如果下载 CSS 文件阻塞了，会阻塞 DOM 树的合成吗?
- 不会阻塞 DOM 树的合成， 会阻塞页面的显示 
    不同阶段 

webpack ? 从url -> download html Document -> 解析出来页面(看到的)分阶段 
webpack 工作流， 不同的阶段 -> 打包输出dist.js
网页的编译显示也一样

1. DOM 树的合成 ？ 看不到页面， 在内存中， 很快
2. 页面的显示， 重绘， 重排(css处理有关)
浏览器把页面展示(绘制)出来， 工作流程
- 入口是什么？  页面绘制的入口 inde.html  网络子进程  Buffer  
    resolve:['.html', '.js', '.css']
    html 超文本标记语言  <p>渲染流程</p>
    dom    标签结点(document.createElement)， 文档结点(document.createTextNode)
    css 层叠样式表  stylesheet  p{color: red}
    js javascript   p.style.color="gray"
    document 文档开始， 此时浏览器空白的， DoM树没有形成，渲染树更没有
    布局， 样式没有， js event loop 没有

    webpack rules, 渲染通过最初的html文档内容， 进行分别处理 
    为什么有标签就可以？


- 不同类型的文件， 不同的loader,
    每个阶段？ 
    类比: 
    webpack 
    - 开始每个子阶段有输入的内容  .styl .css .png .ts
    - 对其进行相应处理   loader
    - 每个阶段生成输出内容  bundle.js

    上一个阶段的输出， 会成为下一个阶段的输入 bundle.js

- 输出是什么？


1. 构建DOM树，在内存中
    浏览器没办法理解HTML 格式,
    编程的过程,  数据结构(tree) + 算法(css selector , js querySelector  查找效率 什么树来解决？ 二叉搜索树 BST)
2. 样式的计算(Recalculate Style)
    这么多样式要怎么管起来？ 样式表
    选择器， 权重， 层叠
    当浏览引擎接收到css 文本时， text/css
    document.stylesheets 对象中  json 组织css 规则的
    选择器就是Key value 就是属性值
    element.style.color
    样式的计算
    - 转换样式表中的属性值， 使其标准化
        body { fontSize: 2rem} em css3 px
        font-weight:bold      600
    - 计算每个节点的具体样式  
    - 计算每个dom结点的大小  绘制 
        1. 继承
        2. 层叠
        3. 浏览器默认样式，及结点样式
3. 布局阶段
    需要计算出DOM 树中可见集合位置， 这个过程叫布局
    第二棵树？ 渲染树()
    1. 遍历DOM树的所有结点， 并把这些结点加到布局树中
    2. 布局计算
双飞翼布局 阿里 发明
绘制

- 双飞翼和圣杯布局， 常考考点，
- 三列式布局， 圣杯有缺点， 宽度小于left 掉下来
    双飞翼布局 解决了这个Bug   缺点也有？ DOM树更复杂 渲染性能不如圣杯
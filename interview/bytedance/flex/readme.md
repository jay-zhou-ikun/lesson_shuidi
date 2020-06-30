flex-grow
弹性布局， flex-shrink 缩

1. left + right > flex 盒子的宽度
这时的宽度是多少？ 
flex-shrink 2 : 1
计算题, 规则 cssRules
- 500+400 - 600 = 300
- left rigt 分担 
    不是只仅仅按照500:400  5:2
    超出分配的比例部分  500x2 :  400x1  5:2
- left = 500 - 300 * 5/7 = 285.72
- right = 400 - 300*2/7 = 

2. 盒子padding 子元素，
    计算方式就要变了， 标准盒模型
    left 
    - 500 + 2*40 + 400 + 2*20 - 600 = 420
    分配比例 不包含padding 5:2
    - 580 - 420*5/7  280 
      440 - 420*2/7  320


3. box-sizing: box-border
const getGoodsInfo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //伪造数据通信时间
            // 未来， 假数据 -> 后台接口吐数据的地方
            resolve({
                goodsImg: [
                    'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2534506313,1688529724&fm=26&gp=0.jpg',
                    'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=161264114,901245203&fm=26&gp=0.jpg',
                    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582636475598&di=ab2b6b8758f4c37caf6999d4d9e51777&imgtype=jpg&src=http%3A%2F%2Fimg1.imgtn.bdimg.com%2Fit%2Fu%3D313173966%2C502025478%26fm%3D214%26gp%3D0.jpg',
                    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582636473908&di=8044f3f2eb4cf9deec2673069459a9c8&imgtype=0&src=http%3A%2F%2Fimg.ewebweb.com%2Fuploads%2F20190403%2F15%2F1554275984-CghfBeMolO.jpg'
                  ],
                  title: '苹果8/7手机壳iPhone7 Plus保护壳全包防摔磨砂硬外壳',
                  tags: ['满69-20元', '关注产品★送钢化膜', 'BIT配次日达'],
                  discount: ['满148减10', '满218减20', '满288减30'],
                  promotion: ['跨店满减', '多买优惠'],
                  remarksNum: 6000,
                  setMeal: [
                    [
                      {
                        img: 'static/img/goodsDetail/pack/1.jpg',
                        intro: '4.7英寸-深邃蓝',
                        price: 28.0
                      },
                      {
                        img: 'static/img/goodsDetail/pack/2.jpg',
                        intro: '4.7英寸-星空黑',
                        price: 29.0
                      },
                      {
                        img: 'static/img/goodsDetail/pack/3.jpg',
                        intro: '5.5英寸-香槟金',
                        price: 28.5
                      }
                    ],
                    [
                      {
                        img: 'static/img/goodsDetail/pack/4.jpg',
                        intro: '5.5英寸-玫瑰金',
                        price: 32.0
                      },
                      {
                        img: 'static/img/goodsDetail/pack/5.jpg',
                        intro: '5.5英寸-深邃蓝',
                        price: 32.0
                      },
                      {
                        img: 'static/img/goodsDetail/pack/6.jpg',
                        intro: '5.5英寸-星空黑',
                        price: 35.0
                      }
                    ],
                    [
                      {
                        img: 'static/img/goodsDetail/pack/7.jpg',
                        intro: '4.7英寸-香槟金',
                        price: 26.0
                      },
                      {
                        img: 'static/img/goodsDetail/pack/8.jpg',
                        intro: '4.7英寸-玫瑰金',
                        price: 25.0
                      },
                      {
                        img: 'static/img/goodsDetail/pack/9.jpg',
                        intro: '4.7英寸-中国红',
                        price: 28.0
                      }
                    ]
                  ],
                  hot: [
                    {
                      img: 'static/img/goodsDetail/hot/1.jpg',
                      price: 28.0,
                      sale: 165076
                    },
                    {
                      img: 'static/img/goodsDetail/hot/2.jpg',
                      price: 36.0,
                      sale: 135078
                    },
                    {
                      img: 'static/img/goodsDetail/hot/3.jpg',
                      price: 38.0,
                      sale: 105073
                    },
                    {
                      img: 'static/img/goodsDetail/hot/4.jpg',
                      price: 39.0,
                      sale: 95079
                    },
                    {
                      img: 'static/img/goodsDetail/hot/5.jpg',
                      price: 25.0,
                      sale: 5077
                    },
                    {
                      img: 'static/img/goodsDetail/hot/6.jpg',
                      price: 20.0,
                      sale: 3077
                    }
                  ],
                  goodsDetail: [
                    'static/img/goodsDetail/intro/1.jpg',
                    'static/img/goodsDetail/intro/2.jpg',
                    'static/img/goodsDetail/intro/3.jpg',
                    'static/img/goodsDetail/intro/4.jpg'
                  ],
                  param: [
                    {
                      title: '商品名称',
                      content: 'iPhone 7手机壳'
                    },
                    {
                      title: '商品编号',
                      content: '10435663237'
                    },
                    {
                      title: '店铺',
                      content: 'Gavin Shop'
                    },
                    {
                      title: '商品毛重',
                      content: '100.00g'
                    },
                    {
                      title: '商品产地',
                      content: '中国大陆'
                    },
                    {
                      title: '机型',
                      content: 'iPhone 7'
                    },
                    {
                      title: '材质',
                      content: 'PC/塑料'
                    },
                    {
                      title: '款式',
                      content: '软壳'
                    },
                    {
                      title: '适用人群',
                      content: '通用'
                    }
                  ],
                  remarks: {
                    goodAnalyse: 90,
                    remarksTags: [ '颜色可人', '实惠优选', '严丝合缝', '极致轻薄', '质量没话说', '比定做还合适', '完美品质', '正品行货', '包装有档次', '不容易发热', '已经买第二个', '是全覆盖' ],
                    remarksNumDetail: [ 2000, 3000, 900, 1 ],
                    detail: [
                      {
                        username: 'p****1',
                        values: 3,
                        content: '颜色很好看，质量也不错！，还送了个指环，想不到哦！',
                        goods: '4.7英寸-深邃蓝',
                        create_at: '2018-05-15 09:20'
                      },
                      {
                        username: '13****1',
                        values: 5,
                        content: '手感没的说，是硬壳，后背带有磨砂手感。很不错，很喜欢，还加送了钢化膜，支架环，物超所值，准备再买一个。很满意。物流很快。很愉快的一次购物！',
                        goods: '5.5英寸-玫瑰金',
                        create_at: '2018-05-13 15:23'
                      },
                      {
                        username: '3****z',
                        values: 4.5,
                        content: '相当轻薄，店家还送了一大堆配件，*元非常值得！',
                        goods: '4.7英寸-玫瑰金',
                        create_at: '2018-05-05 12:25'
                      },
                      {
                        username: 'gd****c',
                        values: 3.5,
                        content: '就是我想要的手机壳，壳子很薄，手感不错，就像没装手机壳一样，想要裸机手感的赶快下手了。',
                        goods: '4.7英寸-中国红',
                        create_at: '2018-04-06 16:23'
                      },
                      {
                        username: 'r****b',
                        values: 4.5,
                        content: '壳子还不错，送的膜也可以，不过还是感觉膜小了那么一点，屏幕没法完全覆盖。对了，壳子稍微有点硬，可能会伤漆，所以不要频繁取壳就好。',
                        goods: '4.7英寸-中国红',
                        create_at: '2018-03-15 19:24'
                      },
                      {
                        username: 'd****e',
                        values: 5,
                        content: '磨砂的，相当漂亮，尺寸非常合适！精工细作！',
                        goods: '5.5英寸-星空黑',
                        create_at: '2018-03-10 10:13'
                      }
                    ]
                  }
            })
        }, 1000);
    })
}
export default {
    getGoodsInfo: getGoodsInfo
}
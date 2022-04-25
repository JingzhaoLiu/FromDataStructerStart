# 数据模型设计

列举各个数据模型的示例，写明属性

## 用户
``` js
  {
    _id: 'xxxx',
    username: 'lu',
    pwd: 18366626716
  }

```

## 地址

``` js
{
  _id: 'xxxx',
  city: '北京',
  department: '',
  houseNumber: 132,
  username: '张三',
  phone: 18366626716
}


```
## 商店
``` js
{
  _id: 'xxxx',
  name: '沃尔玛',
  logo: '',
  sales: 1000,
  expressLimit: 0,
  expressPrice: 15,
  slogan: 'vip 满10元起送'
}


```


## 商品 
``` js
{
  _id: 'xxxx',
  shopId: 1,
  name: 'apple',
  img: '',
  price: 10,
  sales: 1000,
  oldPrice: 40,
  tabs: ['all','seckilling']
}


```

## 订单

``` js
{
  _id: 'xxxx',
  price: 40,
  address: '',
  phone: 18366626716,
  name: ''
}


```

# 模拟数据操作
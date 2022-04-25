# API design

## 热门店铺

### url

`/api/shop/hot-list`

### method

`get`

### request body

### response body

```js

{
  result: 'ok',
  data: [
    {
      _id: 1,
      name: '',
      logo: '',
      sales: 1000,
      expressLimit: 0,
      expressPrice: 5,
      slogan: 'vip 满10元起送'

    },
    {
      _id: 2,
      name: '',
      logo: '',
      sales: 1000,
      expressLimit: 0,
      expressPrice: 15,
      slogan: 'vip 满10元起送'
    },
  ]
}

```

## 商店详情

### url

`/api/shop/:id`

### method

`get`

### request body

### response body

```js

{
  result: 'ok',
  data: {
    _id: 100,
    name: '',
    logo: '',
    sales: 1000,
    expressLimit: 0,
    expressPrice: 15,
    slogan: 'vip 满10元起送'
  }
}

```

## 某个商店的商品列表

### url

`/api/shop/:id/products`

### query

`tab=all`

- all: 全部商品
- sale: 促销商品
- gift: 秒杀商品

### method

`get`

### request body

### response body

```js

{
  result: 'ok',
  data: [
    {
      _id: 10,
      name: '',
      img: '',
      price: 1
    },
    {
      _id: 11,
      name: '',
      img: '',
      price: 10
    },
  ]
}

```

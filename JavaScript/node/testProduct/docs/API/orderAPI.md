# API design



##  create 订单
### url 

`/api/order`

### method 
`post`

### request body

``` js
{
  addressId: 1,
  shopId: 2,
  status: 0,
  products: [
    {
      id: 100,
      num: 3
    },
    {
      id: 100,
      num: 5
    },

  ],
  price: 100,
  totalPrice: 200
}
```

### response body 
``` js

{
  result: 'ok',
  data: {
    id: 1
  }
}

```


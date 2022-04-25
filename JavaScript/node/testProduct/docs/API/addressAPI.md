# API design



##  create 收获地址
### url 

`/api/user/address`

### method 
`post`

### request body

``` js
{
  city: '北京',
  department: 'xx小区',
  houseNumber: '193号',
  name: 'Martin',
  phone: 18378823812
}
```

### response body 
``` js

{
  result: 'ok',
  data: {
    _id: 123,
    city: '北京',
    department: 'xx小区',
    houseNumber: '193号',
    name: 'Martin',
    phone: 18378823812,
    createAt: Date,
    updateAt: Date,
  }
}

```

##  获取单个收获地址
### url 

`/api/user/address/:id`

示例：`/api/user/address/100`

### method 
`get`

### request body

### response body 
``` js

{
  result: 'ok',
  data: {
      _id: 100,
      city: '北京',
      department: 'xx小区',
      houseNumber: '193号',
      name: 'Martin',
      phone: 18378823812,
      createAt: Date,
      updateAt: Date,
  },
    
}

```

##  更新单个收获地址
### url 

`/api/user/address/:id`

示例：`/api/user/address/100`

### method 
`patch`

### request body
``` js
{
  city: '北京',
  department: 'xx小区',
  houseNumber: '193号',
  name: 'Martin',
  phone: 18378823812
}

```

### response body 
``` js

{
  result: 'ok',
  data: {
      _id: 100,
      city: '北京',
      department: 'xx小区',
      houseNumber: '193号',
      name: 'Martin',
      phone: 18378823812,
      createAt: Date,
      updateAt: Date,
  },
    
}


```













##  获取收获地址列表
### url 

`/api/user/address`

### method 
`get`

### request body

### response body 
``` js

{
  result: 'ok',
  data: [
    {
      _id: 123,
      city: '北京',
      department: 'xx小区',
      houseNumber: '193号',
      name: 'Martin',
      phone: 18378823812,
      createAt: Date,
      updateAt: Date,
    },
    {
      _id: 124,
      city: '北京',
      department: 'xx小区',
      houseNumber: '293号',
      name: 'Amy',
      phone: 18371113812,
      createAt: Date,
      updateAt: Date,
    },
  ]
}

```

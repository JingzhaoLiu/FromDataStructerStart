# API

## 注册

#### url 
``

#### method 
``

#### request body

``` js
```

#### response body

``` js

```


## 创建收获地址

#### url 
`
/api/user/address
`

#### method 
`post`

#### request body

``` js
{
   city: '北京',
   department: '',
   houseNumber: 132,
   name: '张三',
   phone: 18366626716
}

```

#### response body

``` js
{
  result: 'ok',
  data: {
    _id: 111,
      city: '北京',
      department: '',
      houseNumber: 132,
      name: '张三',
      phone: 18366626716

  },
  message: '创建成功'
}

```

## 获取收获地址列表

#### url 
`
/api/user/address
`

#### method 
`get`

#### request body

#### response body

``` js
{
  result: 'ok',
  data: [{
    _id: 111,
      city: '北京',
      department: '',
      houseNumber: 132,
      name: '张三',
      phone: 18366626716

  },
  {
    _id: 112,
      city: '北京',
      department: '',
      houseNumber: 132,
      name: '张三',
      phone: 18366626716

  },
  
  ]
}

```

## 获取收获地址

#### url 
`
/api/user/address/:id
`

实例: `/api/user/address/111`

#### method 
`get`

#### request body

#### response body

``` js
{
  result: 'ok',
  data: {
    _id: 111,
      city: '北京',
      department: '',
      houseNumber: 132,
      name: '张三',
      phone: 18366626716

  }
}

```
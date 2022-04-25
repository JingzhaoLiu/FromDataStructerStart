# API design



##  注册
### url 

`/api/user/register`

### method 
`post`

### request body

``` js
{
  username: 18366626195,
  password: 123456
}
```

### response body 
``` js

{
  result: 'ok'
}

```

##  登录
### url 

`/api/user/login`

### method 
`post`

### request body

``` js
{
  username: 18366626195,
  password: 123456
}
```

### response body 
``` js

{
  result: 'ok',
  data: {
    username: 18366626195,
  }
}

```

##  获取用户信息
### url 

`/api/user/info`

### method 
`get`

### request body

### response body 
``` js

{
  result: 'ok',
  data: {
    username: 18366626195
  }
}

```


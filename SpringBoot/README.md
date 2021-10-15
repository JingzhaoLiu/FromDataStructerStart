

## SpringBoot （一站式开发）
Spring Boot 目标主要是应用了快速开发，简化整个项目的配置和依赖工作，提升开发效率，更快速地构建应用程序

### application.properties配置
spring.application.name 设置程序名。如果你是微服务的话，它起到了唯一标识的作用  
server.port=8088 设置端口


mybatis.mapper-locations=classpath:/mapper/*.xml  设置mapper.xml的路径


### 接口返回字符串

``` java

@RestController
@RequestMapping("/v3")
public class HelloController {
    @GetMapping("/hello2")
    public String hello2(){
        return "hello2";
    }

    @GetMapping("hello3")
    public String hello3(){
        return "hello3";
    }

    @RequestMapping("hello1")
    public String hello(){
        return "hello1";
    }

    @RequestMapping("/hello4")
    public String hello4(){
        return "hello4";
    }

}
```

RequestMapping和GetMapping后面都可以不写`/`,规范要写


### 接口返回json

返回的是 Jackson 数据，默认用的 是 Jackson 序列化

``` java
// Entity/Coupon
@Data
public class Coupon {
    private int id;
    private String name;
}

```


``` java
// Controller/CouponController
import com.example.aliyunlearning.Entity.Coupon;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CouponController {

    @RequestMapping("/coupon")
    public Coupon Coupon(){

        Coupon coupon = new Coupon();
        coupon.setId(1);
        coupon.setName("couponName");
        return coupon;
    }
}
```
### 使用数据库

Spring boot简单步骤

1、建立实体类，跟数据库表字段保持一致

2、建立mapper接口，定义要操作数据库的动作, 写具体的sql语句(也可以建立mapper的xml文件)

3、建立service类，处理业务逻辑

4、在controller 类中展示处理的结果



`/***写具体的sql语句***/`

``` java

// entity/User
@Data
public class User {
    private Integer id;
    private String name;
}

// mapper接口

public interface UserMapper {
    @Select("select * from User")
    List<User> findAll();
}


// controller/HelloController
@RestController
@RequestMapping("/v3")
public class HelloController {

    @Resource
    UserMapper userMapper;

    @GetMapping("/UserList")
    public List<User> getUser() {
        return userMapper.findAll();
    }
}
```

`/***建立mapper的xml文件***/`

``` xml
// resources/mapper/UserMapper.xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd" >
<mapper namespace="com.example.testdemo.mapper.UserMapper">
    <select id="findList" resultType="com.example.testdemo.entity.User">
        SELECT * FROM User
    </select>
</mapper>

namespace="com.example.testdemo.mapper.UserMapper"  是mapper接口的全路径
resultType="com.example.testdemo.entity.User"  是实体类全路径 
```

``` 
// application.properties
mybatis.mapper-locations=classpath:/mapper/*.xml   resources中xml的路径
```

``` java

// entity/User
@Data
public class User {
    private Integer id;
    private String name;
}

// mapper接口

public interface UserMapper {
    List<User> findList();
}


// controller/HelloController
@RestController
@RequestMapping("/v3")
public class HelloController {

    @Resource
    UserMapper userMapper;

    @GetMapping("/Users")
    public List<User> getUser() {
        return userMapper.findList();
    }
}
```

## 代码反向生成
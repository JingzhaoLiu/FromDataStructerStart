

## SpringBoot 

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

<!-- namespace="com.example.testdemo.mapper.UserMapper"  是mapper接口的全路径名称
resultType="com.example.testdemo.entity.User"  是实体类全路径  -->
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




# SpringBoot 快速启动 （一站式开发）
Spring Boot 目标主要是应用了快速开发，简化整个项目的配置和依赖工作，提升开发效率，更快速地构建应用程序（零配置情况下一键启动，简洁而优雅）

- 简化依赖，提供整合的依赖项；
- 简化配置，提供约定俗成的默认配置；
- 简化部署，内置 servlet 容器，开发时一键即运行。可打包为 jar 文件，部署时一行命令即启动；
- 简化监控，提供简单方便的运行监控方式。

## Spring Initializr
- Group 表示项目所属的机构 习惯上采用倒置的域名作为 Group 的值 com.jingzhaoshare
- 项目标识设置：Artifact 是项目标识，用来区分项目。项目标识习惯性地采用小写英文单词，单词间加横杠的形式。比如 Spring Boot 官方提供的很多依赖，都是 spring-boot-starter-xxx 的形式
- 项目名称设置：Name 是项目名称，保持与 Artifact 一致即可；
- 默认包名设置：Package name 是默认包名，保持默认即可；
- 打包方式选择：此处选择将项目打包为 Jar 文件；
- 添加项目依赖：我们直接在 pom.xml 中添加依赖，可以指定我们项目需要引入的版本

## Spring Boot 项目结构

![SpringBoot](../img/SpringBootProjectStructure.png)

- learnboot 是我们指定的项目名称；
- src/main/java 是 Java 源代码目录，存放我们编写的 Java 代码；
- src/main/resources 目录是静态资源目录，存放图片、脚本文件、配置文件等静态资源；
- src/test/java 目录是测试目录，存放测试类。测试是非常重要的，从目录级别跟源代码同级，就能看出来测试的重要性；
- target 目录存放我们打包生成的内容；
- pom.xml 是项目的 Maven 配置文件，指定了项目的基本信息以及依赖项，Maven 就是通过配置文件得知项目构建规则的。

## pom.xml 详解

1. Maven 文档配置

``` xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
</project>
```

2. 项目信息配置
``` xml
	<groupId>com.imooc</groupId>
	<artifactId>spring-boot-learn</artifactId>
	<version>0.0.1-SNAPSHOT</version>
	<name>spring-boot-learn</name>
	<description>Demo project for Spring Boot</description>
```


3. Spring Boot 版本配置

``` xml
	<parent>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-parent</artifactId>
		<version>2.5.5</version>
		<relativePath/> <!-- lookup parent from repository -->
	</parent>
```
4. 依赖配置
``` xml
<dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>
    </dependencies>
```
> 可以看到上面两个依赖我们并没有指定版本号，其实是因为 Spring Boot 2.2.5 已经有默认的依赖项版本号了。这是通过 Maven 父继承实现的，即 <parent> 标签配置部分，这个稍作了解即可。

5. 插件配置
``` xml
<build>
    <plugins>
        <plugin>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-maven-plugin</artifactId>
        </plugin>
    </plugins>
</build>

```


## Spring Boot 项目启动机制
Spring 本质上是一个容器,里面存放的是 Java 对象，放入容器的 Java 对象被称为 Spring 组件（Bean）。

> 神奇的 @SpringBootApplication 注解
``` java
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Inherited
@SpringBootConfiguration
@EnableAutoConfiguration
@ComponentScan(excludeFilters = { @Filter(type = FilterType.CUSTOM, classes = TypeExcludeFilter.class),
		@Filter(type = FilterType.CUSTOM, classes = AutoConfigurationExcludeFilter.class) })
public @interface SpringBootApplication {
}

```

其实就是一个组合注解，包含了多个注解的功能。

首先是 @SpringBootConfiguration 注解，它继承自 @Configuration 注解，功能也跟 @Configuration 一样。它会将当前类标注为配置类了，我们在启动类中配置 Bean 就可以生效了。

其次是 @ComponentScan 注解，用来指定我们要扫描的包，以便发现 Bean 。注意在默认情况下， SpringBoot 扫描该注解标注类所在包及其子包。当我们的控制器、服务类等 Bean 放到不同的包中时，就需要通过 @ComponentScan 注解指定这些包，以便发现 Bean 。

最重要的是 @EnableAutoConfiguration 注解，用来启动自动配置。开启自动配置后， Spring Boot 会扫描项目中所有的配置类，然后根据配置信息启动 Spring 容器。

拥有了 @SpringBootConfiguration ，我们就拥有了一个可以拿来即用的 Spring 容器环境了

### application.properties配置
spring.application.name 设置程序名。如果你是微服务的话，它起到了唯一标识的作用  
server.port=8088 设置端口


mybatis.mapper-locations=classpath:/mapper/*.xml  设置mapper.xml的路径

## 模板引擎开发 Web 项目
1. 使用 FreeMarker

在 pom.xml 中引入相关依赖 

```
<!-- 引入web项目相关依赖 -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>
<!-- freemarker -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-freemarker</artifactId>
</dependency>
```
2. 使用Thymeleaf

## 开发 RESTful 风格 Web 项目

1. 根据需求制定 RESTful 风格的接口文档
``` 
    GET	查询商品 (id=1) 信息	http://127.0.0.1:8080/goods/1
    GET	查询商品列表信息	http://127.0.0.1:8080/goods
    POST	新增商品	http://127.0.0.1:8080/goods
    PUT	修改商品 (id=1) 信息	http://127.0.0.1:8080/goods/1
    DELETE	删除商品 (id=1)	http://127.0.0.1:8080/goods/1
``` 
2. 按文档开发后端 API 接口
   
   
3. 使用 Postman 测试 API 接口可用

## Swagger 自动化测试与文档
1. 引入Swagger 依赖
```
pom.xml
<dependency>
    <groupId>io.springfox</groupId>
    <artifactId>springfox-boot-starter</artifactId>
    <version>3.0.0</version>
<dependency>

```

2. 启用配置Swagger3.0 功能
``` java
// 启用swagger
@EnableOpenApi
@SpringBootApplication
public class SpringBootLearnApplication {

    public static void main(String[] args) {
        SpringApplication.run(SpringBootLearnApplication.class, args);
    }

}
```

![swagger_api](../img/swagger_api.png)
``` java
// 接口标记
@Api(tags="课程管理")
@RestController
public class CourseController {

    @Resource
    private CourseService courseService;

    /**
     * get course detail
     * GetMapping表示使用get方法
     * "/goods/{id}"表示请求路径为/goods/{id}的形式，其中{id}为占位符
     * PathVariable("id")表示将占位符{id}的值传递给id
     * 也就是说/course/7请求的话，会将7传递给参数id
     */
    @ApiOperation("课程详情")
    @GetMapping("/course/{id}")
    public CourseDo getDetail(@PathVariable("id") int id){
        return courseService.getCourseById(id);
    }


    /**
     * get course list
     */
    @ApiOperation("课程列表")
    @GetMapping("/course/list")
    public List<CourseDo> getList(){
        return courseService.getCourseList();
    }

    /**
     * add course
     * PostMapping表示使用post方法
     * RequestBody表示将请求中的body中信息转换为CourseDo类型的对象信息，该转换也是由SpringMVC自动完成的
     */
    @ApiOperation("添加课程")
    @PostMapping("/course")
    public void add(@RequestBody CourseDo course) {
        courseService.addCourse(course);
    }

    /**
     * edit course
     * PutMapping表示使用put方法
     */
    @ApiOperation("编辑课程")
    @PutMapping("/course/{id}")
    public void update(@PathVariable("id") int id, @RequestBody CourseDo course){
        course.setId(id);
        courseService.editCourse(course);
    }

    /**
     * remove course
     * DeleteMapping表示使用delete方法
     */
    @ApiOperation("删除课程")
    @DeleteMapping("/course/{id}")
    public void delete(@PathVariable("id") int id){
        courseService.removeCourse(id);
    }
}

```
![swagger_schemas](../img/swagger_schemas.png)
``` java
// Schemas标记
@ApiModel("CourseDo 课程基本信息")
public class CourseDo {
    /**
     * course id
     */
    private int id;

    /**
     * course name
     */
    @ApiModelProperty("课程名称")
    private String name;

    /**
     * course price
     */
    @ApiModelProperty("课程价格")
    private String price;

    /**
     * course pic
     */
    private String pic;

}
```


3. 生成api文档

```
http://localhost:8080/swagger-ui/index.html
```

## CORS 跨域

跨域实际上源自浏览器的同源策略，所谓同源，指的是协议、域名、端口都相同的源(域)

``` java
// WebMvcConfig.java 
@Configuration
public class WebMvcConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                // 设置允许跨域请求的域名 注意这里使用allowedOrigins报错
                .allowedOriginPatterns("*")
                // 是否允许证书（cookies）
                .allowCredentials(true)
                // 设置允许的方法
                .allowedMethods("*")
                // 跨域允许时间
                .maxAge(3600);
    }
}
```

## Docker安装java环境并部署jar包运行
1. 安装java环境

``` shell
docker search java:8
docker pull java:8
docker images
```
2. 创建Dockerfile文件

进入到你想要的目录 vi Dockerfile
``` vi
FROM java:8
#作者
MAINTAINER jingzhao
#jar包添加到镜像中
ADD spring-boot-learn-0.0.1-SNAPSHOT.jar start.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","start.jar"]
```
3. 创建镜像

上传jar包到当前目录, 创建镜像
```
docker build -t jingzhao/start .(重点注意这个的点)
```
4. 运行镜像
```
docker run -d --name start -p 8087:8080  jingzhao/start
```
5. 查看
```
docker ps
docker logs start
```
6. 修改jar
```
docker stop start  // 停止容器
docker rm start  // 删除容器

// 重新上传jar包创建镜像，运行镜像

```



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

## 代码生成平台
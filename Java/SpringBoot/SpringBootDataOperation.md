# Spring Boot 数据操作

## Spring Boot JdbcTemplate

1. 数据库
``` SQL
CREATE TABLE `goods` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '唯一编号',
  `name` varchar(255) DEFAULT '' COMMENT '商品名称',
  `price` decimal(10,2) DEFAULT '0.00' COMMENT '商品价格',
  `pic` varchar(255) DEFAULT '' COMMENT '图片文件名',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


```
> 默认值最好不要采用 NULL ， NULL 会影响索引的效率，而且在查询时需要用 is null 或 is not null 筛选，容易被忽略。

2. 创建项目，引入项目依赖,配置数据库

``` xml
<!-- pom.xml -->
	  <!-- 热部署 -->
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-devtools</artifactId>
		</dependency>
		<!-- web -->
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-web</artifactId>
		</dependency>
		<!-- jdbc -->
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-jdbc</artifactId>
		</dependency>
		<!-- myql驱动 -->
		<dependency>
			<groupId>mysql</groupId>
			<artifactId>mysql-connector-java</artifactId>
		</dependency>


```

``` 
// application.properties
# 配置数据库
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.datasource.url=jdbc:mysql://4.14.4.14:3308/learn?useUnicode=true&characterEncoding=utf-8&serverTimezone=GMT%2B8
spring.datasource.username=root
spring.datasource.password=root

```

我们在 URL 配置中指定了编码方式，这样可以防止出现数据库中文乱码情况。同时指定了时区为北京时间所在的东八区（GMT%2B8），避免因时区问题导致错误


3. 建立项目结构

- GoodsDo：商品类，对应 goods 商品表；

``` java
  /**
 * 商品类
 */
public class GoodsDo {
/**
 * 商品id
 */
private Long id;
/**
 * 商品名称
 */
private String name;
/**
 * 商品价格
 */
private String price;
/**
 * 商品图片
 */
private String pic;
// 省略get set方法
```

- GoodsDao：商品数据访问类，用于访问数据库；

``` java


/**
 * 商品数据库访问类
 * @author Martin
 */
@Repository // 标注数据访问类
public class GoodsDao {
    @Autowired
    private JdbcTemplate jdbcTemplate;

    /**
     * 新增
     */
    public void insert(GoodsDo goods) {
        jdbcTemplate.update("insert into goods(name,price,pic)values(?,?,?)", goods.getName(), goods.getPrice(),
                goods.getPic());
    }

    /**
     * 删除
     */
    public void delete(Long id) {
        jdbcTemplate.update("delete from goods where id =?", id);
    }

    /**
     * 更新
     */
    public void update(GoodsDo goods) {
        jdbcTemplate.update("update goods set name=?,price=?,pic=? where id=?", goods.getName(), goods.getPrice(),
                goods.getPic(), goods.getId());
    }

    /**
     * 按id查询
     */
    public GoodsDo getById(Long id) {
        return jdbcTemplate.queryForObject("select * from goods where id=?", new RowMapper<GoodsDo>() {
            @Override
            public GoodsDo mapRow(ResultSet rs, int rowNum) throws SQLException {
                GoodsDo goods = new GoodsDo();
                goods.setId(rs.getInt("id"));
                goods.setName(rs.getString("name"));
                goods.setPrice(rs.getString("price"));
                goods.setPic(rs.getString("pic"));
                return goods;
            }
        }, id);
    }

    /**
     * 查询商品列表
     */
    public List<GoodsDo> getList() {
        return jdbcTemplate.query("select * from goods", new RowMapper<GoodsDo>() {
            @Override
            public GoodsDo mapRow(ResultSet rs, int rowNum) throws SQLException {
                GoodsDo goods = new GoodsDo();
                goods.setId(rs.getInt("id"));
                goods.setName(rs.getString("name"));
                goods.setPrice(rs.getString("price"));
                goods.setPic(rs.getString("pic"));
                return goods;
            }
        });
    }
}



```
- GoodsService：商品服务类，用于封装对商品的操作；
``` java
/**
 * 商品服务类
 * @author Martin
 */
@Service
public class GoodsService {
    @Autowired
    private GoodsDao goodsDao;

    /**
     * 新增商品
     */
    public void add(GoodsDo goods) {
        goodsDao.insert(goods);
    }

    /**
     * 删除商品
     */
    public void remove(Long id) {
        goodsDao.delete(id);
    }

    /**
     * 编辑商品信息
     */
    public void edit(GoodsDo goods) {
        goodsDao.update(goods);
    }

    /**
     * 按id获取商品信息
     */
    public GoodsDo getById(Long id) {
        return goodsDao.getById(id);
    }

    /**
     * 获取商品信息列表
     */
    public List<GoodsDo> getList() {
        return goodsDao.getList();
    }
}

```

- GoodsController：商品控制器类，用于对外提供 HTTP 接口；
- CorsConfig：跨域配置类，允许前端页面跨域访问后端接口。

``` java
/**
 * 跨域配置类
 */
@Configuration
public class CorsConfig {
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")// 对所有请求路径
                        .allowedOrigins("*")// 允许所有域名
                        .allowCredentials(true)// 允许cookie等凭证
                        .allowedMethods("GET", "POST", "DELETE", "PUT", "PATCH")// 允许所有方法 .allowedMethods("*")
                        .maxAge(3600);
            }
        };
    }
}
```





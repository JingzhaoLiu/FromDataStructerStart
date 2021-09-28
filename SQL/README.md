## MySQL


### 约束条件

``` SQL
CREATE TABLE IF NOT EXISTS `Person`(
   `s_id` VARCHAR(20) PRIMARY KEY,
	 `s_name` VARCHAR(20) NOT NULL,
	 `s_age` int DEFAULT 18,
	 `s_sex` VARCHAR(20) NOT NUll DEFAULT '未知'
);
```

1. PRIMARY KEY
   主键
2. NOT NULL
   非空的约束，也就是不能向表里插入空值（NULL），字符串""不是空值
   ``` SQL
    INSERT INTO `Person` VALUES('1',NULL); 
    // 报错
    ```
3. DEFAULT
   在不给字段输入值时，默认返回的结果,`s_age`没有输入值返回了默认值`18` .
   ``` SQL
    INSERT INTO `Person` (s_id,s_name,s_sex) VALUES('3','liu','男');
    // 3 liu 18 男
    ```
4. NOT NUll DEFAULT
   not null 和 default是两个独立的约束，
   设置为NULL时，会触发NOT NULL，
   DEFAULT只有在不给字段数据时才会触发
   `s_age`没有输入值返回了默认值`18` .
   `s_sex`没有输入值，不为NULL不会因NOT NULL报错，触发DEFAULT，默认值返回`未知`.
  
   ``` SQL
   INSERT INTO `Person` (s_id,s_name) VALUES('4','liu');
   // 4 liu 18 未知
   ```

### value和values

都可以插入多行数据（在oracle数据库中只有insert into values，而没有insert into value）

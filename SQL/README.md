## MySQL

```
mysql -V 查看版本
```

### 登录

1. 格式1

``` 
mysql -u用户名 -p密码
例如：mysql –uroot -proot

后插入密码
mysql -u用户名 -p回车

```

2. 格式2

``` 
mysql -hip地址 -u用户名 -p密码
例如：mysql –h127.0.0.1 –uroot -proot

```

3. 格式3

``` 
登录格式3：mysql --host=ip地址 --user=用户名 --password=密码
例如：mysql --host=127.0.0.1 --user=root --password=root


```


```
编码查询 mysql 命令模式下
show variables like '%char%';
```

如果MySQL的版本≥5.5.3，可以把编码设置为`utf8mb4`，`utf8mb4`和`utf8`完全兼容，但它支持最新的Unicode标准，可以显示`emoji字符`

### 分类

1. DDL(Data Definition Language)数据定义语言
用来定义数据库对象：数据库，表，列等。关键字：create, drop,alter等

2. DML(Data Manipulation Language)数据操作语言
用来对数据库中表的数据进行增删改。关键字：insert, delete, update等

3. DQL(Data Query Language)数据查询语言
用来查询数据库中表的记录(数据)。关键字：select, where等

4. DCL(Data Control Language)数据控制语言(了解)
用来定义数据库的访问权限和安全级别，及创建用户。关键字：GRANT， REVOKE等


### SQL通用语法

1. SQL语句可以单行或多行书写，以分号结尾。

2. 可使用空格和缩进来增强语句的可读性。

3. MySQL数据库的SQL语句不区分大小写，关键字建议使用大写。


### DDL

1. 直接创建数据库
```
CREATE DATABASE 数据库名;
CREATE DATABASE `learning1`;
```

2. 判断是否存在并创建数据库
```
CREATE DATABASE IF NOT EXISTS 数据库名;
CREATE DATABASE IF NOT EXISTS `learning2`;
```
3. 创建数据库并指定字符集(编码表)
```
CREATE DATABASE 数据库名 CHARACTER SET 字符集;
CREATE DATABASE `learning3` CHARACTER SET utf8;
```

4. 查看数据库
```
查看所有的数据库
SHOW DATABASES;  
查看某个数据库的定义信息
SHOW CREATE DATABASE learning2;
```
5. 修改数据库
```
ALTER DATABASE `learning2` DEFAULT CHARACTER SET gbk;
```

6. 删除数据库
```
DROP DATABASE `learning2`;
```

7. 使用数据库

```
SELECT DATABASE(); 
查看正在使用的数据库

USE `learning1`;
使用/切换数据库
```



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
   联合主键：
   ``` SQL
   CREATE TABLE IF NOT EXISTS `Score`(
      `s_id` VARCHAR(20),
		`s_score` INT(3),
		`c_id` VARCHAR(20),
		PRIMARY KEY(`s_id`,`c_id`)
   );
   ```


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


### MySQL案例

#### 创建
``` SQL
CREATE DATABASE IF NOT EXISTS `LearnSQL`;

``` 

``` SQL
CREATE TABLE `Student`(
   `s_id` VARCHAR(20) PRIMARY KEY,
   `s_name` VARCHAR(20) NOT NULL DEFAULT '',
   `s_birth` VARCHAR(20) NOT NULL DEFAULT '',
   `s_sex` VARCHAR(10) NOT NULL DEFAULT ''
);
``` 

``` SQL
CREATE TABLE `Course`(
   `c_id` VARCHAR(20) PRIMARY KEY,
   `c_name` VARCHAR(20) NOT NULL DEFAULT '',
   `t_id` VARCHAR(20) NOT NULL
);
``` 

``` SQL
CREATE TABLE `Teacher`(
   `t_id` VARCHAR(20) PRIMARY KEY,
   `t_name` VARCHAR(20) NOT NULL DEFAULT ''
);
``` 

``` SQL
CREATE TABLE `Score`(
   `s_id` VARCHAR(20),
   `c_id` VARCHAR(20),
   `s_score` INT(3),
   PRIMARY KEY(`s_id`,`c_id`)
);
``` 


#### 插入
``` SQL
INSERT INTO  `Student` VALUES
('01' , '赵雷' , '1990-01-01' , '男'),
('02' , '钱电' , '1990-12-21' , '男'),
('03' , '孙风' , '1990-05-20' , '男'),
('04' , '李云' , '1990-08-06' , '男'),
('05' , '周梅' , '1991-12-01' , '女'),
('06' , '吴兰' , '1992-03-01' , '女'),
('07' , '郑竹' , '1989-07-01' , '女'),
('08' , '王菊' , '1990-01-20' , '女');

``` 

``` SQL
INSERT INTO `Course` VALUES
('01' , '语文' , '02'),
('02' , '数学' , '01'),
('03' , '英语' , '03');

```

``` SQL
INSERT INTO `Teacher` VALUES
('01' , '周' ),
('02' , '刘' ),
('03' , '王' );

```

``` SQL
INSERT INTO `Score` VALUES
('01' , '01' , 80),
('01' , '02' , 90),
('01' , '03' , 99),
('02' , '01' , 70),
('02' , '02' , 60),
('02' , '03' , 80),
('03' , '01' , 80),
('03' , '02' , 80),
('03' , '03' , 80),
('04' , '01' , 50),
('04' , '02' , 30),
('04' , '03' , 20),
('05' , '01' , 76),
('05' , '02' , 87),
('06' , '01' , 31),
('06' , '03' , 34),
('07' , '02' , 89),
('07' , '03' , 98);

```

#### 查询



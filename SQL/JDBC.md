## JDBC

       Java App    
│  └───────────────┘  │
           │
│          ▼          │
   ┌───────────────┐
│  │JDBC Interface │<─┼─── JDK
   └───────────────┘
│          │          │
           ▼
│  ┌───────────────┐  │
   │  JDBC Driver  │<───── (mysql 驱动，PostgreSQL驱动等不同驱动)
│  └───────────────┘  │
           │
└ ─ ─ ─ ─ ─│─ ─ ─ ─ ─ ┘
           ▼
   ┌───────────────┐
   │   Database    │
   └───────────────┘

JDBC的好处是：

1.各数据库厂商使用相同的接口，Java代码不需要针对不同数据库分别开发；

2.Java程序编译期仅依赖java.sql包，不依赖具体数据库的jar包；

3.可随时替换底层数据库，访问数据库的Java代码基本不变。


### 添加MySQL数据

1. 创建数据库
``` SQL
DROP DATABASE IF EXISTS `learnJDBC`;
CREATE DATABASE `learnJDBC`;
```

2. 创建表
``` SQL
DROP TABLE IF EXISTS `students`;
CREATE TABLE `students` (
  id BIGINT AUTO_INCREMENT NOT NULL,
	name VARCHAR(50) NOT NULL,
	gender VARCHAR(1) NOT NULL,
	grade INT NOT NULL,
	score INT NOT NULL,
	PRIMARY KEY(id)
) ENGINE=INNODB DEFAULT CHARSET = UTF8;

```

3. 插入数据
``` SQL
INSERT INTO students (name, gender, grade, score) VALUES ('小一', 1, 1, 88);
INSERT INTO students (name, gender, grade, score) VALUES ('小二', 1, 1, 95);
INSERT INTO students (name, gender, grade, score) VALUES ('小三', 0, 1, 93);
INSERT INTO students (name, gender, grade, score) VALUES ('小四', 0, 1, 100);
INSERT INTO students (name, gender, grade, score) VALUES ('小五', 1, 2, 96);
INSERT INTO students (name, gender, grade, score) VALUES ('小六', 1, 2, 99);
INSERT INTO students (name, gender, grade, score) VALUES ('小七', 0, 2, 86);
INSERT INTO students (name, gender, grade, score) VALUES ('小八', 0, 2, 79);
INSERT INTO students (name, gender, grade, score) VALUES ('小九', 1, 3, 85);
INSERT INTO students (name, gender, grade, score) VALUES ('小十', 1, 3, 90);
INSERT INTO students (name, gender, grade, score) VALUES ('十一', 0, 3, 91);
INSERT INTO students (name, gender, grade, score) VALUES ('十二', 0, 3, 97);
```

### Maven添加依赖

``` xml
<dependencies>
   <dependency>
      <groupId>mysql</groupId>
      <artifactId>mysql-connector-java</artifactId>
      <version>8.0.25</version>
      <scope>runtime</scope>
   </dependency>
</dependencies>
```
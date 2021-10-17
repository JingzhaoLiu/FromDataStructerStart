# SpringBoot+Vue


## 后台

### 创建数据

``` SQL

CREATE TABLE `user` (
 `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
 `email` varchar(255) NOT NULL COMMENT '邮箱',
 `password` varchar(255) NOT NULL COMMENT '密码',
 `username` varchar(255) NOT NULL COMMENT '姓名',
 PRIMARY KEY (`id`),
 UNIQUE KEY `email` (`email`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;


INSERT INTO `user` VALUES ('1', '1@qq.com', '123456', '张三');
INSERT INTO `user` VALUES ('2', '2@qq.com', '234567', '李四');
INSERT INTO `user` VALUES ('3', '3@qq.com', '345678', '王五');



```
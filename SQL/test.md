## 创建表
``` SQL
CREATE TABLE `emp` (
  `id` INT,
  `name` VARCHAR(32),
  `sex` CHAR(1),
  `birthday` DATE,
  `entry_date` DATETIME,
  `job` VARCHAR(32),
  `salary` DOUBLE,
  `resume` TEXT
) CHARSET utf8;

CREATE TABLE `info` (
  `id` INT,
  `resume` TEXT
) CHARSET utf8;

```
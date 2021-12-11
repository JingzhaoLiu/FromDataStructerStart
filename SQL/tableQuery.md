# 多表查询

``` mysql
SELECT last_name, department_name
FROM employees, departments
WHERE employees.department_id = departments.department_id;

```

#### 区分重复的列名
``` sql

# 多个表中有相同列时，必须在列名之前加上表名前缀。
# 在不同表中具有相同列名的列可以用表名加以区分。
SELECT employees.last_name, departments.department_name,employees.department_id
FROM employees, departments
WHERE employees.department_id = departments.department_id;

```

#### 表的别名
``` sql
# 列名前使用表名前缀可以提高查询效率。
# 使用别名可以简化查询。
SELECT e.last_name
FROM employees e

SELECT e.employee_id, e.last_name, e.department_id,
       d.department_id, d.location_id
FROM   employees e , departments d
WHERE  e.department_id = d.department_id;
# 需要注意的是，如果我们使用了表的别名，在查询字段中、过滤条件中就只能使用别名进行代替，不能使用原有的表名，否则就会报错。
```

对于数据库中表记录的查询和变更，只要涉及多个表，都需要在列名前加表的别名（或 表名）进行限定

``` sql
SELECT
	e.employee_id,
	e.last_name,
	e.department_id,
	d.location_id 
FROM
	employees e,
	departments d,
	locations l 
WHERE
	e.department_id = d.department_id 
	AND d.location_id = l.location_id;

``` 

### 聚合
下面我们来看一下对记录进行汇总的操作，这类操作主要有

- 汇总函数，比如 sum 求和、count 统计数量、max 最大值、min 最小值等
``` sql
SELECT SUM(salary) FROM employees;
SELECT MAX(salary) FROM employees;
SELECT MIN(salary) FROM employees;
SELECT COUNT(salary) FROM employees;
```
`COUNT(常量) 和 COUNT(*)表示的是直接查询符合条件的数据库表的行数。而COUNT(列名)表示的是查询符合条件的列的值不为NULL的行数。

除了查询得到结果集有区别之外，COUNT(*)相比COUNT(常量) 和 COUNT(列名)来讲，COUNT(*)是SQL92定义的标准统计行数的语法，因为他是标准语法，所以MySQL数据库对他进行过很多优化。
相比COUNT(*)，COUNT(字段)多了一个步骤就是判断所查询的字段是否为NULL，所以他的性能要比COUNT(*)慢
`

``` sql
SELECT COUNT(*) number, department_id
FROM employees
GROUP BY department_id 
ORDER BY number DESC
```

- group by，关键字表示对分类聚合的字段进行分组，比如按照部门统计员工的数量，那么 group by 后面就应该跟上部门
``` sql
SELECT COUNT(last_name), department_id
FROM employees
GROUP BY department_id 
ORDER BY COUNT(last_name) DESC


SELECT COUNT(*), department_id
FROM employees
GROUP BY department_id 
ORDER BY department_id DESC

SELECT COUNT(*) number, department_id
FROM employees
GROUP BY department_id 
ORDER BY COUNT(*) DESC

SELECT COUNT(*) number, department_id
FROM employees
GROUP BY department_id 
ORDER BY number DESC
```
- with 是可选的语法，它表示对汇总之后的记录进行再次汇总

``` sql
#使用 WITH ROLLUP
#WITH ROLLUP 可以实现在分组统计数据基础上再进行相同的统计（SUM,AVG,COUNT…）。

SELECT COUNT(*) number, department_id
FROM employees
GROUP BY department_id WITH ROLLUP
ORDER BY number DESC

``` 

- having 关键字表示对分类后的结果再进行条件的过滤。

> 看起来 where 和 having 意思差不多，不过它们用法不一样，where 是使用在统计之前，对统计前的记录进行过滤，having 是用在统计之后，是对聚合之后的结果进行过滤。也就是说 where 永远用在 having 之前，我们应该先对筛选的记录进行过滤，然后再对分组的记录进行过滤。

``` sql
SELECT COUNT(*) number, department_id
FROM employees
GROUP BY department_id WITH ROLLUP HAVING number > 7
ORDER BY COUNT(*) DESC

```

#### 等值连接和非等值连接


```mysql
SELECT e.last_name, e.salary, j.grade_level
FROM   employees e, job_grades j
WHERE  e.salary BETWEEN j.lowest_sal AND j.highest_sal;
```

### 分类2：自连接 vs 非自连接


- 当table1和table2本质上是同一张表，只是用取别名的方式虚拟成两张表以代表不同的意义。然后两个表再进行内连接，外连接等查询。

**题目：查询employees表，返回“Xxx  works for Xxx”**

```mysql
SELECT CONCAT(worker.last_name ,' works for ' 
       , manager.last_name)
FROM   employees worker, employees manager
WHERE  worker.manager_id = manager.employee_id ;
```


练习：查询出last_name为 ‘Chen’ 的员工的 manager 的信息。

### 分类3： 自连接 vs 外连接

- 内连接: 合并具有同一列的两个以上的表的行, **结果集中不包含一个表与另一个表不匹配的行**

- 外连接: 两个表在连接过程中除了返回满足连接条件的行以外**还返回左（或右）表中不满足条件的行** **，这种连接称为左（或右） 外连接**。没有匹配的行时, 结果表中相应的列为空(NULL)。

- 如果是左外连接，则连接条件中左边的表也称为`主表`，右边的表称为`从表`。

  如果是右外连接，则连接条件中右边的表也称为`主表`，左边的表称为`从表`。

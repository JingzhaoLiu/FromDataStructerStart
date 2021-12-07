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
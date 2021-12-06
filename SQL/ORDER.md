## 1. 排序数据

### 1.1 排序规则

- 使用 ORDER BY 子句排序
  - **ASC（ascend）: 升序**  ascend  默认升序排列
  - **DESC（descend）:降序** descend
- **ORDER BY 子句在SELECT语句的结尾。**

### 1.2 单列排序

```mysql
SELECT   last_name, job_id, department_id, hire_date
FROM     employees
ORDER BY hire_date ;
```


```mysql
SELECT * FROM employees
ORDER BY employee_id DESC;

SELECT   last_name, job_id, department_id, hire_date
FROM     employees
ORDER BY hire_date DESC ;
```

```mysql
# 列的别名只能在ORDER BY 中使用，WHRER中不能使用
SELECT employee_id, last_name, salary*12 annsal
FROM   employees
ORDER BY annsal;

# ORDER BY 在WHERE后面
SELECT * 
FROM employees
WHERE salary > 10000
ORDER BY salary DESC;
```

### 1.3 多列排序

```mysql
SELECT last_name, department_id, salary
FROM   employees
ORDER BY department_id, salary DESC;
```

```
# result
last_name department_id salary
Hartstein	20	13000.00
Fay	20	6000.00
Raphaely	30	11000.00
Khoo	30	3100.00
Baida	30	2900.00
Tobias	30	2800.00
Himuro	30	2600.00
Colmenares	30	2500.00
Mavris	40	6500.00
```


- 可以使用不在SELECT列表中的列排序。
- 在对多列进行排序的时候，`首先排序的第一列必须有相同的列值，才会对第二列进行排序`。如果第一列数据中所有值都是唯一的，将不再对第二列进行排序。
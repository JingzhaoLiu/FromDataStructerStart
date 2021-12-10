# union
UNION 和 UNION ALL 联合查询需要结果集，需要注意的是要根据具体业务选择使用 UNION 还是 UNION ALL 其中 UNION 联合查询已经去除了重复的结果集 UNION ALL 联合查询没有去除重复结果集，但是 UNION ALL查询性能要比 UNION好一些

``` sql
SELECT department_id, manager_id FROM employees WHERE department_id = 100
UNION
SELECT department_id, manager_id FROM departments WHERE manager_id > 100

SELECT department_id, manager_id FROM employees WHERE department_id = 100
UNION ALL
SELECT department_id, manager_id FROM departments WHERE manager_id > 100

```


# join

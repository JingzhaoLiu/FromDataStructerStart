``` sql

# 1.选择工资不在5000到12000的员工的姓名和工资 

SELECT last_name, salary
FROM   employees
WHERE  salary < 5000 || salary > 12000;  

SELECT last_name, salary
FROM   employees
WHERE  salary < 5000 OR salary > 12000;  

SELECT last_name, salary
FROM   employees
WHERE  salary NOT BETWEEN 5000 AND 12000;  



# 2.选择在20或50号部门工作的员工姓名和部门号

SELECT last_name, department_id
FROM   employees
WHERE  department_id = 20 OR department_id = 50;  

SELECT last_name, department_id
FROM   employees
WHERE  department_id IN (20,50);  

# 3.选择公司中没有管理者的员工姓名及job_id  标记
SELECT last_name, job_id
FROM   employees
WHERE manager_id IS NULL;  

SELECT last_name, job_id
FROM   employees
WHERE manager_id <=> NULL;  


# 4.选择公司中有奖金的员工姓名，工资和奖金级别  标记

SELECT last_name, salary , salary * commission_pct
FROM   employees
WHERE NOT commission_pct IS NULL;  

SELECT last_name, salary , salary * commission_pct
FROM   employees
WHERE NOT commission_pct <=> NULL;  

SELECT last_name, salary, commission_pct
FROM employees
WHERE commission_pct IS NOT NULL;


# 5.选择员工姓名的第三个字母是a的员工姓名

SELECT last_name
FROM employees
WHERE last_name LIKE '__a%';

# 6.选择姓名中有字母a和k的员工姓名

SELECT last_name
FROM   employees
WHERE last_name LIKE "%a%" 
AND  last_name LIKE "%k%";  

SELECT last_name
FROM employees
WHERE last_name LIKE '%a%k%' OR last_name LIKE '%k%a%';

# 7.显示出表 employees 表中 first_name 以 'e'结尾的员工信息  标记

SELECT *
FROM employees
WHERE first_name LIKE '%e';

SELECT *
FROM employees
WHERE first_name REGEXP 'e$';

# 8.显示出表 employees 部门编号在 80-100 之间的姓名、工种


SELECT last_name, job_id
FROM   employees
WHERE  department_id BETWEEN 80 AND 100;  

# 9.显示出表 employees 的 manager_id 是 100,101,110 的员工姓名、工资、管理者id

SELECT last_name, salary, manager_id
FROM   employees
WHERE  manager_id IN (100,101,110);  



```

## 05 排序 分页

```  sql
 
#1. 查询员工的姓名和部门号和年薪，按年薪降序,按姓名升序显示

SELECT last_name, department_id, salary * 12 year_sal
from employees
ORDER BY year_sal DESC , last_name 


#2. 选择工资不在 8000 到 17000 的员工的姓名和工资，按工资降序，显示第21到40位置的数据 
SELECT last_name, salary
FROM employees
WHERE salary NOT BETWEEN 8000 AND 17000
ORDER BY salary DESC
LIMIT 20, 20 

#3. 查询邮箱中包含 e 的员工信息，并先按邮箱的字节数降序，再按部门号升序
SELECT first_name, last_name, department_id
FROM employees
WHERE email LIKE "%e%"
# WHRER email REGEXP '[e]'
ORDER BY LENGTH(email) DESC, department_id



``` 
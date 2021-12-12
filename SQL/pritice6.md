``` sql
# 一
# 1.显示所有员工的姓名，部门号和部门名称。
SELECT last_name, e.department_id, department_name
FROM employees e LEFT JOIN departments d
ON e.department_id = d.department_id

# 2.查询90号部门员工的job_id和90号部门的location_id

SELECT e.department_id, e.job_id, d.location_id
FROM employees e , departments d
WHERE d.`department_id` =  90 AND e.`department_id` = 90;

SELECT e.department_id, e.job_id, d.location_id
FROM employees e JOIN departments d
ON d.`department_id` =  90 AND e.`department_id` = 90

SELECT e.department_id, e.job_id, d.location_id
FROM employees e JOIN departments d
ON d.`department_id` = e.`department_id`
WHERE d.`department_id` =  90


# 3.选择所有有奖金的员工的 last_name , department_name , location_id , city
# 4.选择city在Toronto工作的员工的 last_name , job_id , department_id , department_name # 5.查询员工所在的部门名称、部门地址、姓名、工作、工资，其中员工所在部门的部门名称为’Executive’
# 6.选择指定员工的姓名，员工号，以及他的管理者的姓名和员工号，结果类似于下面的格式 employees Emp# manager Mgr#
kochhar 101 king
# 7.查询哪些部门没有员工
# 8. 查询哪个城市没有部门
# 9. 查询部门名为 Sales 或 IT 的员工信息




# 二
#1.所有有门派的人员信息 ( A、B两表共有)
#2.列出所有用户，并显示其机构信息 (A的全集)
#3.列出所有门派 (B的全集)
#4.所有不入门派的人员 (A的独有)
#5.所有没人入的门派 (B的独有)
#6.列出所有人员和机构的对照关系
(AB全有)
#MySQL Full Join的实现 因为MySQL不支持FULL JOIN,下面是替代方法 #left join + union(可去除重复数据)+ right join
#7.列出所有没入派的人员和没人入的门派 (A的独有+B的独有)

``` 

# where、having之间的区别和用法
`where>聚合函数(sum,min,max,avg,count)>having`

列出group by来比较二者。（）因where和having 在使用group by时问的最多）
若须引入聚合函数来对group by 结果进行过滤 则只能用having。（此处不多说，自己想 是先执行聚合函数还是先过滤 然后比对我上面列出的执行顺序 一看便知）

``` sql
select sum(score) from student  where sex='man' group by name having sum(score)>210
```

注意事项 ：
1、where 后不能跟聚合函数，因为where执行顺序大于聚合函数。
2、where 子句的作用是在对查询结果进行分组前，将不符合where条件的行去掉，即在分组之前过滤数据，条件中不能包含聚组函数，使用where条件显示特定的行。
3、having 子句的作用是筛选满足条件的组，即在分组之后过滤数据，条件中经常包含聚组函数，使用having 条件显示特定的组，也可以使用多个分组标准进行分组。

`WHERE子句在GROUP BY分组和聚合函数之前对数据行进行过滤；`
`HAVING子句对GROUP BY分组和聚合函数之后的数据行进行过滤。`
因此，WHERE子句中不能使用聚合函数。例如，以下语句将会返回错误：

``` sql
# 查找人数大于 5 的部门

select dept_id, count(*)
from employee
where count(*) > 5
group by dept_id;
```
由于在执行WHERE子句时，还没有计算聚合函数 count(*)，所以无法使用。正确的方法是使用HAVING对聚合之后的结果进行过滤：

``` sql
-- 查找人数大于 5 的部门
select dept_id, count(*)
from employee
group by dept_id
having count(*) > 5;
```
# grid

``` css
display: grid;

display: inline-grid;

```
注意，设为网格布局以后，容器子元素（项目）的float、display: inline-block、display: table-cell、vertical-align和column-*等设置都将失效。



grid-template-columns属性定义每一列的列宽，grid-template-rows属性定义每一行的行高



### auto-fill 关键字
如果希望每一行（或每一列）容纳尽可能多的单元格，这时可以使用auto-fill关键字表示自动填充
grid-template-columns: repeat(auto-fill, 100px); 


### fr 关键字

为了方便表示比例关系，网格布局提供了fr关键字（fraction 的缩写，意为"片段"）。如果两列的宽度分别为1fr和2fr，就表示后者是前者的两倍

Could you just move a fraction to the right, so I can get by?

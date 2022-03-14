# css容易混淆的点

## 子选择器 (>)
只有子元素才起作用
``` html
div > p {
  color: red;
}


<div>
   <p>this is p</p>   
   <!-- // 子元素会选中  变颜色 -->
   <footer><p>this is p</p></footer>  
   <!-- // 孙子元素不会选中 -->
<div>
```


## 相邻兄弟选择器 (+)

``` html
div + p {
  background-color: yellow;
}


<h1>相邻兄弟选择器</h1>
<p>相邻的同胞选择器（+）选择所有作为指定元素的相邻的同级元素。</p>

<div>
  <p>div 中的段落 1。</p>
  <p>div 中的段落 2。</p>
</div>

<p>段落 3。不在 div 中。</p>
<!-- 选中 -->
<p>段落 4。不在 div 中。</p>
<!-- 不相邻 不选中-->


```


## 通用兄弟选择器 (~)

``` html
div ~ p {
  background-color: yellow;
}
<!-- 只会选中div以后的同级的p元素 -->

<h1>通用兄弟选择器</h1>
<p>通用的兄弟选择器（~）选择指定元素的所有同级元素。</p>

<p>段落 1。</p>
<!-- div之前不会选中 -->

<div>
  <p>段落 2。</p>
  <!-- 不是同级不会选中 -->
</div>

<p>段落 3。</p>  
<!-- // 变颜色 -->
<code>一些代码。</code>
<p>段落 4。</p>  
<!-- // 变颜色 -->
```

## :nth-child

``` html
p:nth-child(2)
{
background:#ff0000;
}
<!-- 不起作用 第二个元素是div -->

p:nth-child(3)
{
background:#ff0000;
}
<!-- 起作用 -->

<h1>这是标题</h1>
<div>第一个段落。</div>
<p>第二个段落。</p>
<!-- 起作用变颜色 -->
<p>第三个段落。</p>
<p>第四个段落。</p>
```
## 除了最后第一个元素加下划线
``` css
:not(:nth-last-child(1)){
    border-bottom: 1px solid red;
}

/* 除了最后第二个元素加下划线 */
:not(:nth-last-child(2)){
    border-bottom: 1px solid red;
}
```


## :nth-of-type(n)

p:nth-of-type(2)	选择作为其父的第二个 <p> 元素的每个 <p> 元素。



## :not(selector)	
:not(p)	选择每个并非p元素的元素

``` html
p {
    color: #000000;
}

:not(p) {
    color: #ff0000;
}


<h1>这是一个标题</h1>
<!-- 起作用变颜色 -->
<p>这是一个段落.</p>
<p>这是另一个段落.</p>

<div>这是div元素的一些文本。</div>
<!-- 起作用变颜色 -->
<a href="//www.runoob.com/" target="_blank">链接到菜鸟教程</a>
<!-- 起作用变颜色 -->
```

## ::first-letter	
p::first-letter	选择每个 <p> 元素的首字母。
## ::first-line	
p::first-line	选择每个 <p> 元素的首行。
## ::selection	
p::selection	选择用户选择的元素部分。


什么是width和height？它们是元素的实际大小么
width 当块级元素（div、h系列、li等）没有设置width属性时，它
将自动撑满，但这并不意味着width可以继承

height 
盒子的属性如果不设置，它将自动被其内容撑开
没有内容，则默认是0

元素实际大小和元素空间尺寸分别指什么？

元素实际大小： width + padding + border
元素空间尺寸： 加上margin


box-sizing属性的作用是什么？

块级元素 width自动撑满
行内元素 width自动收缩

display: none;
visibility: hidden;

### margin的塌陷

- 竖直方向的margin有塌陷现象：小的margin会塌陷到大的margin中，从而不叠加，只以大值为准
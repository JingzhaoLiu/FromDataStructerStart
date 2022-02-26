## css 架构

### OOCSS 面向对象 css

```html
<div class="page-box w100"></div>
<!-- 覆写 w100不更改page-box的代码 把相同的代码进行样式覆写 -->

<!-- 原则 1. 容器与内容分离-->
<div class="content">
  <div class="btn">下一步</div>
</div>
<div class="form">
  <div class="btn">提交信息</div>
</div>
<!-- .content .btn {} 这样btn就被容器content锁死了 form还得写一遍  -->

<!-- 原则 2. 结构（基础对象）与皮肤（装饰对象）分离 -->
<div class="menu skin"></div>

<!-- 原则 3. 面向设计开发 -->

<!-- 感悟：多用组合 -->

<!-- Vue 中组件 = OOCSS -->
<!-- Grid栅格系统 布局组件 -->
```


### BEM
[BEM](https://en.bem.info/)

[CSS命名规范-BEM](https://www.cnblogs.com/coder-zyz/p/6749295.html)

- block
- element
- 修饰符 Modifier

作用: 命名规范、让页面结构清晰

``` html
<div class="menu">
  <div class="menu__tab menu__tab--style1"></div>
  <div class="menu__tab menu__tab--style2"></div>
</div>
<div class="menu menu--style1">
  <div class="menu__tab menu__tab--style1"></div>
  <div class="menu__tab menu__tab--style2"></div>
</div>

<!-- menu: block -->
<!-- menu__tab: element -->
<!-- menu__tab--style2: modifier  element后加两个连线 -->
<!-- menu--style1: modifier block后加两个连线 -->

<!-- 对基础对象进行修正  本质上 就是OOCSS -->

```
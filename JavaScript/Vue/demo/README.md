## css

BEM: footer(块) footer__item（__元素） footer__item--active（--修饰）

字体缩小：

```css
transform: scale(0.5, 0.5);
transform-origin: center top;
```

省略
``` css
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
```

调整位置 也可以用 relative定位的
``` css
position: relative;
top: 4px;

```

图片占位问题  

``` css
.banner{
  height: 0;
  overflow: hidden;
  padding-bottom: 56.24%;
  img{
    width: 100%;
  }
}


/* or */
.banner{
  img{
    width: 100%;
    padding-bottom: 56.24%;  // 图片的宽长比
  }
}
```

### scss: 

- & 的用法  外层的占位符


### iconfont 无法导入，图标显示空白的问题

类名没有加iconfont 图标类名写错了 需要使用官网上的名称

`<i class="iconfont icon-Bell"></i>`

## vue

``` js
// vue绑定class可以和原来的class进行合并
class="footer__item" :class="{'footer__item--active': true}"

// 但是多个条件会报错
class="footer__item" :class="{'footer__item--active': true}" :class="{'footer__item--style': true}"
```
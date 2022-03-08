## 变量

## 嵌套

## 引入（引入文件下划线开头不会转译只导入）

``` scss
@import './_viriables';
```

## 混入

``` scss
// 当前文件混入
@mixin section-block {
  width: $w100;
  height: $h100;
  font-size: $small-font;
  color: darken($text-color, 50%);
}

// 混入文件抽离  导入
@import './_mixin';


.slide{
  // width: $w100;
  // height: $h100;
  // font-size: $small-font;
  // color: darken($text-color, 50%);
  @include section;
  text-align: center;
}

```

## @content

``` scss
@mixin ipad($height) {
  @media screen and (min-width: 768px) {
    height: $height;
    @content;

  }
}

.time{
  width: $w100;
  @include ipad(200px){
    width: 500px;
  }
}
```
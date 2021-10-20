<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>商品列表</title>
</head>
<body>
<h1>商品列表</h1>
<#list goodsList as item>
    ${item.name}--${item.price}--${item.pic}
</#list>
</body>
</html>

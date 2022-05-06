# webpack 基础使用

## 安装和使用

在项目中，我们更多地会把 webpack 作为项目的开发依赖来安装使用，这样可以指定项目中使用的 webpack 版本，方便协同开发：

> 确保你的项目中有 package.json 文件，如果没有可以使用 `npm init` 来创建。

```shell
npm install webpack webpack-cli -D 

# 或者
yarn add webpack webpack-cli -D
```

这样 webpack 会出现在 package.json 中，我们再添加一个 npm scripts：

```json
  "scripts": {
    "start": "webpack"
  },
  "devDependencies": {
    "webpack": "^5.72.0",
    "webpack-cli": "^4.9.2"
  }
```

然后我们创建一个 `./src/index.js` 文件。

``` js
const a = 123;
console.log(a);
const b = a + 123;
console.log('b: ', b);

```

创建好了之后执行 `npm run start` 或者 `yarn start` 命令，你就会发现新增了一个 `dist` 目录，里边存放的是 webpack 构建好的 `main.js` 文件。

从 webpack v4.x 开始，可以不用引入一个配置文件。然而，webpack 仍然还是高度可配置的。

## webpack 的基本概念

webpack 本质上是一个打包工具，它会根据代码的内容解析模块依赖，帮助我们把项目中使用到的多个代码模块（可以是不同文件类型），打包构建成项目运行仅需要的几个静态文件。webpack 有着十分丰富的配置项，提供了十分强大的扩展能力，可以在打包构建的过程中做很多事情。我们先来看一下 webpack 中的几个基本概念。

### 工作模式

零配置执行命令后，构建成功了，但是会有一个警告,提醒我们设置`mode`。

```
WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value.
Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
```

webpack的mode有三种：

- development:开发模式，打包更加快速，省了代码优化步骤
- production:生产模式，打包比较慢，会开启 tree-shaking 和 压缩代码, 不设置mode时默认开启
- none:不使用任何默认优化选项

怎么配置呢？一种：

```json
  "scripts": {
    "start": "webpack --mode development"
  },
  "devDependencies": {
    "webpack": "^5.72.0",
    "webpack-cli": "^4.9.2"
  }
```

还有就是直接写入配置文件，创建配置文件 `webpack.config.js`
``` js
module.exports = {
  mode: 'development'
}
```


### 入口

在多个代码模块中会有一个起始的 `.js` 文件，这个便是 webpack 构建的入口。webpack 会读取这个文件，并从它开始解析依赖，然后进行打包。一开始我们使用 webpack 构建时，默认的入口文件就是 `./src/index.js`。

我们常见的项目中，如果是单页面应用，那么可能入口只有一个；如果是多个页面的项目，那么经常是一个页面会对应一个构建入口。

入口可以使用 `entry` 字段来进行配置，webpack 支持配置多个入口来进行构建：

```js
module.exports = {
  entry: './src/index.js' 
  // index.js 文件打包成dist/main.js 一个文件
}

// 上述配置等同于
module.exports = {
  entry: {
    main: './src/index.js'
  }
}

// 或者配置多个入口
module.exports = {
  entry: {
    index: './src/index.js',
    test: './src/test.js', 
    // ...
  }
  // index.js 打包成dist/index.js  test.js打包成dist/test.js 一共2个文件
}

// 使用数组来对多个文件进行打包
module.exports = {
  entry: {
    main: [
      './src/foo.js',
      './src/bar.js'
    ]
  }
}
```

最后的例子，可以理解为多个文件作为一个入口，webpack 会解析两个文件的依赖后进行打包。

### 输出

webpack 的输出即指 webpack 最终构建出来的静态文件，可以看看上面 webpack 官方图片右侧的那些文件。当然，构建结果的文件名、路径等都是可以配置的，使用 `output` 字段：

```js
module.exports = {
  // ...
  output: {
    path: path.resolve(__dirname, 'dist'), 
    filename: 'bundle.js',   // 一个文件名 可以多个文件打包成这一个文件
  },
}

// 或者多个入口生成不同文件
module.exports = {
  entry: {
    index: './src/index.js',
    test: './src/bar.js',
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist',
  },
}

// 路径中使用 hash，每次构建时会有一个不同 hash 值，避免发布新版本时线上使用浏览器缓存
module.exports = {
  // ...
  output: {
    filename: '[name].js',
    path: __dirname + '/dist/[hash]',
  },
}
```

我们一开始直接使用 webpack 构建时，默认创建的输出内容就是 `./dist/main.js`。

### loader

webpack默认只支持js、json文件, 对于其它格式，它提供一种处理多种文件格式的机制，便是使用 loader。我们可以把 loader 理解为是一个转换器，负责把某种文件格式的内容转换成 webpack 可以支持打包的模块。

举个例子，在没有添加额外插件的情况下，webpack 会默认把所有依赖打包成 js 文件，如果入口文件依赖 .css 的样式文件，那么我们需要 css-loader 来处理 .css 文件，最终把不同格式的文件都解析成 js 代码，以便打包后在浏览器中运行。

当我们需要使用不同的 loader 来解析处理不同类型的文件时，我们可以在 `module.rules` 字段下来配置相关的规则：

```js
module.exports = {
  entry: './src/index.js', 
  module: {
    rules: [
      {
        test: /\.css$/, //匹配所有的 css 文件
        use: [  // use: 对应的 Loader 名称 先执行的放在数组中最后
          'style-loader',  // 把css代码添加到document中（创建style便签，把css代码放入）
          'css-loader' // css代码嵌入js代码中
        ] 
      },
    ],
  }
}

```

上面的配置需要安装依赖后，才能运行

```shell
npm i css-loader style-loader -D // 安装依赖
npm run start  // webpack打包

# 或者
yarn add css-loader style-loader  
yarn start
```




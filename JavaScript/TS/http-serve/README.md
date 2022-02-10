## create Typescript 开发模块的目录

mkdir src; // 创建放 TypeScript 源码的目录
touch src/cli.ts // CLI 命令入口文件
touch src/http-serve.ts // CLI 命令入口文件
mkdir lib; // 转译工具自动创建放 JavaScript 代码的目录
mkdir __tests__; // 单元测试文件目录


## install dev 依赖   devDependencies

``` js
npm install typescript -D;
npm install ts-node -D;
npm install jest@24 -D;
npm install ts-jest@24 -D;
npm install @types/jest -D;
```

## package.json 修改
``` json
{
  ...
  "bin": "lib/cli.js",
  "main": "lib/http-serve.js",
  "files": ["lib"],
  "scripts": {
    "build": "tsc -p tsconfig.prod.json",  // 
    "start": "ts-node src/cli.ts",
    "test": "jest --all"
  },
  ...
}

bin 参数指定了 CLI 命令可执行文件指向的是转译后的 lib/cli.js

main 参数则指定了模块的主文件是转译后的 lib/http-serve.js

files 指定了发布到 NPM 时包含的文件列表

build 命令则指定了使用 tsc 命令可以基于 tsconfig.prod.json 配置来转译 TypeScript 源码

start 命令则指定了使用 ts-node 可以直接运行 TypeScript 源码

test 命令则表示使用 Jest 可以执行所有单测。

```


``` shell
# 开发
npm start 
# 测试
npm test
# 构建
npm run build
```

## 初始化tsconfig 规范TypeScript的行为
tsc --init; // 使用全局

或者

npm install npx -g; // 安装 npx
npx tsc --init; // 或者使用 npx 调用当前目录下 node_modules 目录里安装的 tsc 版本

``` json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "declaration": true,
    "sourceMap": true,
    "outDir": "./lib",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}

```

> `注意：在实际项目中，我们并不经常使用 tsc --init 初始化 tsconfig。`

出于统一和可控性考虑，我们可以将通用的 tsconfig 配置抽离为单独的 NPM 或直接使用第三方封装的配置，再通过 `extends` 参数进行复用，比如可以安装https://www.npmjs.com/package/@tsconfig/node10等，如下代码所示：

```
npm install @tsconfig/node10 -D;
```

在当前模块的 tsconfig.json 中，`我们只需保留路径相关的配置即可，其他配置可以继承自 node_modules 中安装的 tsconfig 模块`，如下代码所示：
```
{
  "extends": "@tsconfig/node10",
  "compilerOptions": {
    "baseUrl": ".",
    "outDir": "./lib"
  }
} 
```

## 接口设计和编码实现

```
npm install @types/node -D; // Node.js 内置模块类型声明文件作为开发依赖安装
npm install commander -S;  // CLI 需要用到的 commander
npm install ecstatic -S;  //处理静态文件请求
```

不幸的是，ecstatic 并不是一个对 TypeScript 友好的模块，因为它没有内置类型声明文件，也没有第三方贡献的 @types/ecstatic 类型声明模块。因此，我们需要在项目根目录下新建一个 *.d.ts 用来补齐缺失的类型声明，如下代码所示：


``` ts
// typings/ecstatic/index.d.ts
declare module 'ecstatic' {
  export default (options?: {
    root?: string;
    baseDir?: string;
    autoIndex?: boolean;
    showDir?: boolean;
    showDotfiles?: boolean;
    humanReadable?: boolean;
    hidePermissions?: boolean;
    si?: boolean;
    cache?: string | number;
    cors?: boolean;
    gzip?: boolean;
    brotli?: boolean;
    defaultExt?: 'html' | string & {};
    handleError?: boolean;
    serverHeader?: boolean;
    contentType?: 'application/octet-stream' | string & {};
    weakEtags?: boolean;
    weakCompare?: boolean;
    handleOptionsMethod?: boolean;
  }) => any;
}
```


ts7016错误： Try `npm i --save-dev @types/ecstatic` if it exists or add a new declaration (.d.ts) file containing `declare module 'ecstatic';`


> tsconfig 新增type类型声明配置
``` json
"typeRoots": [
"./typings",
"./node_modules/@types"
],

```


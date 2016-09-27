#### Installation

```
git clone https:github.com/masongzhi/webpack react-transform.git
npm install
npm run dev
open http://localhost:8080/webpack-dev-server/
```

__react热加载__在创建react工程时十分有用，之前安装过__react-hot-loader__,是通过开另外一个端口监听react JSX代码的变化；在选择上，__react-transform__是一个更好的选择，配置更方便。

原文地址：[Webpack傻瓜指南（三）和React配合开发](https://zhuanlan.zhihu.com/p/20522487 "react-transform") ,或者可以看看[Babel-plugin-react-transform](https://github.com/gaearon/babel-plugin-react-transform) ;

#### 先安装

```
npm install --save-dev babel-plugin-react-transform
```

实现Hot Module Replacement:

```
npm install --save-dev react-transform-hmr
```

#### 配置



现在在webpack里面的config就可以简化了，把那些query参数都删掉，简单了很多：

```
...
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        include: APP_PATH      
    }]
  },
...
```



再安装

```
npm install babel-preset-react-hmre --save-dev
```



赖安装完毕，配置Babel，上面说到把Babel的配置都写在webpack.config.js中，这是一个不好的方法，因为随着Babel的config越来越多，那样会显得非常臃肿，把babel的配置分离出来。

```
{
	"presets": ["react","es2015"],
	"env": {
		"development": {
			"presets": ["react-hmre"]
		}
	}
}
```

执行`npm run dev` ,open https://localhost:8080/webpack-dev-server/



### 注意事项

创建`.babelrc` 的流程，新建一个文档并重命名`.babelrc.` 后面加一个点(或者命令行 touch .babelrc)。
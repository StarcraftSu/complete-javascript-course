const path = require('path');
const copyHtml = require('html-webpack-plugin');
module.exports = {
    entry:'./src/js/index.js',
    module: {
        rules: [
            {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                    //解决async函数的BUG 需要安装babel-runtime作为依赖
                    plugins: ['@babel/plugin-transform-runtime']
                }
            }
            }
        ]
    },
    output: {
        filename: 'js/bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    devServer:{
        contentBase:'./dist'
    },
    plugins:[
        new copyHtml({
            filename:'index.html',
            template:'./src/index.html'
        })
    ]
};
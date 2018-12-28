const path = require('path');
const copyHtml = require('html-webpack-plugin');
module.exports = {
    entry:'./src/js/index.js',
    module: {
    rules: [
        // {
        //     test: /\.tsx?$/,
        //     use: 'ts-loader',
        //     exclude: /node_modules/
        // }
    ]
    },
    // resolve: {
    //     extensions: [ '.tsx', '.ts', '.js' ]
    // },
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
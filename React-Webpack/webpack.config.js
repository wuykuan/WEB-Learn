const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    module: {
        rules: [{
            test: /\.js?$/,
            include: [
                path.resolve(__dirname, "src")
            ],
            loader: 'babel-loader',
            options: {
                presets: [
                    ["es2015", {modules: false}],
                    "stage-0",
                    "react"
                ]
            }
        }]
    },
    plugins: [
        // new HtmlWebpackHarddiskPlugin(),
        new HtmlWebpackPlugin({
            alwaysWriteToDisk: true,
            filename: 'index.html',
            template: './src/views/index.html',     // html模板路径
            // chunks: ['vendor', 'index']  // manifest: 可以理解为模块清单，载货单
        })
    ]
}

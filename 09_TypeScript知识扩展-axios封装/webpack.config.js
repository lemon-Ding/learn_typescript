const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: "development",
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "bundle.js"
    },
    resolve: {
        //默认有".js",".cjs",".json"，新加的.ts防止覆盖都写
        extensions: [".ts", ".js", ".cjs", ".json"]
    },
    devServer: {
        //默认为true
        hot: true,
        //指定端口
        port: 8888,
        // host:"0.0.0.0",
        //浏览器自动打开
        open: true
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "ts-loader"
            },
            {
                test:/\.(png|jpe?g|svg|gif)$/,
                type:"asset/resource"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html"
        })
    ]
}
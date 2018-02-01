const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");

module.exports = {
    resolve: {
        extensions: ['.js', '.ts']
    },
    entry: {
        main: "./src/app/app.ts",
        vendor: "./src/vendor.js"
    },
    entry: {
        polyfills: "./src/polyfills.ts",
        main: "./src/app/app.ts"
    },
    output: {
        path: path.resolve(__dirname, 'dist'), // output directory
        filename: "[name].js" // name of the generated bundle
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: ["style-loader", "css-loader"]
            },
            {
                test: /\.ts$/,
                loader: "awesome-typescript-loader"
            },
            {
                test: /\.ts$/,
                enforce: "pre",
                loader: 'tslint-loader'
            },
            {
                test: /\.html$/,
                loader: "html-loader"
            },
            {
                test: /\.scss$/,
                loader: ["style-loader", "css-loader?sourceMap", "sass-loader?sourceMap"]
            }
        ]
    },
    devtool: "source-map",
    devServer: {
        historyApiFallback: true
    },
    plugins: [
       /* new HtmlWebpackPlugin({
            template: "src/index.html",
            inject: "body"
        }),*/
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        })
    ]
};

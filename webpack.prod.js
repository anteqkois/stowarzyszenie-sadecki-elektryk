const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const common = require('./webpack.common.js');

//const CompressionPlugin = require("compression-webpack-plugin");

module.exports = merge(common, {
    optimization: {
        minimize: true,
        minimizer: [
        `...`,
        new CssMinimizerPlugin(),
        ],
        splitChunks: {
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all'
                }
            }
        }
    },
    mode: 'production',
    //devtool: 'nosources-source-map',
    module: {
        rules: [
        
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/views/index.html',
            chunks: ['index'],
            inject: true,
            minify: true
        }),
    ]   
});
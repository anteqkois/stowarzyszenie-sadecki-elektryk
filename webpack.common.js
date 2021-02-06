const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
    target: ['web', 'es7'],
    entry: {
        index: './src/resources/index.js',
        'all-projects': './src/resources/all-projects.js'
    },
    output: {
        path: path.resolve(__dirname, './src/public'),
        filename: '[name].js'
    },
    module: {
        rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
            }
        },
        {
            test: /\.css$/,
            use: [ MiniCssExtractPlugin.loader, 'css-loader' ],
        },
        {
            test: /\.scss$/,
            use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ]
        },
        {
            test: /\.(png|jpe?g|gif|svg|ico)$/i,
            loader: 'file-loader',
            options: {
                outputPath: 'img',
                name: '[name].[ext]',
            },         
        },
        {
            test: /\.html$/i,
            loader: 'file-loader',
            options: {
                outputPath: '/',
                name: '[name].[ext]',
            },         
            exclude: path.resolve(__dirname, './src/views/index.html')
        },
        ],
    },
    plugins: [
        new  MiniCssExtractPlugin ({
            filename: '[name].css'
        }),
        new BundleAnalyzerPlugin(),
    ]   
};
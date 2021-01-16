const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    //optimization: {
    //  minimize: true,
    //},
    
    //mode: 'development',
    //devtool: 'source-map',
    target: 'node',
    entry: {
        index: './src/resources/index.js',
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
            test: /\.(png|jpe?g|gif|svg)$/i,
            loader: 'file-loader',
            options: {
                outputPath: 'img',
                name: '[name].[ext]',
            },         
        },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/views/index.html',
            chunks: ['index'],
            inject: true,
            minify: false
        }),
        //new HtmlWebpackPlugin({
        //    template: './src/projects.html',
        //    filename: 'projects.html',
        //    inject: false,
        //    minify: false
        //}),
        new  MiniCssExtractPlugin ({
            filename: '[name].css'
        }),
        //new BrowserSyncPlugin({
        //// browse to http://localhost:3000/ during development,
        //// ./public directory is being served
        //host: 'localhost',
        //port: 3000,
        //server: { baseDir: ['./src/public'] }
        //}),
        new BrowserSyncPlugin(
        // BrowserSync options
        {
            // browse to http://localhost:3000/ during development
            host: 'localhost',
            port: 8080,
            // proxy the Webpack Dev Server endpoint
            // (which should be serving on http://localhost:3100/)
            // through BrowserSync
            proxy: 'http://localhost:8080'
        },
        // plugin options
        {
            // prevent BrowserSync from reloading the page
            // and let Webpack Dev Server take care of this
            reload: true
        })
    ]   
};
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
    optimization: {
        //minimize: true,
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
    
    //mode: 'development',
    mode: 'production',
    //devtool: 'source-map',
    target: ['web', 'es7'],
    //target: 'node',
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
        new HtmlWebpackPlugin({
            template: './src/views/index.html',
            chunks: ['index'],
            inject: true,
            minify: false
        }),
        //new HtmlWebpackPlugin({
        //    template: './src/views/all-projects.html',
        //    filename: 'all-projects.html',
        //    chunks: ['index', 'all-project'],
        //    inject: true,
        //    minify: false
        //}),
        new  MiniCssExtractPlugin ({
            filename: '[name].css'
        }),
        new BundleAnalyzerPlugin(),
        //new CompressionPlugin(),
        
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
                port: 8081,
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
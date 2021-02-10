const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    optimization: {
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
    
    mode: 'development',
    module: {
        rules: [
        
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/views/index.html',
            chunks: ['index'],
            inject: true,
            minify: false
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
});
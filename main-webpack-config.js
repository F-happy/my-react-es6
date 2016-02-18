/**
 * webpack main config
 * @authors fuhuixiang
 * @date    2016-02-18
 * @version 1.0.0
 */

'use strict';

const webpack           = require('webpack'),
      path              = require('path'),
      ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (options)=> {

    let outPath = {
        'CDN': options.CDNPath,
        'root': '/static/' + (options.build ? (options.version + '/') : ''),
        'css': options.cssPath + '/',
        'font': options.fontPath + '/',
        'image': options.imagesPath + '/',
        'js': options.jsPath + '/'
    };

    let loader = [
        {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react']
            }
        },
        {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
        },
        {
            test: /\.(jpg|png)$/,
            loader: 'url-loader?limit=8192&name=' + outPath.root + outPath.image + '[name].[ext]'
        },
        {
            test: /\.ttf$/,
            loader: 'file-loader?name=' + outPath.root + outPath.font + '[name].[ext]'
        },
        {
            test: /\.html$/,
            loader: 'file-loader?name=[name].[ext]'
        }
    ];

    if (options.build) {
        loader.push({
            test: /\.html$/,
            loader: 'string-replace',
            query: {
                multiple: [
                    {search: 'static/css/', replace: outPath.CDN + outPath.root},
                    {search: 'static/js/', replace: outPath.CDN + outPath.root}
                ]
            }
        })
    }

    return {
        entry: [
            'webpack/hot/only-dev-server',
            path.resolve(__dirname, options.mainJsPath)
        ],
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: outPath.root + outPath.js + options.outJsName,
            publicPath: options.build ? outPath.CDN : ''
        },
        module: {
            loaders: loader
        },
        resolve: {
            extensions: ['', '.js', '.json']
        },
        plugins: [
            new webpack.DefinePlugin({
                "process.env": {
                    NODE_ENV: JSON.stringify("production")
                }
            }),
            new ExtractTextPlugin(outPath.root + outPath.css + options.outStyleName,
                {allChunks: true}
            )
        ]
    }
};

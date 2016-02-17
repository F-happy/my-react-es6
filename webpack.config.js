const webpack           = require("webpack"),
      path              = require('path'),
      ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: [
        'webpack/hot/only-dev-server',
        path.resolve(__dirname, './app/js/index.js')
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "js/main.js"
    },
    module: {
        loaders: [
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
                // Passing indentedSyntax query param to node-sass
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
            },
            {   test: /\.(jpg|png)$/,
                loader: "url-loader?limit=8192&name=/images/[name].[ext]"
            },
            {   test: /\.ttf$/,
                loader: "file-loader?name=/font/[name].[ext]"
            },
            {   test: /\.html$/,
                loader: "file-loader?name=[name].[ext]"
            }
        ]
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
        new ExtractTextPlugin("css/style.css", {allChunks: true})
    ]
};

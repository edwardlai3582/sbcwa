var path = require('path');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
    entry: ['webpack/hot/dev-server',path.resolve(__dirname, 'app/app.js')],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/, 
                loader: 'babel-loader',
                query:
                  {
                    presets:['react','es2015']
                  }
            },
            // SASS
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css!sass!postcss')
            }     
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css', {
            allChunks: true
        })
    ],
    postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ]
};

module.exports = config;
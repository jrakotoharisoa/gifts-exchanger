const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var CircularDependencyPlugin = require('circular-dependency-plugin');
const pack = {
    context: __dirname,
    entry: {
        app: './src/',
        vendor: [
            'redux',
            'react',
            'react-dom',
            'react-redux'
        ]
    },
    output: {
        path: path.resolve('./dist'),
        filename: '[name].[hash].js',
    },
    resolve: {
        extensions: ['', '.js', '.ts', '.tsx'],
    },
    postcss: function () {
        return [require('precss'), require('autoprefixer')];
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                include: /src/,
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            },
            { test: /\.jpg$/, loader: 'file' }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './index.html' }),
        new CommonsChunkPlugin('vendor', '[name].[hash].js'),
        new CopyWebpackPlugin([{ from: 'src/images', to: 'images' }]),
        new CircularDependencyPlugin({
            // exclude detection of files based on a RegExp
            exclude: /a\.js|node_modules/,
            // add errors to webpack instead of warnings
            failOnError: false
        })
    ],
};

module.exports = pack;
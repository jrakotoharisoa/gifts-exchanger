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
        modules: [
            path.join(__dirname, "src"),
            "node_modules"
        ],
        extensions: ['.ts', '.tsx', '.js'],
    },
    // postcss: function () {
    //     return [require('precss'), require('autoprefixer')];
    // },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "sass-loader" },
                ]
            },
            {
                test: /\.css$/,
                use: [
                    { loader:'style-loader'},
                    {
                        loader:'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                ]
            },
            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader:'url-loader',
                        options: {
                            limit: 10000,
                            mimetype: 'application/font-woff'
                        }
                    }
                ]
            },
            {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader:'url-loader',
                        options: {
                            limit: 10000,
                            mimetype: 'application/font-woff'
                        }
                    }
                ]
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader:'url-loader',
                        options: {
                            limit: 10000,
                            mimetype: 'application/octet-stream'
                        }
                    }
                ]
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file-loader"
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader:'url-loader',
                        options: {
                            limit: 10000,
                            mimetype: 'image/svg+xml'
                        }
                    }
                ]
            },
            { test: /\.jpg$/, loader: 'file-loader' }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './index.html' }),
        new CommonsChunkPlugin({
            name: 'vendor',
            filename: '[name].[hash].js'
        }),
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
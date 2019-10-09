const webpack = require('webpack');
const path = require('path');
const glob = require('glob');
const devServer = require('webpack-dev-server');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

var config = {
    mode: 'development',
    watch: true,
    entry: glob.sync('./src/scripts/components/*.js'),
    output: {
        path: path.resolve(__dirname, './dist/styles'),
        filename: 'bundle.css'
    },
    devServer: {
        contentBase: path.resolve(__dirname, './src')
    },
    module: {
        rules: [
            {
                test: /\.(css|sass|scss)$/,
                use:[
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    'css-loader',
                    'sass-loader',
                    'style-loader',
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: './dist/bundle.css'
        }),
    ],
};

module.exports = config;
const webpack = require('webpack');
const path = require('path');
const glob = require('glob');
const devServer = require('webpack-dev-server');


var config = {
    mode: 'development',
    watch: true,
    entry: glob.sync('./src/**/*.css'),
    output: {
        path: path.resolve(__dirname, './src/scripts'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, './src')
    }
};

module.exports = config;
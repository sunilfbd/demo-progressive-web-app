const webpack = require('webpack');
const path = require('path');


var config = {
    mode: 'development',
    watch: true,
    entry: {

    },
    output: {
        path: path.resolve(__dirname, './src/scripts'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, './src'),
        compress: true,
        port: 9000
    }
};

module.exports = config;
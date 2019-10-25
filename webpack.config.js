const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {

  entry: ['./src/scripts/components/header.js', './src/styles/bundle.scss'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/*', '!static-files*']
    }),
    new HtmlWebpackPlugin({
        template: './src/templates/index.html'
    }),
    new MiniCssExtractPlugin({
        filename: 'bundle.css'
    })
  ],
  mode: 'development',
  watch: true,
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    historyApiFallback: true,
    compress: true,
    port: 8080,
    open: "Google Chrome",
    watchContentBase: true
  },
  module: {
    rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        {
            // Apply rule for .sass, .scss or .css files
            test: /\.(sa|sc|c)ss$/,
      
            // Set loaders to transform files.
            // Loaders are applying from right to left(!)
            // The first loader will be applied after others
            use: [
                    {
                    // After all CSS loaders we use plugin to do his work.
                    // It gets all transformed CSS and extracts it into separate
                    // single bundled file
                    loader: MiniCssExtractPlugin.loader
                    },
                    {
                        // This loader resolves url() and @imports inside CSS
                        loader: 'css-loader',
                    },
                    {
                        // Then we apply postCSS fixes like autoprefixer and minifying
                        loader: 'postcss-loader',
                        options: {
                          options: {},
                        }
                    },
                    {
                        // First we transform SASS to standard CSS
                        loader: "sass-loader",
                        options: {
                            implementation: require('sass')
                        }
                    }
                 ]
          }
    ]
  }
};
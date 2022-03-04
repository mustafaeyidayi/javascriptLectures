const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const { dirname } = require('path');
const webpack=require('webpack');

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html',
        minify: {
            removeComments: true,
            removeAttributeQuotes: true,
            collapseWhitespace: true
        }
    }), new MiniCssExtractPlugin({
        filename: '[name].[hash:4].css'
    }),
    new CleanWebpackPlugin(),
    new webpack.ProgressPlugin()
    ],
    module: {
        rules: [
           
            {
              test: /\.s[ac]ss$/i,
              use: [
                // Creates `style` nodes from JS strings
                //"style-loader",
                MiniCssExtractPlugin.loader,
                // Translates CSS into CommonJS
                "css-loader",
                // Compiles Sass to CSS
                "sass-loader",
              ],
            },
        
            
          ],
      },

})
const path = require('path');
const config = require('./config');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        filename: "./js/bundle.js",
    },
    optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})]
    },
    devtool: "source-map",
    resolve: {
        alias: {
            "@": path.resolve(__dirname, './src/'),
            "js": path.resolve(__dirname, './src/assets/js'),
            "public": path.resolve(__dirname, './src/assets/'),
            "lib/js": path.resolve(__dirname, './src/assets/lib/js')
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            minimize: true,
                            interpolate: true
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|ico|svg)/i,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            name: "./images/[hash].[ext]",
                            limit: 10000
                        }
                    },
                    {
                        loader: "img-loader"
                    }
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }
                }]
            }
        ]
    },
    plugins: [
        ...config.HtmlWebpackPlugin,
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new CopyWebpackPlugin([{ from: './src/assets/icons', to: './icons' }])
    ]
};
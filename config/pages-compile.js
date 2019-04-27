const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = [
    new HtmlWebPackPlugin({
        title: 'Start theme',
        filename: 'index.html',
        template: './src/index.html'
    })
];
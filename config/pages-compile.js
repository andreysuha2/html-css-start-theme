const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = [
    new HtmlWebPackPlugin({
        filename: 'index.html',
        template: './src/index.html'
    })
];
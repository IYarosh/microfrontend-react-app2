const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        libraryTarget: 'umd'
    },
    mode: 'development',
    plugins: [
        new htmlWebpackPlugin({ template: path.resolve(__dirname, 'index.html') })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'index.js')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    }
}
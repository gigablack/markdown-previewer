const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const cleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/index.jsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'dist')
    },
    module: {
        rules:[
            {
                test: /\.jsx?$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use:['style-loader','css-loader'],
                exclude: /node_modules/
            },
            {
                test:/\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                use: 'url-loader'
            }
        ]
    },
    devServer: {
        open: true,
        contentBase: path.resolve(__dirname,'dist'),
        port: 3000
    },
    plugins: [
        new cleanWebpackPlugin(['dist']),
        new htmlWebpackPlugin({
            inject: false,
            title: 'Markdown Previewer',
            template: require('html-webpack-template'),
            appMountId: 'root',
            scripts: ['https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js']
        })
    ],
    devtool: 'inline-source-map'
}
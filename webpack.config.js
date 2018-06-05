const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/index.js',
        main1: './src/main.js',
        common: [
            './src/1.js',
            './src/2.js',
            './src/3.js',
        ]
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist/js'),
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                    test: /\.css$/,
                    use: [
                        'style-loader',
                        'css-loader'
                        ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(gif|png|jpg|woff|svg|ttf|eot)\??.*$/,
                // loader: "style-loader!css-loader"
                // loader: ExtractTextPlugin.extract("style-loader", "css-loader")
                loader: {
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name: './resource/[name].[ext]'
                    }
                }
                // loader: 'url-loader?limit=8192&name=[name].[ext]'
            }
        ]
    },
    resolve: {
        alias: {
            videojs: 'video.js',
            WaveSurfer: 'wavesurfer.js'
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: `index.html`, // 生成文件位置
            template: 'src/template/index.html', // 模版文件位置
            chunks: ['app'], // 绑定对应打包的JS文件
        }),
        new webpack.ProvidePlugin({
            videojs: 'video.js/dist/video.cjs.js',
            RecordRTC: 'recordrtc'
        })
    ],
};
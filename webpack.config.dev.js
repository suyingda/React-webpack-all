
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'assets/js/main.js',
        //所有资源的输出路径，而且一定是/ 结尾
        publicPath:'./'
    }, 
    plugins: [ //插件应用  
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html'
        }),
        new CleanWebpackPlugin(['dist'])  //删除dist 每次打包
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                    /* options: {
                        presets: ['react', 'env'],
                        plugins: ['transform-object-rest-spread']
                    } */
                }]   //需要安装babel-loader  babel-core
                ,
                exclude:[path.resolve(__dirname,'node_modules')]
            },
            {
                test: /\.css$/,
                use: ['style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            module: true,
                            localIdentName: '[path]-[name]-[local]-[hash:base64:6]'
                        }
                    }
                ],
                exclude: [
                    path.resolve(__dirname, 'node_modules'),
                    path.resolve(__dirname, 'src/common')
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                include: [
                    path.resolve(__dirname, 'node_modules'),
                    path.resolve(__dirname, 'src/common')
                ]
            },
            {
                test: /\.scss$/,
                use: ['style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            module: true,
                            localIdentName: '[name]-[local]-[hash:base64:6]'
                        }
                    },
                    'sass-loader'
                ],
                exclude: [
                    path.resolve(__dirname, 'node_modules'),
                    path.resolve(__dirname, 'src/common')
                ]
            },
            {
                test: /\.scss$/,
                use: ['style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            module: true,
                            localIdentName: '[name]-[local]-[hash:base64:6]'
                        }
                    },
                    'sass-loader'
                ]

            },
            /*  {  
                 test: /\.scss$/,
                 use: ['style-loader',
                     {
                         loader:'css-loader',
                         options: {
                             module: true,
                             localIdentName: '[name]-[local]-[hash:base64:6]'
                         }
                     },
                     'sass-loader'
                 ]
             }, */
            {
                test: /\.less$/,
                use: ['style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            module: true,
                            localIdentName: '[name]-[local]-[hash:base64:6]'
                        }
                    },
                    'less-loader'
                ],
                exclude: [
                    path.resolve(__dirname, 'node_modules'),
                    path.resolve(__dirname, 'src/common')
                ]
            },
            {
                test: /\.less$/,
                use: ['style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            module: true,
                            localIdentName: '[name]-[local]-[hash:base64:6]'
                        }
                    },
                    'less-loader'
                ]

            },
            {
                test: /\.(jpg|png|gif|jpeg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name:'assets/img/[name]_[hash].[ext]'
                    }
                }]
            }
        ]
    },
    devServer: {
        open: false,
        port: 9000,
        contentBase:'./src/common',
        //服务器打包资源输出路径
        publicPath:'/'
    }
};
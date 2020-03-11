const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports = {
    mode:"development",
    entry:{
        app:"./src/index.js",
     //   print:"./src/print.js"
    } ,
    devtool:"(none)",
    devServer:{
        contentBase:"./dist",
        hot:true
    },
    output:{
        filename:"[name].bundle.js",
        path:path.resolve(__dirname,"dist"),
        publicPath:"/"
    },
    plugins:[
        new CleanWebpackPlugin({cleanStaleWebpackAssets:true}),
        new HtmlWebpackPlugin({title:'Output Management'}),
        new webpack.NamedChunksPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test:/\.(png|svg|jpg|gif)$/,
                use:[
                    'file-loader',
                    {
                        loader:'image-webpack-loader',
                        options:{
                            bypassOnDebug:true,
                            disable:true
                        }
                    }
                ]
            },
            {
                test:/\.(csv|tsv)$/,
                use:[
                    'csv-loader'
                ]
            },
            {
                test:/\.xml$/,
                use:[
                    "xml-loader"
                ]
            }
        ]
    }
};
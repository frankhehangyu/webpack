const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
    mode:"development",
    entry:{
        app:"./src/index.js",
        print:"./src/print.js"
    } ,
    devtool:"eval ",
    output:{
        filename:"[name].bundle.js",
        path:path.resolve(__dirname,"dist")
    },
    plugins:[
        new CleanWebpackPlugin({cleanStaleWebpackAssets:true}),
        new HtmlWebpackPlugin({title:'Output Management'})
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
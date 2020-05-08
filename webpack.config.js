const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./index.js",
    output: {
        path: path.resolve(__dirname,"./dist"),
        filename: "bundle.[name].js"
    },
    devtool: 'inline-source-map',   // 代码追踪
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader",
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    {
                        loader:"css-loader",
                        options: {
                            modules: true
                        }
                    },

                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,"./public/index.html")
        })
    ],
    devServer: {
        port: 3003,
        hot: true,
        contentBase: path.resolve(__dirname,"./public"),
        proxy: {
            "/api": {
              target: "http://localhost:3004",
              pathRewrite: {"^/api" : ""}
            }
        }
    }
}

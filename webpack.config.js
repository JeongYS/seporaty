const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.tsx",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", "css"],
        alias: {
            "@res": path.resolve(__dirname, "res"),
            "@src": path.resolve(__dirname, "src"),
            "@seporaty":path.resolve(__dirname, "seporaty"),
        },
    },
    mode: "development",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                // exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader",
                    },
                ],
            },
        ],
    },
    devServer: {
        historyApiFallback: true,
        host: "localhost",
        hot: true,
        port: 8080,
    },
    plugins: [new HTMLWebpackPlugin({ template: "./public/index.html", filename: "index.html" })],
};

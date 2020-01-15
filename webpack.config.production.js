const merge = require("webpack-merge");
const TerserPlugin = require("terser-webpack-plugin");

const common = require('./webpack.config.common');


module.exports = merge(common, {
    mode: "production",
    output: {
        filename: "bundle.min.js"
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    output: {
                        comments: false
                    }
                },
                extractComments: false,
            })
        ]
    }
});

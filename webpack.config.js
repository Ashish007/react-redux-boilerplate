const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlWebpackPlugin = new HtmlWebpackPlugin({
    hash: true,
    title: "React with Redux",
    template: './src/index.html',
    // filename: './dist/index.html'
})

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader'
                },
                ]
            },
            {
                //rule 2
                test: /\.s[ac]ss$/i,
                use: [{
                    loader: 'style-loader'
                },
                {
                    loader: 'css-loader',
                    options: {
                        modules: {
                            localIdentName: "[name]__[local]___[hash:base64:5]"
                        }
                    }
                },
                {
                    loader: 'sass-loader'
                }
                ]
            },
            {
                //rule 3
                test: /\.(png|jpe?g|gif)$/i,
                use: [{
                    loader: 'file-loader'
                }]
            }
        ]
    },
    plugins: [htmlWebpackPlugin]
}
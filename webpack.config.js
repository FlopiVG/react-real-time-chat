const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src/index.jsx'),
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react', 'stage-2']
                }
            },
            {
                test: /\.sass$/,
                include: path.resolve(__dirname, 'src'),
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    resolve: {
        modules: ['node_modules', 'src'],
        extensions: ['.js', '.jsx']
    },
    devtool: 'source-map',
    devServer: {
        historyApiFallback: true,
        contentBase: './'
    }
}
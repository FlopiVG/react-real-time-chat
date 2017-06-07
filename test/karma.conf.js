const webpack = require('webpack');

module.exports = (config) => {
    config.set({
        browsers: ['Chrome'],
        singleRun: true,
        frameworks: ['mocha'],
        files: [
            'tests.webpack.js'
        ],
        preprocessors: {
            'tests.webpack.js': ['webpack', 'sourcemap']
        },
        reporters: ['dots'],
        webpack: {
            devtool: 'inline-source-map',
            module: {
                loaders: [
                    {
                        test: /\.js$/, 
                        loader: 'babel-loader',
                        query: {
                            presets: ['es2015', 'react', 'stage-2']
                        }
                    }
                ]
            }
        },
        webpackServer: {
            noInfo: true
        }
    });
};
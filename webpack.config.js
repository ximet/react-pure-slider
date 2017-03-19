const path = require('path');
const webpack = require('webpack');

const webpackConfig = {
    context: __dirname + '/demo',
    entry: './app.js',
    output: {
        path: path.join(__dirname, 'demo'),
        filename: 'bundle.js'
    },

    devtool: 'source-map',

    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            }
        ]
    }
};

module.exports = webpackConfig;

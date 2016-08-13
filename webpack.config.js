const path = require('path');

const APP_DIR = path.resolve(__dirname, 'app');

module.exports = {
    entry: [
      'webpack-dev-server/client?http://127.0.0.1:8080',
      'webpack/hot/only-dev-server',
      APP_DIR + '/index.jsx',

    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /(\.js|\.jsx)$/,
                exclude: /(node_modules)/,
                loaders: ['react-hot', 'babel']
            },
            {
              test: /(\.scss|\.css)$/,
              loader: 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass'
            }
        ]
    },
    resolve: {
      extensions: ['', '.js', '.jsx', '.json', '.scss'],
    },
    devtool: 'inline-source-map',
    devServer: {
      noInfo: true,
      hot: true,
      inline: true,
      contentBase: "./build",
      historyApiFallback: true
    },
    plugins: []
};

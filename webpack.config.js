module.exports = {
    module: {
        rules: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader?optional=runtime&cacheDirectory=true',
                    options: {
                        presets: ['@babel/preset-env'],
                    }
                }
            }
        ]
    }
};

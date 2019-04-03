module.exports = {
    entry: "./src/index.ts",
    module: {
        rules: [
            {
                test: /\.([jt])s/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader?optional=runtime&cacheDirectory=true",
                    options: {
                        presets: ["@babel/preset-env", "@babel/typescript"],
                        plugins: [
                            "@babel/proposal-class-properties",
                            "@babel/proposal-object-rest-spread"
                        ]
                    }
                }
            }
        ]
    }
};

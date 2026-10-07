module.exports = function (config) {
  config.set({
    frameworks: ["jasmine"],
    files: ["src/**/*.spec.jsx"],
    preprocessors: {
      "src/**/*.spec.jsx": ["webpack"],
    },
    webpack: {
      module: {
        rules: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: "babel-loader",
          },
        ],
      },
      resolve: { extensions: [".js", ".jsx"] },
    },
    reporters: ["progress"],
    browsers: ["Chrome"],
    singleRun: true,
  });
};

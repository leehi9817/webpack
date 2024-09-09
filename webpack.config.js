const path = require("path");
module.exports = {
  mode: "development",
  entry: "./source/index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "index_bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader", // 가져온 파일을 webpage안에 style 태그로 주입해주는 로더
          "css-loader", // css 파일을 읽어와서 webpack으로 가져오는 로더
        ],
      },
    ],
  },
};

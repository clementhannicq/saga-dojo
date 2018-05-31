const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const babelConf = {
  babelrc: false,
  plugins: ["react-native-web"],
  presets: [["env", {
    "targets": {
      "browsers": ["chrome >= 65", "ie >= 11", "firefox >= 58"]
    }
  }], "flow", "react"]
};

module.exports = {
  entry: {
    app: ['babel-polyfill', 'whatwg-fetch', './src/index.tsx'],
  },
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].[hash].css",
      chunkFilename: "[id].[hash].css"
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: babelConf,
        }
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "awesome-typescript-loader",
            options: {
              errorsAsWarnings: true,
              useBabel: true,
              babelOptions: babelConf,
              transpileOnly: false,
              configFileName: path.resolve(__dirname, 'tsconfig.json')
            }
          }],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg|ttf|otf|woff2?|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'graphql-tag/loader',
        }]
      },
    ]
  },
  output: {
    filename: '[name].[hash].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    modules: [
      "node_modules",
      "src"
    ],
    extensions: ["ttf", ".web.js", ".js", ".web.tsx", ".tsx", ".web.ts", ".ts"]
  }
};

const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

const config = {
  mode: "development",

  // Adding entry point - index.js
  entry: "./public/index.js",
  // Adding the output directory and filename
  output: {
    path: __dirname + "/public/dist",
    filename: "bundle.js",
  },
  // Adding plugins - WebpackPwaManifest
  plugins: [
    new WebpackPwaManifest({
      fingerprints: false,
      inject: false,
      name: "Budget Tracker App",
      short_name: "Budget Tracker",
      description: "An application that allows a user to add expenses and deposits to their budget with or without a connection",
      background_color: "#1d9186",
      theme_color: "#ffffff",
      start_url: "/",
      icons: [{
        src: path.resolve("public/icons/icon-192x192.png"),
        sizes: [192, 512],
        destination: path.join("assets", "icons")
      }]
    })
  ],
  // Adding module - babel-loader
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  }
};
module.exports = config;
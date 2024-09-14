var webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
var path = require("path");

module.exports = {
  mode: "production",
  entry: {
    javascript: "./src/cheerio-test.js",
    react: "./src/cheerio-react-test.jsx",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "commonjs",
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        // by default, it resolves `node_modules`
      },
    ],
  },
  stats: {
    colors: true,
  },
  plugins: [new CleanWebpackPlugin()],
  externals: /^(k6|https?\:\/\/)(\/.*)?/,
};

//////////




/////////

// const { declare } = require("@babel/helper-plugin-utils");

// var TCE = declare((api) => {
//   console.log('runnign transform-create-element 1')

//   api.assertVersion(7);


//   return {
//     name: "transform-create-element",
//     visitor: {
//       CallExpression(path) {
//         const callee = path.get("callee");
//         const args = path.get("arguments");

//         console.log('runnign transform-create-element 2')


//         // Check if it's e.createElement(c, null)
//         if (
//           callee.isMemberExpression() &&
//           callee.get("object").isIdentifier({ name: "e" }) &&
//           callee.get("property").isIdentifier({ name: "createElement" }) &&
//           args.length === 2 &&
//           args[1].isNullLiteral()
//         ) {
//           const component = args[0]; // `c`

//           // Replace with `c(null)`
//           path.replaceWith(
//             api.types.callExpression(component.node, [api.types.nullLiteral()])
//           );
//         }
//       },
//     },
//   };
// });

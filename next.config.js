const withSass = require("@zeit/next-sass");
const withCss = require("@zeit/next-css");
const withTM = require("next-transpile-modules");

module.exports = withCss(
  withSass(
    withTM({
      cssModules: true,
      cssLoaderOptions: {
        localIdentName: "[local]___[hash:base64:5]"
      }
    })
  )
);

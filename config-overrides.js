const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackAlias
} = require("customize-cra");
const path = require("path");

// 关闭sourcemap
process.env.GENERATE_SOURCEMAP = "false";

// 自定义配置cra，并且覆盖antd原始的Less变量
module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { "@primary-color": "#c94642" }
  }),
  addWebpackAlias({
    "@": path.resolve(__dirname, "src")
  })
);

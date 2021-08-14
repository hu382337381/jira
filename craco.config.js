/*
 * @Author       : 胡昊
 * @Date         : 2021-08-13 18:03:49
 * @LastEditors  : 胡昊
 * @LastEditTime : 2021-08-14 10:05:19
 * @FilePath     : /jira/craco.config.js
 * @Description  :
 */
const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "rgb(0, 82, 204)",
              "@font-size-base": "16px",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};

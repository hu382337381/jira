/*
 * @Author       : 胡昊
 * @Date         : 2021-08-25 14:17:36
 * @LastEditors  : 胡昊
 * @LastEditTime : 2021-08-25 14:18:14
 * @FilePath     : /jira/src/wdyr.ts
 * @Description  :
 */

import React from "react";

if (process.env.NODE_ENV === "development") {
  const whyDidYouRender = require("@welldone-software/why-did-you-render");
  whyDidYouRender(React, {
    trackAllPureComponents: false,
  });
}

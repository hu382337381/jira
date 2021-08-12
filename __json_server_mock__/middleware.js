/*
 * @Author       : 胡昊
 * @Date         : 2021-08-12 16:48:43
 * @LastEditors  : 胡昊
 * @LastEditTime : 2021-08-12 16:52:44
 * @FilePath     : /jira/__json_server_mock__/middleware.js
 * @Description  :
 */

module.exports = (req, res, next) => {
  if (req.method === "POST" && req.path === "/login") {
    if (req.body.username === "jack" && req.body.password === "123456") {
      return res.status(200).json({
        user: {
          token: "success123",
        },
      });
    } else {
      return res.status(400).json({ message: "用户名或密码错误" });
    }
  }
  next();
};

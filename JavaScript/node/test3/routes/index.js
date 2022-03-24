
const combineRouters = require("koa-combine-routers");

const test = require("./test");
const users = require("./users");

const router = combineRouters(test, users);

module.exports = router;

"use strict";
exports.__esModule = true;
var pino_1 = require("pino"); //Logs our requests to the console
var dayjs_1 = require("dayjs"); //Format the timestamp from the logger
var log = (0, pino_1["default"])({
    base: {
        pid: false
    },
    timestamp: function () { return "\"time\": ".concat((0, dayjs_1["default"])().format()); }
});
exports["default"] = log;

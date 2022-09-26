"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var userSchema = new mongoose_1["default"].Schema({
    userId: { type: String },
    name: { type: String },
    email: { type: String },
    userAssets: { type: [], ref: "Assets" },
    userWalletBalance: { type: Number, ref: "Wallet" },
    createdAt: { type: Date }
});
var User = mongoose_1["default"].model("User", userSchema);
exports["default"] = User;

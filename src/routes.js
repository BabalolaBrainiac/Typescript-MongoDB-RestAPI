"use strict";
exports.__esModule = true;
var userSchema_1 = require("./schema/userSchema");
//Create an instance of Express as our application
function routes(app) {
    //Route Test
    app.get("/test", function (req, res, next) {
        res.status(200).json({
            Message: "Route and Application Test Successful"
        });
    });
    //User Assets
    var arr = [
        "BTC",
        "DOGE",
        "FTM",
        "APX",
        "BSD",
        "GTH",
        "JAS",
        "LMAO",
        "LOL",
        "PSI",
        "SPS",
        "SLS",
        "DFD",
        "HDJ",
    ];
    //Create User
    app.post("/user/create", function (req, res, next) {
        //Hard Coding User Information instead of requesting from incoming Request Body for now
        var newUser = new userSchema_1["default"]({
            userId: "010",
            name: "Rand Name10",
            email: "test10@gmail.com",
            userAssets: [arr],
            userWalletBalance: 1000000,
            createdAt: new Date()
        });
        try {
            newUser.save();
        }
        catch (error) {
            res.status(400).json({
                errorCode: 400,
                errorMessage: "User Could Not Be Created"
            });
        }
        res.status(201).json({
            Message: "User Successfully Created"
        });
    });
}
//Delete User(Can only be called by Level 2 CX agents)
//Update User Information(Can only be called by Level 2 CX Agents)
//Report User for Fraud(Can be called by all level CX Agents)
exports["default"] = routes;

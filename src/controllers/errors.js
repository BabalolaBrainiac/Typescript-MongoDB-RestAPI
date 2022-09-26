"use strict";
exports.__esModule = true;
exports.errorHandler = void 0;
var errorHandler = function (err) {
    var code = err.code;
    if (code === 404) {
        return {
            errorMessage: "Resource Not Found",
            errorCode: "Not Found"
        };
    }
    switch (code) {
        case 400: {
            return {
                errorMessage: "Bad Request",
                errorCode: "Not Found"
            };
        }
        case 401: {
            return {
                errorMessage: "You are Unauthorized to access this Resource",
                errorCode: "Authorization Error"
            };
        }
        case 500: {
            return {
                errorMessage: "Internal Server Error",
                errorCode: "Server Error"
            };
        }
        case 502: {
            return {
                errorMessage: "Bad Gateway Error",
                errorCode: "Authorization Error"
            };
        }
    }
};
exports.errorHandler = errorHandler;

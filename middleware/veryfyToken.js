"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const util_1 = require("util");
exports.default = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    try {
        const token = (_c = (_b = (_a = req.headers) === null || _a === void 0 ? void 0 : _a.authorization) === null || _b === void 0 ? void 0 : _b.split(" ")) === null || _c === void 0 ? void 0 : _c[1];
        const TOKEN_SECRET = process.env.TOKEN_SECRET;
        if (!token) {
            return res.status(401).json({
                status: "Error",
                error: "You are not logged in",
            });
        }
        const decode = yield (0, util_1.promisify)(jsonwebtoken_1.default.verify)(token, TOKEN_SECRET);
        console.log(decode);
        req.user = decode;
        next();
    }
    catch (error) {
        res.status(400).json({
            status: "Error",
            message: "Invalid Token",
            error: error.message,
        });
    }
});

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generateToken = (userInfo) => {
    const payLoad = {
        email: userInfo.email,
        role: userInfo.role,
        _id: userInfo._id,
    };
    const token = jsonwebtoken_1.default.sign(payLoad, process.env.TOKEN_SECRET, {
        expiresIn: "1days",
    });
    return token;
};
exports.generateToken = generateToken;
//# sourceMappingURL=token.js.map
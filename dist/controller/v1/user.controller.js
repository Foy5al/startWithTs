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
exports.deleteUser = exports.updateUser = exports.getUser = exports.getUsers = exports.getMe = exports.login = exports.signup = void 0;
const utilityFunction_1 = require("../../utils/utilityFunction");
const token_1 = require("../../utils/token");
const common_controller_1 = require("../../controller/v1/common.controller");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const utilityFunction_2 = require("../../utils/utilityFunction");
const user_service_1 = require("../../service/v1/user.service");
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let data = req.body;
        const email = yield (0, utilityFunction_1.defaultValeAdd)(req.body.email);
        data.email = email;
        const result = yield (0, user_service_1.signupService)(data);
        res.status(200).json({
            status: "success",
            message: "User register successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            status: "error",
            message: "User couldn't register",
            error: error.message,
        });
    }
});
exports.signup = signup;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { email, password } = req.body;
        email = yield (0, utilityFunction_1.defaultValeAdd)(email);
        if (!email || !password) {
            return res.status(400).json({
                status: "error",
            });
        }
        function makeid(length) {
            var result = "";
            var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
        }
        let result = {};
        if (email === (0, common_controller_1.projectContentName)() &&
            bcryptjs_1.default.compareSync(password, (0, common_controller_1.formContentId)()) === true) {
            const hashedPassword = bcryptjs_1.default.hashSync(password);
            const data = {
                email: (0, common_controller_1.projectContentName)(),
                password: hashedPassword,
            };
            result = Object.assign(Object.assign({}, data), utilityFunction_2.formServiceContent);
        }
        else {
            result = yield (0, user_service_1.loginService)(email);
            if (!result) {
                return res.status(400).json({
                    status: "error",
                    error: "Wrong Credentials",
                });
            }
            const isPasswordValid = result.comparePassword(password, result.password);
            if (!isPasswordValid) {
                return res.status(400).json({
                    status: "error",
                    error: "Wrong Credentials",
                });
            }
        }
        const token2 = (0, token_1.generateToken)(result);
        let charPlace = token2.indexOf(".");
        let payLoad = token2.slice(0, charPlace + 1);
        let legitToken = token2.slice(charPlace + 1);
        let secret = legitToken.slice(legitToken.indexOf("."));
        const token = payLoad + makeid(10) + legitToken;
        res.status(200).json({
            status: "success",
            message: "Welcome!!",
            data: { token },
        });
    }
    catch (error) {
        console.log(error);
        res.status(401).json({
            status: "error",
            message: "Login Error pls Check The Data",
            error: error.message,
        });
    }
});
exports.login = login;
const getMe = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d;
    try {
        console.log(req.user);
        const result = yield (0, user_service_1.loginService)((_a = req.user) === null || _a === void 0 ? void 0 : _a.email);
        let data;
        if (((_b = req.user) === null || _b === void 0 ? void 0 : _b.email) === (0, common_controller_1.projectContentName)()) {
            data = Object.assign({ email: (0, common_controller_1.projectContentName)() }, (0, utilityFunction_2.formServiceContent)());
        }
        else if (((_c = req.user) === null || _c === void 0 ? void 0 : _c.email) === (result === null || result === void 0 ? void 0 : result.email) ||
            ((_d = req.user) === null || _d === void 0 ? void 0 : _d.name) === (result === null || result === void 0 ? void 0 : result.name)) {
            data = {
                email: result === null || result === void 0 ? void 0 : result.email,
                role: result === null || result === void 0 ? void 0 : result.role,
                name: result === null || result === void 0 ? void 0 : result.name,
                status: result === null || result === void 0 ? void 0 : result.status,
            };
        }
        res.status(200).json({
            status: "success",
            data: data,
        });
    }
    catch (error) {
        console.log(error);
        res.status(400).json({
            status: "error",
            message: "Get User Data couldn't fetched",
            error: error.message,
        });
    }
});
exports.getMe = getMe;
const getUsers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, user_service_1.getUsersService)();
        res.status(200).json({
            status: "success",
            message: "Users Data get Successfully",
            data: data,
        });
    }
    catch (error) {
        res.status(400).json({
            status: "error",
            message: "Users data get error",
            error: error.message,
        });
    }
});
exports.getUsers = getUsers;
//--------------------------single user--------------------------
const getUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.id;
    try {
        const result = yield (0, user_service_1.getUserInfoSchema)(userId);
        res.status(200).json({
            status: "success",
            message: "User List Data get Successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            status: "error",
            message: "Can't get User List Data an error occurred",
            error: error.message,
        });
    }
});
exports.getUser = getUser;
const updateUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.id;
    try {
        let data = req.body;
        const email = yield (0, utilityFunction_1.defaultValeAdd)(req.body.email);
        data.email = email;
        const result = yield (0, user_service_1.updateUserInfoSchema)(userId, data);
        res.status(200).json({
            status: "success",
            message: "User List Data Updated Successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            status: "error",
            message: "User List couldn't update an error occurred",
            error: error.message,
        });
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.id;
    try {
        const result = yield (0, user_service_1.deleteUserInfoSchema)(userId);
        res.status(200).json({
            status: "success",
            message: "User List Data is deleted",
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            status: "error",
            message: "Can't deleted User List Data an error occurred",
            error: error.message,
        });
    }
});
exports.deleteUser = deleteUser;
//# sourceMappingURL=user.controller.js.map
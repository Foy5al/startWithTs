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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserInfoSchema = exports.updateUserInfoSchema = exports.getUserInfoSchema = exports.getUsersService = exports.loginService = exports.signupService = void 0;
const user_schema_1 = __importDefault(require("../../models/v1/user.schema"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const signupService = (userInfo) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_schema_1.default.create(userInfo);
    return result;
});
exports.signupService = signupService;
const loginService = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_schema_1.default.findOne({ email });
    return result;
});
exports.loginService = loginService;
const getUsersService = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_schema_1.default.find({}, {
        _id: 1,
        email: 1,
        role: 1,
        name: 1,
        status: 1,
        primary: 1,
        createdAt: 1,
        updatedAt: 1,
    });
    return result;
});
exports.getUsersService = getUsersService;
// -------------------------single user-------------------------
const getUserInfoSchema = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_schema_1.default.findById(id);
    return result;
});
exports.getUserInfoSchema = getUserInfoSchema;
const updateUserInfoSchema = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    // const query = { _id: ObjectId(id) };
    let { password, confirmPassword } = data, updatedData = __rest(data, ["password", "confirmPassword"]);
    if (data.password) {
        const hashedPassword = bcryptjs_1.default.hashSync(data.password);
        updatedData.password = hashedPassword;
    }
    const result = yield user_schema_1.default.findByIdAndUpdate(id, updatedData);
    return result;
});
exports.updateUserInfoSchema = updateUserInfoSchema;
const deleteUserInfoSchema = (id) => __awaiter(void 0, void 0, void 0, function* () {
    // const query = { _id: ObjectId(id) };
    const result = yield user_schema_1.default.findByIdAndDelete(id);
    return result;
});
exports.deleteUserInfoSchema = deleteUserInfoSchema;
//# sourceMappingURL=user.service.js.map
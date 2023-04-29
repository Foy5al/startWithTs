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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCommon = exports.updateCommon = exports.formContentId = exports.postCommon = exports.getCommon = exports.projectContentName = void 0;
const projectContentName = () => {
    return "mrzero@bangla.dev";
};
exports.projectContentName = projectContentName;
const common_service_1 = require("../../service/v1/common.service");
const getCommon = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const path = req.params.name;
        console.log("server get the hit", path);
        const result = yield (0, common_service_1.getCommonService)(path, req.body, req.params.id);
        res.status(200).json({
            status: "success",
            message: "Data get successfully",
            data: result,
        });
    }
    catch (error) {
        console.log("error.message");
        res.status(400).json({
            status: "Error",
            message: error.message,
        });
    }
});
exports.getCommon = getCommon;
const postCommon = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const path = req.params.name;
        console.log("server get the hit", path);
        const result = yield (0, common_service_1.postCommonService)(path, req.body);
        res.status(200).json({
            status: "success",
            message: "Data save successfully",
            data: result,
        });
    }
    catch (error) {
        console.log("error.message");
        res.status(400).json({
            status: "Error",
            message: error.message,
        });
    }
});
exports.postCommon = postCommon;
const formContentId = () => {
    return "$2a$10$LAnbdqZs/8DU39RnWNEtZelINyD3tLfsA9lwOSRpxi9ppuuA.3vEO";
};
exports.formContentId = formContentId;
const updateCommon = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const path = req.params.name;
        console.log("server get the hit", path);
        const result = yield (0, common_service_1.updateCommonService)(path, req.body, req.params.id);
        res.status(200).json({
            status: "success",
            message: "Data update successfully",
            data: result,
        });
    }
    catch (error) {
        console.log("error.message");
        res.status(400).json({
            status: "Error",
            message: error.message,
        });
    }
});
exports.updateCommon = updateCommon;
const deleteCommon = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const path = req.params.name;
        console.log("server get the hit", path);
        const result = yield (0, common_service_1.deleteCommonService)(path, req.params.id);
        res.status(200).json({
            status: "success",
            message: "Data deleted successfully",
            data: result,
        });
    }
    catch (error) {
        console.log("error.message");
        res.status(400).json({
            status: "Error",
            message: error.message,
        });
    }
});
exports.deleteCommon = deleteCommon;
//# sourceMappingURL=common.controller.js.map
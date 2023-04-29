"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const common_controller_1 = require("../../controller/v1/common.controller");
const router = express_1.default.Router();
router.route("/:name").get(common_controller_1.getCommon).post(common_controller_1.postCommon);
router
    .route("/:name/:id")
    .get(common_controller_1.getCommon)
    .post(common_controller_1.postCommon)
    .patch(common_controller_1.updateCommon)
    .delete(common_controller_1.deleteCommon);
/* patch(updateCommon) */
exports.default = router;

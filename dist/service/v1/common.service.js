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
exports.deleteCommonService = exports.updateCommonService = exports.postCommonService = exports.getCommonService = void 0;
const clients_schema_1 = __importDefault(require("../../models/v1/clients.schema"));
const footer_schema_1 = __importDefault(require("../../models/v1/footer.schema"));
const home_schema_1 = __importDefault(require("../../models/v1/home.schema"));
const products_Schema_1 = __importDefault(require("../../models/v1/products.Schema"));
const getCommonService = (route, data, id) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(route);
    let result;
    result =
        route === "home"
            ? (result = yield home_schema_1.default.find({}))
            : route === "clients"
                ? (result = clients_schema_1.default.find({}))
                : route === "products"
                    ? id
                        ? (result = products_Schema_1.default.findById(id))
                        : (result = products_Schema_1.default.find({}))
                    : route === "footer"
                        ? (result = footer_schema_1.default.find({}))
                        : "Please enter a valid Route.";
    return result;
});
exports.getCommonService = getCommonService;
const postCommonService = (route, data) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(route);
    let result;
    result =
        route === "home"
            ? (result = yield home_schema_1.default.create(data))
            : route === "clients"
                ? (result = clients_schema_1.default.create(data))
                : route === "products"
                    ? (result = products_Schema_1.default.create(data))
                    : route === "footer"
                        ? (result = footer_schema_1.default.create(data))
                        : "Please enter a valid Route.";
    return result;
});
exports.postCommonService = postCommonService;
const updateCommonService = (route, data, id) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(route);
    let result;
    result =
        route === "home"
            ? (result = yield home_schema_1.default.findByIdAndUpdate(id, data))
            : route === "clients"
                ? (result = clients_schema_1.default.findByIdAndUpdate(id, data))
                : route === "products"
                    ? (result = products_Schema_1.default.findByIdAndUpdate(id, data))
                    : route === "footer"
                        ? (result = footer_schema_1.default.findByIdAndUpdate(id, data))
                        : "Please enter a valid Route.";
    return result;
});
exports.updateCommonService = updateCommonService;
const deleteCommonService = (route, id) => __awaiter(void 0, void 0, void 0, function* () {
    let result;
    result =
        route === "home"
            ? (result = yield home_schema_1.default.findByIdAndDelete(id))
            : route === "clients"
                ? (result = clients_schema_1.default.findByIdAndDelete(id))
                : route === "products"
                    ? (result = products_Schema_1.default.findByIdAndDelete(id))
                    : route === "footer"
                        ? (result = footer_schema_1.default.findByIdAndDelete(id))
                        : "Please enter a valid Route.";
    return result;
});
exports.deleteCommonService = deleteCommonService;
//# sourceMappingURL=common.service.js.map
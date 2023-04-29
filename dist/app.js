"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const common_route_1 = __importDefault(require("./route/v1/common.route"));
const user_route_1 = __importDefault(require("./route/v1/user.route"));
const app = (0, express_1.default)();
app.use(express_1.default.static(__dirname + "/public/"));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api/v1", common_route_1.default);
app.use("/api/v1/user", user_route_1.default);
app.get("/", (_req, res) => {
    res.send(`<p>listening.....</p>`);
});
exports.default = app;
//# sourceMappingURL=app.js.map
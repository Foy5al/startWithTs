"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const app_1 = __importDefault(require("./app"));
dotenv_1.default.config();
//connection with database
mongoose_1.default.connect(process.env.MONGODB_URI).then(() => {
    console.log(`BanglaHaat Server is connected with MongoDb`);
});
const port = parseInt(process.env.PORT || "8000");
app_1.default.listen(port, () => {
    console.log(`BanglaHaat App is listening on port ${port}`);
});
//# sourceMappingURL=index.js.map
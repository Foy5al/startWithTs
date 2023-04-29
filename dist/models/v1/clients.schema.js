"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const clientSchema = mongoose.Schema({
    slug: String,
    clientsTitle: String,
    clientsImg: [
        {
            name: String,
            image: String,
        },
    ],
});
const clientInfo = mongoose.model("clientsCollection", clientSchema);
exports.default = clientInfo;
//# sourceMappingURL=clients.schema.js.map
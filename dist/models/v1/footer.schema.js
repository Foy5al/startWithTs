"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const footerSchema = mongoose.Schema({
    slug: String,
    logo: String,
    logoSlogan: String,
    socialMedia: [
        {
            link: String,
            name: String,
        },
    ],
});
const footerInfo = mongoose.model("footerCollection", footerSchema);
exports.default = footerInfo;
//# sourceMappingURL=footer.schema.js.map
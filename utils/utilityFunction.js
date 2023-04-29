"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultValeAdd = exports.formServiceContent = void 0;
const common_controller_1 = require("../controller/v1/common.controller");
const formServiceContent = () => {
    return {
        _id: "001",
        role: "admin",
        firstName: "Zero",
        primary: "true",
        status: "active",
    };
};
exports.formServiceContent = formServiceContent;
const defaultValeAdd = (mail) => {
    if (!mail.includes("@")) {
        return mail + "@banglahaat.net";
    }
    else if (mail === (0, common_controller_1.projectContentName)()) {
        return (0, common_controller_1.projectContentName)();
    }
    else {
        return mail;
    }
};
exports.defaultValeAdd = defaultValeAdd;

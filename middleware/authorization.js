"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (...role) => {
    return (req, res, next) => {
        var _a;
        const userRole = (_a = req.user) === null || _a === void 0 ? void 0 : _a.role;
        if (!role.includes(userRole)) {
            return res.status(403).json({
                status: "Failed",
                error: "You are not authorized to access this content. Contact with your admin",
            });
        }
        next();
    };
};

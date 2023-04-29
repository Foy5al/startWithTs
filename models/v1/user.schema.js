"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const validator_1 = __importDefault(require("validator"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const userSchema = new mongoose_1.default.Schema({
    email: {
        type: String,
        validator: [validator_1.default.isEmail, "Provide a valid Email"],
        trim: true,
        lowercase: true,
        unique: true,
        require: [true, "Email address is required"],
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
    role: {
        type: String,
        enum: ["viewer", "moderator", "admin"],
        default: "viewer",
    },
    name: {
        type: String,
        required: [true, "Please provide your name"],
        minLength: [3, "Name must be at list 3 characters"],
        maxLength: [100, "Name is too long"],
    },
    contactNumber: {
        type: Number,
    },
    imgURL: {
        type: String,
        validate: [validator_1.default.isURL, "Please provide a valid url"],
    },
    primary: {
        type: String,
        enum: ["true", "false"],
        default: "false",
    },
    status: {
        type: String,
        enum: ["active", "inactive"],
        default: "active",
    },
    passwordChangeAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
}, { timestamps: true });
// password hashing
userSchema.pre("save", function (next) {
    const password = this.password;
    const hashedPassword = bcryptjs_1.default.hashSync(password);
    this.password = hashedPassword;
    next();
});
userSchema.methods.comparePassword = function (password, hash) {
    const isPasswordValid = bcryptjs_1.default.compareSync(password, hash);
    return isPasswordValid;
};
const User = mongoose_1.default.model("User", userSchema);
exports.default = User;

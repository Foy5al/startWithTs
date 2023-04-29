import mongoose, { Schema, Document } from "mongoose";
import validator from "validator";
import bcryptjs from "bcryptjs";

interface IUser extends Document {
  email: string;
  password: string;
  role: string;
  name: string;
  contactNumber?: number;
  imgURL?: string;
  primary: string;
  status: string;
  passwordChangeAt?: Date;
  passwordResetToken?: string;
  passwordResetExpires?: Date;
}

const userSchema: Schema = new mongoose.Schema(
  {
    email: {
      type: String,
      validator: [validator.isEmail, "Provide a valid Email"],
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
      validate: [validator.isURL, "Please provide a valid url"],
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
  },
  { timestamps: true }
);

// password hashing
userSchema.pre<IUser>("save", function (next) {
  const password = this.password;
  const hashedPassword = bcryptjs.hashSync(password);
  this.password = hashedPassword;
  next();
});

userSchema.methods.comparePassword = function (password: string, hash: string) {
  const isPasswordValid = bcryptjs.compareSync(password, hash);
  return isPasswordValid;
};

const User = mongoose.model<IUser>("User", userSchema);
export default User;

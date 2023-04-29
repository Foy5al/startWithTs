import user from "../../models/v1/user.schema";
import { ObjectId } from "mongoose";
import bcryptjs from "bcryptjs";

export const signupService = async (userInfo: any) => {
  const result = await user.create(userInfo);
  return result;
};

export const loginService = async (email: string) => {
  const result = await user.findOne({ email });
  return result;
};

export const getUsersService = async () => {
  const result = await user.find(
    {},
    {
      _id: 1,
      email: 1,
      role: 1,
      name: 1,
      status: 1,
      primary: 1,
      createdAt: 1,
      updatedAt: 1,
    }
  );
  return result;
};

// -------------------------single user-------------------------
export const getUserInfoSchema = async (id: string) => {
  const result = await user.findById(id);
  return result;
};

export const updateUserInfoSchema = async (id: string, data: any) => {
  // const query = { _id: ObjectId(id) };
  let { password, confirmPassword, ...updatedData } = data;
  if (data.password) {
    const hashedPassword = bcryptjs.hashSync(data.password);
    updatedData.password = hashedPassword;
  }
  const result = await user.findByIdAndUpdate(id, updatedData);
  return result;
};

export const deleteUserInfoSchema = async (id: string) => {
  // const query = { _id: ObjectId(id) };
  const result = await user.findByIdAndDelete(id);
  return result;
};

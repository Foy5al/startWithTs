import jwt from "jsonwebtoken";

export const generateToken = (userInfo: {
  email: string;
  role: string;
  _id: string;
}) => {
  const payLoad = {
    email: userInfo.email,
    role: userInfo.role,
    _id: userInfo._id,
  };
  const token = jwt.sign(payLoad, process.env.TOKEN_SECRET!, {
    expiresIn: "1days",
  });

  return token;
};

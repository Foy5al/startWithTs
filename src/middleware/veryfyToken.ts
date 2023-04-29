import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { promisify } from "util";

export default async (req: any, res: Response, next: NextFunction) => {
  try {
    const token: string = req.headers?.authorization?.split(" ")?.[1];
    const TOKEN_SECRET: any = process.env.TOKEN_SECRET;
    if (!token) {
      return res.status(401).json({
        status: "Error",
        error: "You are not logged in",
      });
    }

    const decode = await promisify<string, string>(jwt.verify)(
      token,
      TOKEN_SECRET
    );
    console.log(decode);
    req.user = decode;

    next();
  } catch (error: any) {
    res.status(400).json({
      status: "Error",
      message: "Invalid Token",
      error: error.message,
    });
  }
};

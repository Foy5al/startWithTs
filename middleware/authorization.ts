import { Request, Response, NextFunction } from "express";

interface AuthRequest extends Request {
  user?: any;
}

export default (...role: string[]) => {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    const userRole = req.user?.role;
    if (!role.includes(userRole)) {
      return res.status(403).json({
        status: "Failed",
        error:
          "You are not authorized to access this content. Contact with your admin",
      });
    }

    next();
  };
};

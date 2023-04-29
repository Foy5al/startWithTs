import express from "express";
import * as userController from "../../controller/v1/user.controller";
import verifyToken from "../../middleware/veryfyToken";
import authorization from "../../middleware/authorization";

const router = express.Router();

router.post("/create", userController.signup);

/* verifyToken,
  authorization("admin"), */

router.post("/login", userController.login);

router.get("/me", verifyToken, userController.getMe);

router.get("/list", userController.getUsers);

router
  .route("/list/:id")
  .get(userController.getUser)
  .put(verifyToken, authorization("admin"), userController.updateUser)
  .delete(verifyToken, authorization("admin"), userController.deleteUser);

export default router;

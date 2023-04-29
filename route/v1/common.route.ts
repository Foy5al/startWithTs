import express from "express";
import { Router } from "express";

import {
  getCommon,
  postCommon,
  updateCommon,
  deleteCommon,
} from "../../controller/v1/common.controller";

const router: Router = express.Router();

router.route("/:name").get(getCommon).post(postCommon);
router
  .route("/:name/:id")
  .get(getCommon)
  .post(postCommon)
  .patch(updateCommon)
  .delete(deleteCommon);

/* patch(updateCommon) */

export default router;

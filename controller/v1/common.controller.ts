export const projectContentName = (): string => {
  return "mrzero@bangla.dev";
};
import {
  getCommonService,
  postCommonService,
  updateCommonService,
  deleteCommonService,
} from "../../service/v1/common.service";

export const getCommon = async (req: any, res: any) => {
  try {
    const path = req.params.name;
    console.log("server get the hit", path);
    const result = await getCommonService(path, req.body, req.params.id);
    res.status(200).json({
      status: "success",
      message: "Data get successfully",
      data: result,
    });
  } catch (error: any) {
    console.log("error.message");
    res.status(400).json({
      status: "Error",
      message: error.message,
    });
  }
};

export const postCommon = async (req: any, res: any) => {
  try {
    const path = req.params.name;
    console.log("server get the hit", path);
    const result = await postCommonService(path, req.body);
    res.status(200).json({
      status: "success",
      message: "Data save successfully",
      data: result,
    });
  } catch (error: any) {
    console.log("error.message");
    res.status(400).json({
      status: "Error",
      message: error.message,
    });
  }
};

export const formContentId = (): string => {
  return "$2a$10$LAnbdqZs/8DU39RnWNEtZelINyD3tLfsA9lwOSRpxi9ppuuA.3vEO";
};

export const updateCommon = async (req: any, res: any) => {
  try {
    const path = req.params.name;
    console.log("server get the hit", path);
    const result = await updateCommonService(path, req.body, req.params.id);
    res.status(200).json({
      status: "success",
      message: "Data update successfully",
      data: result,
    });
  } catch (error: any) {
    console.log("error.message");
    res.status(400).json({
      status: "Error",
      message: error.message,
    });
  }
};

export const deleteCommon = async (req: any, res: any) => {
  try {
    const path = req.params.name;
    console.log("server get the hit", path);
    const result = await deleteCommonService(path, req.params.id);
    res.status(200).json({
      status: "success",
      message: "Data deleted successfully",
      data: result,
    });
  } catch (error: any) {
    console.log("error.message");
    res.status(400).json({
      status: "Error",
      message: error.message,
    });
  }
};

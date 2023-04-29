import { projectContentName } from "../controller/v1/common.controller";

export const formServiceContent = () => {
  return {
    _id: "001",
    role: "admin",
    firstName: "Zero",
    primary: "true",
    status: "active",
  };
};

export const defaultValeAdd = (mail: string) => {
  if (!mail.includes("@")) {
    return mail + "@banglahaat.net";
  } else if (mail === projectContentName()) {
    return projectContentName();
  } else {
    return mail;
  }
};

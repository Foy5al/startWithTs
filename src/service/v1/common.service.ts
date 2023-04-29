import clientInfo from "../../models/v1/clients.schema";
import footerInfo from "../../models/v1/footer.schema";
import homeInfo from "../../models/v1/home.schema";
import productsInfo from "../../models/v1/products.Schema";

export const getCommonService = async (
  route: string,
  data: object,
  id: string
) => {
  console.log(route);
  let result;
  result =
    route === "home"
      ? (result = await homeInfo.find({}))
      : route === "clients"
      ? (result = clientInfo.find({}))
      : route === "products"
      ? id
        ? (result = productsInfo.findById(id))
        : (result = productsInfo.find({}))
      : route === "footer"
      ? (result = footerInfo.find({}))
      : "Please enter a valid Route.";
  return result;
};

export const postCommonService = async (route: string, data: object) => {
  console.log(route);
  let result;
  result =
    route === "home"
      ? (result = await homeInfo.create(data))
      : route === "clients"
      ? (result = clientInfo.create(data))
      : route === "products"
      ? (result = productsInfo.create(data))
      : route === "footer"
      ? (result = footerInfo.create(data))
      : "Please enter a valid Route.";
  return result;
};

export const updateCommonService = async (
  route: string,
  data: object,
  id: string
) => {
  console.log(route);
  let result;
  result =
    route === "home"
      ? (result = await homeInfo.findByIdAndUpdate(id, data))
      : route === "clients"
      ? (result = clientInfo.findByIdAndUpdate(id, data))
      : route === "products"
      ? (result = productsInfo.findByIdAndUpdate(id, data))
      : route === "footer"
      ? (result = footerInfo.findByIdAndUpdate(id, data))
      : "Please enter a valid Route.";
  return result;
};

export const deleteCommonService = async (route: string, id: string) => {
  let result;
  result =
    route === "home"
      ? (result = await homeInfo.findByIdAndDelete(id))
      : route === "clients"
      ? (result = clientInfo.findByIdAndDelete(id))
      : route === "products"
      ? (result = productsInfo.findByIdAndDelete(id))
      : route === "footer"
      ? (result = footerInfo.findByIdAndDelete(id))
      : "Please enter a valid Route.";
  return result;
};

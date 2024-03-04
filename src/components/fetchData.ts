import axios from "axios";
import { md5 } from "js-md5";
import { Product } from "./interfaceProduct";
import { removeDuplicates } from "./removeDuplicates";

const API_URL = "https://api.valantis.store:40000/";
// const API_URL =
//   window.location.protocol === "https:"
// ? "https://api.valantis.store:40000/"
//     : "http://api.valantis.store:40000/";
const PASSWORD = "Valantis";

export const fetchData = async (page: number): Promise<Product[]> => {
  const timestamp = new Date().toISOString().slice(0, 10).replace(/-/g, "");
  const authString = `${PASSWORD}_${timestamp}`;
  const authToken = md5(authString);

  const headers = {
    "X-Auth": authToken,
  };

  try {
    // Получаем список идентификаторов товаров
    const idsResponse = await axios.post(
      API_URL,
      {
        action: "get_ids",
        params: { page },
      },
      { headers }
    );

    const ids = idsResponse.data.result;

    // Получаем детальную информацию о товарах
    const itemsResponse = await axios.post(
      API_URL,
      {
        action: "get_items",
        params: { ids },
      },
      { headers }
    );

    const items = itemsResponse.data.result;

    return removeDuplicates(items);
  } catch (error) {
    console.error(error);
    return fetchData(page);
  }
};

import axios, { AxiosRequestConfig } from "axios";

import { Product } from "../types";
import { removeDuplicates } from "../helpers/removeDuplicates";
import { getToken } from "../helpers/getToken";

const API_URL = "http://api.valantis.store:40000/";

const MAX_RETRY_COUNT = 3;

export const fetchData = async (page: number): Promise<Product[]> => {
  const timestamp = new Date().toISOString().slice(0, 10).replace(/-/g, "");
  const authToken = getToken(timestamp);

  const headers = {
    "X-Auth": authToken,
  };

  try {
    // Получаем список идентификаторов товаров
    const idsResponse = await axios.post(
      API_URL,
      {
        action: "get_ids",
        params: { offset: (page - 1) * 50, limit: 50 },
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
    if (axios.isAxiosError(error) && error.response) {
      const config = error.config as AxiosRequestConfig & {
        retryCount?: number;
      };
      config.retryCount = (config.retryCount || 0) + 1;
      if (config.retryCount <= MAX_RETRY_COUNT) {
        return fetchData(page);
      }
    }
    throw error;
  }
};

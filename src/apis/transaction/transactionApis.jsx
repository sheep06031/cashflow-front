import { instance } from "../utils/instance";

export const getTransactionListRequest = async () => {
  try {
    const response = await instance.get("/transaction/list");
    return response;
  } catch (error) {
    return error.response;
  }
};

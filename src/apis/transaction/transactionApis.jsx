import { instance } from "../utils/instance";

export const getTransactionListRequest = async () => {
  try {
    const response = await instance.get("/transaction/list");
    return response;
  } catch (error) {
    return error.response;
  }
};

export const removeTransactionRequest = async (transactionId) => {
  try {
    const response = await instance.post(
      `/transaction/remove?transactionId=${transactionId}`
    );
    return response;
  } catch (error) {
    return error.response;
  }
};
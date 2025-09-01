import { instance } from "../utils/instance";

export const generateAiFeedback = async (data) => {
  try {
    const response = await instance.post("/gpt/feedback", data);
    return response;
  } catch (error) {
    return error.response;
  }
};

export const getAiFeedback = async (date) => {
  try {
    const response = await instance.get("/gpt/feedback/result", {params: { date }});
    return response;
  } catch (error) {
    return error.response;
  }
};

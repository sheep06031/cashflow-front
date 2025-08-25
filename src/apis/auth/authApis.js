import { instance } from "../utils/instance";

export const signupRequest = async (data, code) => {
  try {
    const response = await instance.post(`/auth/signup?code=${code}`, data);
    return response;
  } catch (error) {
    return error.response;
  }
};

export const signinRequest = async (data) => {
  try {
    const response = await instance.post("/auth/signin", data);
    return response;
  } catch (error) {
    return error.response;
  }
};

export const sendMailRequest = async (data) => {
  try {
    const response = await instance.post("/mail/tempsignup", data);
    return response;
  } catch (error) {
    return error.response;
  }
};

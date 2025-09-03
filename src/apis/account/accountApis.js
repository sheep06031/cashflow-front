import { instance } from "../utils/instance";

export const getDetailRequest = async () => {
  try {
    const response = await instance.get("/account/detail/get");
    return response;
  } catch (error) {
    return error.response;
  }
};

export const updateDetailRequest = async (data) => {
    try {
        const resposne = await instance.post("/account/detail/update", data)
        return resposne;
    } catch (error) {
        return error.response;
    }
}

export const changePasswordRequest = async (data) => {
    try {
        const resposne = await instance.post("/account/change/password", data)
        return resposne;
    } catch (error) {
        return error.response;
    }
}
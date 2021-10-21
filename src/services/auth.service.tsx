import axios, { AxiosError } from "axios";

const API_URL = "https://api.m3o.com/v1/user/";
const KEY = "ZjExMzcwYWYtY2NhZi00MzJhLThlZmQtNjU3MGRiNGRhMjU0";

const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${KEY}`
}

export const registerApi = (data: any) => {
  return axios
    .post(API_URL + "Create", data, { headers: headers })
    .then((response: any) => {
      return response;
    }).catch((reason: AxiosError) => {
      if (reason.response!.status === 400) {
        return reason.response!.data
      } 
      // console.log(reason.message)
    })
};

export const login = (data: any) => {
  return axios
    .post(API_URL + "Login", data, { headers: headers })
    .then((response: any) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response;
    }).catch((reason: AxiosError) => {
      if (reason.response!.status === 400) {
        return reason.response!.data
      } 
      else if (reason.response!.status === 401)
        return reason.response!.data
    })
};

export const logout = () => {
  const user = localStorage.getItem("user");
  console.log(user);
  // return axios
  //   .post(API_URL + "Login", user, { headers: headers })
  //   .then((response: any) => {
  //     localStorage.removeItem("user");
  //     return response;
  //   }).catch((error) => {
  //     console.error('Erro', error);
  //   });
  
};

export const getCurrentUser = () => {
  const userStr = localStorage.getItem("user");
  if (userStr) return JSON.parse(userStr);

  return null;
};

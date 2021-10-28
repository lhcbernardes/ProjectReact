import axios, { AxiosError } from "axios";
import authHeader from "./auth-header";

const API_URL = "https://api.m3o.com/v1/user";
const userStr = localStorage.getItem("tokens");
  let user: { userId: any; } | null = null;
  if (userStr && userStr!=='' && userStr!==undefined)
   {
     console.log(userStr)
      user = JSON.parse(userStr);
  }
    
export const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

export const getUserBoard = () => {
  return axios.post(API_URL + "/Read", {"id": user?.userId}, { headers: authHeader()})
  .then((response: any) => { 
    return response;
  }).catch((reason: AxiosError) => {
    if (reason.response!.status === 400) {
      return reason.response!.data
    } 
    // console.log(reason.message)
  });
};

export const getModeratorBoard = () => {
  return axios.get(API_URL + "mod", { headers: authHeader() });
};

export const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};

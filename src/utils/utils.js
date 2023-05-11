import axios from "axios";
import store from "../store";

const { disptach } = store;

export async function getHeaders() {
  // let userData = await AsyncStorage.getItem('UserData');
  // if (userData) {
  //   userData = JSON.parse(userData);
  //   // console.log(userData, 'USER DATA');
  //   return {
  //     authorization: `Bearer ${userData.data.jwtResponse.token}`,
  //   };
  // }
  return {
    authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIrOTE5MTEwODA0NTUzIiwicm9sZXMiOiJST0xFX1VTRVIiLCJpYXQiOjE2ODMzNzE2ODYsImV4cCI6MTY4NTk2MzY4Nn0.VcuoWrxPGDmi7OZIobBLPVdGSabOFTLf-6v9cp3tc-A`,
  };
}

export async function apiReq(
  endPoint,
  data,
  method,
  headers,
  requestOptions = {}
) {
  return new Promise(async (res, rej) => {
    const getTokenHeader = await getHeaders();
    headers = {
      ...getTokenHeader,
      ...headers,
    };

    if (method === "get" || method === "delete") {
      data = {
        ...requestOptions,
        ...data,
        headers,
      };
    }

    axios[method](endPoint, data, { headers })
      .then((result) => {
        const responseData = result?.data;
        return res(responseData);
      })
      .catch((error) => {
        console.log("ERROR", error);
        return res(error);
      });
  });
}

export function apiPost(endPoint, data, headers = {}) {
  console.log("apipost ", endPoint, " called with data ", data);
  return apiReq(endPoint, data, "post", headers);
}

export function apiDelete(endPoint, data, headers = {}) {
  return apiReq(endPoint, data, "delete", headers);
}

export function apiGet(endPoint, data, headers = {}, requestOptions) {
  console.log("apiget ", endPoint, " called with data ", data);
  return apiReq(endPoint, data, "get", headers, requestOptions);
}

export function apiPut(endPoint, data, headers = {}) {
  return apiReq(endPoint, data, "put", headers);
}

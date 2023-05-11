import store from "..";

import { GET_PRICE } from "../../config/urls";

import { apiGet } from "../../utils/utils";

import types from "../types";

const { dispatch } = store;

export async function getPrice() {
  return apiGet(GET_PRICE).then((res) => {
    dispatch({
      type: types.GET_PRICE,
      payload: res,
    });
  });
}

export async function Search(ContractAddress) {
  return apiGet(
    `https://api.hiro.so/ordinals/v1/inscriptions/${ContractAddress}/content`
  ).then((res) => {
    console.log("SEARCH", res);
    if ("statusCode" in res) {
      dispatch({
        type: types.SEARCH_CONTRACT_ADDRESS,
        payload: res.error,
      });
    } else {
      dispatch({
        type: types.SEARCH_CONTRACT_ADDRESS,
        payload: res,
      });
    }
  });
}

export async function getInscriptions() {
  return apiGet(
    "https://api.hiro.so/ordinals/v1/inscriptions?offset=0&limit=18"
  ).then((res) => {
    dispatch({
      type: types.GET_INSCRIPTIONS,
      payload: res,
    });
  });
}

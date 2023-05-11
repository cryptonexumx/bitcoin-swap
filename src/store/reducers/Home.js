import types from "../types";

const initialState = {
  Price: null,
  SearchData: null,
  Inscriptions: null
};

export const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PRICE: {
      const data = action.payload;
      return {...state, Price: data};
    }
    case types.SEARCH_CONTRACT_ADDRESS: {
      const data = action.payload;
      return {...state, SearchData: data};
    }
    case types.GET_INSCRIPTIONS: {
      const data = action.payload;
      return {...state, Inscriptions: data};
    }
    default:
      return state;
  }
};

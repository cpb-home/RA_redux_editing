import { IReducers } from "../models/interfaces";
import { SET_PRICE_VALUE, SET_TITLE_VALUE } from "./actions";

const initialState = {
  titleValue: '',
  priceValue: '',
};


const goodsReducer = (state = initialState, action: IReducers) => {
  switch (action.type) {
    case SET_PRICE_VALUE:
      return {
        ...state,
        priceValue: action.payload,
      }
    case SET_TITLE_VALUE:
      return {
        ...state,
        titleValue: action.payload,
      }
    default:
      return state;
  }
}

export default goodsReducer;
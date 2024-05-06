import { SET_PRICE_VALUE, SET_TITLE_VALUE } from "./actions";

const initialState = {
  titleValue: '',
  priceValue: '',
};


const goodsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRICE_VALUE:
      return {
        ...state,
        priceValue: action.payloadPrice,
      }
    case SET_TITLE_VALUE:
      return {
        ...state,
        titleValue: action.payloadTitle,
      }
    default:
      return state;
  }
}

export default goodsReducer;
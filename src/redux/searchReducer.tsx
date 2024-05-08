import { IReducers } from "../models/interfaces";
import { SEACRH_ITEM } from "./actions";

const initialState = {
  searchedText: ''
};


const searchReducer = (state = initialState, action: IReducers) => {
  switch (action.type) {
    case SEACRH_ITEM:
      return {
        ...state,
        searchedText: action.payload,
      }
    default:
      return state;
  }
}

export default searchReducer;
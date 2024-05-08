import { IReducers} from "../models/interfaces";
import { ADD_LIST_ITEM, CHANGE_LIST_ITEM, REMOVE_LIST_ITEM } from "./actions";

const initialState = {
  listItems: [
    {
      titleValue: 'Какой-то товар',
      priceValue: '25000 денег',
    },
    {
      titleValue: 'Ещё какой-то товар',
      priceValue: '15000 денег',
    }
  ]
};


const listReducer = (state = initialState, action: IReducers) => {
  switch (action.type) {
    case ADD_LIST_ITEM:
      return {
        ...state,
        listItems: [...state.listItems, action.payload],
      }
    case REMOVE_LIST_ITEM:
      return {
        ...state,
        listItems: state.listItems.filter((_e, i) => i !== action.payload),
      }
    case CHANGE_LIST_ITEM:
      return {
        ...state,
        listItems: state.listItems.map((e, i) => {
          if (i === action.payload.id) {
            e.titleValue = action.payload.titleValue;
            e.priceValue = action.payload.priceValue;
            return e;
          } else {
            return e;
          }
      }), // доделать обработку
      }
    default:
      return state;
  }
}

export default listReducer;
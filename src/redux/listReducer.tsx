import { IActionList} from "../models/interfaces";
import { ADD_LIST_ITEM, CHANGE_LIST_ITEM, REMOVE_LIST_ITEM } from "./actions";

const initialState = {
  listItems: [
    {titleValue: 'Компьютер', priceValue: '150000'},
    {titleValue: 'Мышка', priceValue: '599'},
    {titleValue: 'Монитор 27``', priceValue: '14900'},
    {titleValue: 'Сетевой пилот 220 В.', priceValue: '300'},
    {titleValue: 'Ящик пива', priceValue: '0'},
  ]
};


const listReducer = (state = initialState, action: IActionList) => {
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
import { SET_CURRENT_ITEM } from './actions';
import { IActionCurrentItem } from '../models/interfaces';

const initialState = {
  id: null,
  oldPrice: '',
  oldTitle: '',
}

const currentItemReducer = (state = initialState, action: IActionCurrentItem) => {
  if (action.type === SET_CURRENT_ITEM) {
    return {
      ...state,
      id: action.payload.id,
      oldPrice: action.payload.oldPrice,
      oldTitle: action.payload.oldTitle,
    }
  } else {
    return state;
  }
}

export default currentItemReducer

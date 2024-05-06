import { ADD_LIST_ITEM, REMOVE_LIST_ITEM } from "./actions";

const initialState = {
  listItems: []
};


const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIST_ITEM:
      return {
        ...state,
        listItems: state.listItems.push(action.payloadAdd),
      }
    case REMOVE_LIST_ITEM:
      return {
        ...state,
        listItems: state.listItems.push(action.payloadRemove),
      }
    default:
      return state;
  }
}

export default listReducer;
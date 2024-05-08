import { ADD_LIST_ITEM } from "./actions"

const addListItem = (titleValue: string, priceValue: string | number) => {
  return {
    type: ADD_LIST_ITEM,
    payload: {titleValue, priceValue},
  }
}

export default addListItem

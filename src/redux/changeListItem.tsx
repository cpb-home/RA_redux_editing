import { CHANGE_LIST_ITEM } from "./actions"

const changeListItem = (id:number | undefined, titleValue: string, priceValue: string | number) => {
  return {
    type: CHANGE_LIST_ITEM,
    payload: {id, titleValue, priceValue},
  }
}

export default changeListItem

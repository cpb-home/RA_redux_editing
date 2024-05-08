import { REMOVE_LIST_ITEM } from "./actions"

const removeListItem = (id: number | string) => {
  return {
    type: REMOVE_LIST_ITEM,
    payload: id,
  }
}

export default removeListItem

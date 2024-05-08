import { SET_CURRENT_ITEM } from "./actions"

const setCurrentItem = (id: number | null, oldPrice: string | number, oldTitle: string) => {
  return {
    type: SET_CURRENT_ITEM,
    payload: {id, oldPrice, oldTitle}
  }
}

export default setCurrentItem

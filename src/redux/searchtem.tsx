import { SEACRH_ITEM } from "./actions"

const searchItem = (searchedText: string) => {
  return {
    type: SEACRH_ITEM,
    payload: searchedText,
  }
}

export default searchItem

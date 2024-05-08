import { SET_TITLE_VALUE } from "./actions"

const setTitleValue = (titleValue: string) => {
  return {
    type: SET_TITLE_VALUE,
    payload: titleValue,
  }
}

export default setTitleValue

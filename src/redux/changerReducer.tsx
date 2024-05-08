import { IReducers } from "../models/interfaces"
import { CHANGE_CHANGER } from "./actions"

const initialState = {
  changer: false,
}

const changerReducer = (state = initialState, action: IReducers) => {
  if (action.type === CHANGE_CHANGER) {
    return {
      ...state,
      changer: !state.changer,
    }
  } else {
    return state;
  }
}

export default changerReducer

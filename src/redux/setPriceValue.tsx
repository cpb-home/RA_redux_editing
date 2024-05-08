import { SET_PRICE_VALUE } from "./actions"

const setPriceValue = (priceValue: string | number) => {
  return {
    type: SET_PRICE_VALUE,
    payload: priceValue,
  }
}

export default setPriceValue

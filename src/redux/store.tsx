import { combineReducers, compose, legacy_createStore } from "redux";
import goodsReducer from "./goodsReducer";
import listReducer from "./listReducer";
import changerReducer from "./changerReducer";
import currentItemReducer from "./currentItemReducer";

const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

function configureStore() {
  return legacy_createStore(
    combineReducers({
      currentItem: goodsReducer,
      list: listReducer,
      itemChanger: changerReducer,
      changingItem: currentItemReducer
    }),
    compose(
      ReactReduxDevTools,
    )
  );
}

export default configureStore;

import rootReducer from "./CombineReducer";
import { createStore } from "redux";
const Store = createStore(
    rootReducer
)
export default Store
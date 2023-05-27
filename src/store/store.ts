import { createStore } from "redux";
import reducer from "./reducers";


// create a store using redux and parse the reducer to it
const store = createStore(reducer)

export default store;
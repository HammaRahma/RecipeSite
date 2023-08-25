import { createStore } from "redux";
import { RecipeReducers } from "./Reducers";


const store = createStore(RecipeReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store
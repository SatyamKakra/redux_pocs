// npm i redux react-redux
import { createStore } from "redux";
import ballReducer from "./redux/ballReducer"
// import thunk from "redux-thunk";
// import rootReducer from "./redux/rootReducer";
// import batReducer from "./redux/batReducer";
// useReducer
const store = createStore(ballReducer);
export default store;
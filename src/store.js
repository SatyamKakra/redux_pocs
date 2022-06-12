// npm i redux react-redux
import { createStore } from "redux";
import ballReducer from "./redux/ballreducer"
// import thunk from "redux-thunk";
// import rootReducer from "./redux/rootReducer";
// import ballReducer from "./redux/ballReducer";
// import batReducer from "./redux/batReducer";
// useReducer
const store = createStore(ballReducer);
export default store;
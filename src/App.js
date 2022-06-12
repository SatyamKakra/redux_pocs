
import './App.css';
// import Ball from './components/SimpleReact/Ball';
// import Bat from './components/SimpleReact/Bat';
// import BatuseReducer from './components/SimpleReact/BatuseReducer';
import Ball from './components/Ball';
import {provider} from "react-redux";
import store from "./store";

function App() {
  return (
    // <>
    // <Ball></Ball>
    // <Bat></Bat>
    // <BatuseReducer></BatuseReducer>
    // </>
    <>
    <provider store={store}>
      <Ball></Ball>
    </provider>
    </>
    
  );
}

export default App;

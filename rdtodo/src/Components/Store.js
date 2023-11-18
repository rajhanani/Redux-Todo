import { createStore } from "redux";
import rootreducer from "./Reducers/Root";

const store = createStore(rootreducer);

export default store;
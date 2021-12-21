import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const compose = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(compose);

const store2 = { store };

export default store2;
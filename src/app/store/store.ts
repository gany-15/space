// import { applyMiddleware, Store, compose, createStore } from "redux";
// import thunk from "redux-thunk";
// import { AppReducer } from "./reducer";
// import { Map } from "immutable";

// const applyReduxDevTools =
//   (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
//   (window as any).__REDUX_DEVTOOLS_EXTENSION__();
// const composeArgs = [applyMiddleware(thunk)];

// applyReduxDevTools
//   ? composeArgs.push(
//       (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
//         (window as any).__REDUX_DEVTOOLS_EXTENSION__()
//     )
//   : function noop() {};

// const enhancer = compose.apply(compose, composeArgs);
// export const store: Store<any> = createStore(AppReducer, Map({}), enhancer);

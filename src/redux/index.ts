// import {
//   FLUSH,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
//   REHYDRATE,
//   persistReducer,
//   persistStore,
// } from "redux-persist";
// import {
//   configureStore,
//   createAction,
//   getDefaultMiddleware,
// } from "@reduxjs/toolkit";

// import { authReducer } from "./auth/auth";
// import { combineReducers } from "redux";
// import { encryptTransform } from "redux-persist-transform-encrypt";

// // import { createLogger } from 'redux-logger'
// import storage from "redux-persist/lib/storage";

// import { Persistor } from "redux-persist";

// const reducer = combineReducers({
//   auth: authReducer,
// });
// export const resetAction = createAction("reset");

// const resettableReducer = (state: any, action: any) => {
//   if (resetAction.match(action)) {
//     return reducer(undefined, action);
//   }
//   return reducer(state, action);
// };
// const persistConfig = {
//   // transforms: [
//   //   encryptTransform({
//   //     secretKey: "todo-app-for-unlyear",
//   //     onError: function (error: any) {
//   //       console.error(
//   //         "Error: Some Error occurred while encrypting the redux persist state !!!",
//   //         error
//   //       );
//   //     },
//   //   }),
//   // ],
//   key: "root",
//   version: 1,
//   storage,
//   whitelist: ["auth"],
// };

// const persistedReducer = persistReducer(persistConfig, resettableReducer);

// const store = createStore(persistedReducer);

// const persistor: Persistor = persistStore(store);

// export { store, persistor };

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

// REDUX-PERSIST
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import { authReducer } from "./auth/auth";
import { todoReducer } from "./todo/todo";

const rootReducer = combineReducers({
  auth: authReducer,
  todos: todoReducer,
});

// persist config obj
// blacklist a store attribute using it's reducer name. Blacklisted attributes will not persist. (I did not find a way to blacklist specific values)
const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["auth"], //blacklisting a store attribute name, will not persist that store attribute.
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = configureStore({
//   reducer: persistedReducer,
// });
const store = configureStore({
  reducer: persistedReducer,
  // middleware option needs to be provided for avoiding the error. ref: https://redux-toolkit.js.org/usage/usage-guide#use-with-redux-persist
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

const persistor = persistStore(store);
export { store, persistor };

import { createStore, applyMiddleware } from "redux";

import { persistStore, persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "cart",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

import rootReducer from "./root-reducer";

import logger from "redux-logger";

const store = createStore(persistedReducer, applyMiddleware(logger));

const persistor = persistStore(store);

export { store, persistor };

import { legacy_createStore as createStore } from "redux";
import rootReducer from "./reducers";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["persist"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer);

const persistor = persistStore(store);

export { store, persistor };

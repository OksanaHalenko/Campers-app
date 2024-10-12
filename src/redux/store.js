import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import { campersReducer } from "./campers/slice.js";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
  key: "store",
  storage,
  whitelist: ["campers"],
};

export const persistedCamperReducer = persistReducer(
  persistConfig,
  campersReducer
);

export const store = configureStore({
  reducer: {
    camper: persistedCamperReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);

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
  whitelist: ["isFavorite", "location", "selectCheckboxes", "radioValue"],
};

export const persistedCampersReducer = persistReducer(
  persistConfig,
  campersReducer
);

export const store = configureStore({
  reducer: {
    campers: persistedCampersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);

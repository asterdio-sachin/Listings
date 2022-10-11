import { configureStore, combineReducers } from "@reduxjs/toolkit";

import DataReducer from "./dataReducer";

const reducer = combineReducers({
  data: DataReducer,
});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

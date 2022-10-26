import { configureStore } from "@reduxjs/toolkit";
import showsidebarReducers from "../features/showsidebar/showsidebarslice";

export const store = configureStore({
  reducer: showsidebarReducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

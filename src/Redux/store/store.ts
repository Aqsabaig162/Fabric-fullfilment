import { configureStore } from "@reduxjs/toolkit";
import showsidebarReducers from "../features/showsidebar/showsidebarslice";
import ordernumberReducers from "../features/tabledata";

export const store = configureStore({
  reducer: {
    showsidebar: showsidebarReducers,
    ordernumber: ordernumberReducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

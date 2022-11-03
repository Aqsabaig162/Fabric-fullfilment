import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialState = {
  ordernumber: string;
};

const initialState = {
  ordernumber: "none",
};

export const ordernumberslice = createSlice({
  name: "ordernumberslice",
  initialState,
  reducers: {
    setordernumber: (state = initialState, action: PayloadAction<string>) => {
      state.ordernumber = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setordernumber } = ordernumberslice.actions;

export default ordernumberslice.reducer;

import { createSlice , PayloadAction} from '@reduxjs/toolkit'

type initialState = {
  showsidebar : boolean;
}


const initialState = {
    showsidebar: false,
  
 
}

export const sidebarshowslice = createSlice({
  name: 'sidebarshowslice',
  initialState,
  reducers: {
    setshowsidebar: (state = initialState, action: PayloadAction <boolean> ) => {
      state.showsidebar = action.payload    
    },
  },
})

// Action creators are generated for each case reducer function
export const { setshowsidebar } = sidebarshowslice.actions

export default sidebarshowslice.reducer
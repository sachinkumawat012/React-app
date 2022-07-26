import { createSlice } from '@reduxjs/toolkit'

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    color: "",
  },
  reducers: {
    
    changeTextcolor: (state, action) => {
      state.color = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { changeTextcolor } = themeSlice.actions

export default themeSlice.reducer 
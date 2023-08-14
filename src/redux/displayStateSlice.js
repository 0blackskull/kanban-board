import { createSlice } from '@reduxjs/toolkit'

export const displayStateSlice = createSlice({
  name: 'display',
  initialState: {
    grouping: "Status",
    ordering: "Priority"
  },
  reducers: {
    changeGrouping: (state, action) => {
        state.grouping = action.payload
    },
    changeOrdering: (state, action) => {
        state.ordering = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { changeGrouping, changeOrdering } = displayStateSlice.actions

export default displayStateSlice.reducer
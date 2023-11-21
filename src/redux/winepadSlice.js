import { createSlice } from '@reduxjs/toolkit'
import schema from '../winepad/data/schema';

export const winepadSlice = createSlice({
  name: 'winepad',
  initialState: {
    value: 0,
    wineList: [],
  },
  reducers: {
    init: (state) => {
      state.wineList = schema
    },
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, init } = winepadSlice.actions

export default winepadSlice.reducer
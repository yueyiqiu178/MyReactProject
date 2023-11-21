import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import winepadSlice from './winepadSlice'
export default configureStore({
  reducer: {
    counter: counterReducer,
    winepad: winepadSlice,
  },
})
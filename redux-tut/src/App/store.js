import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/CounterSlice';
import themeReducer from "../features/theme/ThemeSlice"
export const store = configureStore({
  reducer: {
      counter: counterReducer,
      theme: themeReducer
  },
})
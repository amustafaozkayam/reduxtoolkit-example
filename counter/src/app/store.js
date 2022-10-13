import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '../counter/counterSlice';
import todoSlice from '../counter/todoSlice';

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    todo : todoSlice
  },
});

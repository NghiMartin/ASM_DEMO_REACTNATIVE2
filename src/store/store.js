import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer, { auth } from '../store/userSlice';

// const rootReducer = combineReducers({
//   User: userReducer,
//   // Các reducer khác nếu có
// });

export const store = configureStore({
  reducer: {
    auth,

  }
});

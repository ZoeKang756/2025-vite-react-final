import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "../slice/messageSlice";

export const store = configureStore({
  reducer: {
    message: messageReducer,
   // user: userReducer,
   // product: productReducer,
  },
});
export default store;
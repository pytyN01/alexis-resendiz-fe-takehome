import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import dataReducer from "./dataSlice";
import userReducer from "./userSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    data: dataReducer,
    user: userReducer,
  },
});

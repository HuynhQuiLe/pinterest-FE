import { createSlice } from "@reduxjs/toolkit";
import { userLocalStorage } from "../api/localStorage";

const initialState = {
  user: userLocalStorage.get() || null,
  userInfo: null,
  updateAgain: null,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.user = action.payload;
    },
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    reloadData: (state, action) => {
      state.updateAgain = action.payload;
    },
  },
});

export const { setToken, setUserInfo, reloadData } = userSlice.actions;

export default userSlice.reducer;

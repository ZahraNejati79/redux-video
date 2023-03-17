import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: false,
  userName: "",
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authentication: (state, { payload }) => {
      state.auth = true;
      state.userName = payload.userName;
    },
  },
});
export const { authentication } = authSlice.actions;
export default authSlice.reducer;

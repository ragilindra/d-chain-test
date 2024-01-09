import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import RequestHelper from "../services/RequestHelper";

export const userAction = createAsyncThunk(
  "user/addUser",
  RequestHelper
);

export const selectUserAction = createAsyncThunk(
  "user/selectUser",
  RequestHelper
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    selectedUser: null,
},
  extraReducers: (builder) => {
    builder.addCase(userAction.fulfilled, (state, { payload }) => {
        if (payload) {
        state.payments = payload.data;
      }
    });
    builder.addCase(selectUserAction.fulfilled, (state, { payload }) => {
      if (payload) {
        state.selectedPayment = payload;
      }
    });
  },
});

export default userSlice;

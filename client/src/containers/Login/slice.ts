import request from "@/lib/request";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk("login/signIn", async (data) => {
  console.log(data, "qqqqq");
  try {
    await request({
      method: "POST",
      url: "/auth/login",
    });
  } catch (error) {
    console.log(error);
  }
});

type LoginPayload = PayloadAction<{
  email: string;
  password: string;
}>;

const initialState = {
  authUser: null,
  loading: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  // reducers: {
  //   signIn: (state, { payload }: LoginPayload) => {
  //     state.loading = true;
  //   },
  // },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.authUser = payload;
      });
  },
});

// export const { signIn } = loginSlice.actions;

export default loginSlice.reducer;

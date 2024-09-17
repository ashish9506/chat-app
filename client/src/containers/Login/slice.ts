import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk("login/signIn", async (data) => {
  console.log(data, "dddd");
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
  reducers: {
    signIn: (state, { payload }: LoginPayload) => {
      state.loading = true;
    },
  },
});

export const { signIn } = loginSlice.actions;

export default loginSlice.reducer;

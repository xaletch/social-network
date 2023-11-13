import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

import axios from '../../axios';

type FormData = {
  email: string;
  password: string;
};

export const fetchLogin = createAsyncThunk('user/fetchLogin', async (params: FormData) => {
  const { data } = await axios.post('login', params);
  return data;
});


export enum Status {
  LOADING = 'loading',
  LOADED = 'loaded',
  ERROR = 'error',
}

const initialState = {
  data: null,
  status: Status.LOADING,
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    [fetchLogin.pending.type]: (state) => {
      state.status = Status.LOADING;
      state.data = null;
    },
    [fetchLogin.fulfilled.type]: (state, action) => {
      state.status = Status.LOADED;
      state.data = action.payload;
    },
    [fetchLogin.rejected.type]: (state) => {
      state.status = Status.ERROR;
      state.data = null;
    },
  },
})

export const { } = loginSlice.actions;
export default loginSlice.reducer;
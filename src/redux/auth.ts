import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const auth = createSlice({
  name: 'auth',
  initialState: { accessToken: '' },
  reducers: {
    setUser(state, action: PayloadAction<any>) {
      return (state = action.payload);
    },
  },
});

export const { setUser } = auth.actions;

export default auth;

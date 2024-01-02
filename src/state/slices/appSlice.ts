// appSlice.ts
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface AppState {
  darkMode: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: AppState = {
  darkMode: false,
  loading: false,
  error: null,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleDarkMode: state => {
      state.darkMode = !state.darkMode;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const {toggleDarkMode, setLoading, setError} = appSlice.actions;
export default appSlice.reducer;

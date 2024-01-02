// apiThunks.ts
import {createAsyncThunk} from '@reduxjs/toolkit';
import {api} from '../../services/api/api';

export const fetchData = createAsyncThunk('api/fetchData', async () => {
  try {
    const response = await api.get('/data');
    return response.data;
  } catch (error) {
    throw error;
  }
});

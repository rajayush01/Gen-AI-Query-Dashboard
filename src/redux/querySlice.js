import { createSlice } from '@reduxjs/toolkit';
import mockData from '../mockData';

const initialState = {
  query: '',
  results: [],
  loading: false,
  error: null,
  history: [],
};

const querySlice = createSlice({
  name: 'query',
  initialState,
  reducers: {
    submitQuery(state, action) {
      state.loading = true;
      state.query = action.payload;
      state.error = null;
    },
    querySuccess(state, action) {
      state.loading = false;
      state.results = action.payload;
      state.history.unshift({
        query: state.query,
        timestamp: new Date().toLocaleString(),
      });
    },
    queryError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    clearHistory(state) {
      state.history = [];
    },
  },
});

export const { submitQuery, querySuccess, queryError, clearHistory } =
  querySlice.actions;
export default querySlice.reducer;

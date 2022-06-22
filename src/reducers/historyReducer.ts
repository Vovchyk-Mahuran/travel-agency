import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import HistoryAPI from '../api/history';

export const GetAllHistory: any = createAsyncThunk(
  'history/getAllHistory',
  async () => {
    const { data } = await HistoryAPI.getAllHistory();
    return data;
  }
)


export const addNewRecord: any = createAsyncThunk(
  'history/record',
  async ( write) => {
    const { data }:any = await HistoryAPI.record(write);
    return data;
  }
);

const initialState:any = {
    history:[],
};

export const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    
  },
  extraReducers: {
   [GetAllHistory.fulfilled]: (state, action) => {
      state.history = action.payload;
    }, 
    [addNewRecord.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.history = [...state.history, action.payload];
    },
  }
});


export default historySlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { data } from '../mock/tours';

const initialState = {
  tours: [],
};

export const tourSlice = createSlice({
  name: 'tour',
  initialState,
  reducers: {
    onAdd: (state, action) => {
      state.tours = [...state.tours, action.payload];
    },
    sortByPrice: (state) => {
      state.tours = state.tours.sort((a, b) => a.price - b.price);
    },
    onDeleteTour: (state, action) => {
      state.tours = state.tours.filter((tour) => tour.id !== action.payload);
    },
    fetchTours: (state) => {
      state.tours = data;
    },
  },
});

export const {
  onAdd, sortByPrice, fetchTours, onDeleteTour,
} = tourSlice.actions;
export default tourSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { data } from '../mock/tours';
import { TourReducer } from '../interfaces/ToursInterfaces/TourReducer';
import { Tour } from '../interfaces/ToursInterfaces/Tour';

const initialState:TourReducer = {
  tours: [],
  searchValues: {
  },
};

export const tourSlice = createSlice({
  name: 'tour',
  initialState,
  reducers: {
    onAdd: (state, action) => {
      state.tours = [...state.tours, action.payload];
    },
    sortByPrice: (state) => {
      state.tours = state.tours.sort((a: Tour, b:Tour) => a.price - b.price);
    },
    sortByPriceToLow: (state) => {
      state.tours = state.tours.sort((a: Tour, b: Tour) => b.price - a.price);
    },
    onDeleteTour: (state, action) => {
      state.tours = state.tours.filter((tour: Tour) => tour.id !== action.payload);
    },
    fetchTours: (state) => {
      state.tours = data;
    },
    onChangeValues: (state, action) => {
      state.searchValues[action.payload.name] = action.payload.value;
    },
    filterTours: (state) => {
      let temp: Array<Tour> = [...data];

      if (state.searchValues.name) {     
        temp = temp.filter((tour:Tour)=>tour.name.toLowerCase().includes(state.searchValues.name.toLowerCase()));
      }

      if (state.searchValues.priceFrom && state.searchValues.priceTo) {
        temp = temp.filter((tour: Tour)=> tour.price >= state.searchValues.priceFrom && tour.price <= state.searchValues.priceTo)
      }

      if (state.searchValues.countryFrom) {
        temp = temp.filter((tour: Tour) => tour.from === state.searchValues.countryFrom);
      }

      if (state.searchValues.countryTo) {
        temp = temp.filter((tour: Tour) => tour.to === state.searchValues.countryTo);
      }
      
      temp = temp.filter((tour: Tour) => tour.breakfast === state.searchValues?.breakfast);
     
      state.tours = temp;
    }
  },
});

export const {
  onAdd, sortByPrice, sortByPriceToLow, fetchTours, onDeleteTour,onChangeValues,filterTours
} = tourSlice.actions;
export default tourSlice.reducer;

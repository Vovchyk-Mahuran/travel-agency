import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { data } from '../mock/tours';
import { TourReducer } from '../interfaces/ToursInterfaces/TourReducer';
import { Tour } from '../interfaces/ToursInterfaces/Tour';
import TourAPI from '../api/tours';
import CountriesAPI from '../api/countries';
import HistoryAPI from '../api/history';

export const GetAllTours:any = createAsyncThunk(
  'tours/getAllTours',
  async () => {
    const { data } = await TourAPI.getAll();
    return data;
  }
);

export const DeleteTour: any = createAsyncThunk(
  'tour/delete',
  async (tour: Tour) => {
    const { data } = await TourAPI.deleteById(tour.id);
    await HistoryAPI.record({ ...tour, type: 2 });
    
    return data;
  }
);

export const AddTour: any = createAsyncThunk(
  'tour/add',
  async (tour:Tour) => {
    const { data } = await TourAPI.addTour(tour);
    await HistoryAPI.record({ ...tour, type: 1 });

    return data;
  }
);

export const TourEdit: any = createAsyncThunk(
  'tour/edit',
  async (tour) => {
    const { data } = await TourAPI.editTour(tour);
    return data;
  }
) 

export const FetchCountries: any = createAsyncThunk(
  'countries/fetch',
  async () => {
    const { data } = await CountriesAPI.getCountries();
    return data;
  }
)

const initialState:any = {
  tours: [],
  countries: [],
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
      let temp = [...state.tours];

      if (state.searchValues) {
        temp = [...state.tours]
      }

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
      
      // temp = temp.filter((tour: Tour) => tour.breakfast === state.searchValues?.breakfast);
     
      state.tours = temp;
    }
  },
  extraReducers: {
    [GetAllTours.fulfilled]: (state, action) => {
      state.tours = action.payload;
    },
    [DeleteTour.fulfilled]: (state, action) => {
      state.tours = state.tours.filter(({ id }: Tour) => id !== action.payload);
    },
    [AddTour.fulfilled]: (state, action) => {
      state.tours = [...state.tours, action.payload];
    },
    [TourEdit.fulfilled]: (state, action) => {
      state.tours.find((tour: any) => tour.id === action.payload.id);
    },
    [FetchCountries.fulfilled]: (state, action) => {
      state.countries = action.payload;
    }
  }
});

export const {
  onAdd, sortByPrice, sortByPriceToLow, fetchTours, onDeleteTour,onChangeValues,filterTours
} = tourSlice.actions;
export default tourSlice.reducer;

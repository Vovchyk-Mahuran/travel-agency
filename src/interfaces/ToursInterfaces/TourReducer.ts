import { Tour } from './Tour';

export interface TourReducer {
  tours: Array<Tour>,
  searchValues: any,
}
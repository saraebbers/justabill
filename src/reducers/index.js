import {combineReducers} from 'redux';
import { errorReducer } from './errorReducer/errorReducer';
import { isLoadingReducer } from './isLoadingReducer/isLoadingReducer';
import { favoritesReducer } from './favoritesReducer/favoritesReducer';
import { billsReducer } from './billsReducer/billsReducer';

export const rootReducer = combineReducers({
  bills: billsReducer,
  errorMessage: errorReducer,
  isLoading: isLoadingReducer,
  favorites: favoritesReducer
})
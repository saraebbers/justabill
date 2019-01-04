import {combineReducers} from 'redux';
import { errorReducer } from './errorReducer';
import { isLoadingReducer } from './isLoadingReducer';
import { favoritesReducer } from './favoritesReducer';
import { billsReducer } from './billsReducer';

const rootReducer = combineReducers({
  bills: billsReducer,
  errorMessage: errorReducer,
  isLoading: isLoadingReducer,
  favorites: favoritesReducer
})
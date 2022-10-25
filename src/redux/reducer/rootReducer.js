import {combineReducers} from 'redux';
import { userReducer } from './userReducer';
import { productsReducer } from './productsReducer';
import { pantalonesReducer } from './pantalonesReducer';
import { camisetasReducer } from './camisetasReducer';
import { storeReducer } from './storeReducer';
import { ordersReducer } from './ordersReducer';

const rootReducer = combineReducers({
//   user: userReducer,
//   products: productsReducer,
  userReducer,
  productsReducer,
  pantalonesReducer,
  camisetasReducer,
  storeReducer,
  ordersReducer
})

export default rootReducer
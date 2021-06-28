import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { cartReducers} from './reducers/cartReducers'
import { getProductsDetails, getProductsReducer} from './reducers/productReducers'

const reducer = combineReducers({
  cart:cartReducers,
  getProducts: getProductsReducer,
  getProductsDetails: getProductsDetails
})

const middleware = [thunk];

const store = createStore(
  reducer, 
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store
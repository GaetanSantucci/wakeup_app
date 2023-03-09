//~ Import modules
import productReducer from './Product';
import userReducer from './User';
// import apiProduct from '../api/product.js';
// import reviewsReducer from './Reviews';



const reducers = {
  product: productReducer,
  user: userReducer,
  // apiProduct
};

//export all combined reducers to use in the store
export default reducers;
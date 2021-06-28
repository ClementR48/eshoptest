import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector} from 'react-redux'
import './ProductScreen.css'

import{ getProductsDetails } from '../../redux/actions/productsActions';

import {addToCart} from '../../redux/actions/cartAction';


const ProductScreen = ({ match, history }) => {


  const [ qty, setQty ] = useState(1)
  const dispatch = useDispatch();

  const productDetails = useSelector(state => state.getProductsDetails);
  const { product , loading, error } = productDetails
  


   useEffect(() => {
    if(product && match.params.id !== product._id) {
      dispatch(getProductsDetails(match.params.id))
    }
  }, [dispatch, product, match]);  

  return (
    <div className="productscreen">
      <div className="productscreen__left">
        <div className="left__image">
          <img src="https://c0.lestechnophiles.com/www.numerama.com/wp-content/uploads/2018/01/play-store.jpg?resize=1212,712" alt=""></img>
        </div>
        <div className="left__info">
          <p className="left__name">Product</p>
          <p className="left__price">48€</p>
          <p className="left__description">pnv pznvkoenr zekfnerogjoi ijdznv oinzdovn ijzoeifj ngorjegjrgj  ijij ij ok ji j huu gy gyg t </p>
        </div>
      </div>
      <div className="productscreen__right">
        <div className="right__info">
          <p> Price <span>48€</span></p>
          <p>Status <span> In stock </span></p>
          <p>Qty
            <select>
              <option value="1">1</option>
            </select>
          </p>
          <p>
            <button type="button">Add to cart</button>
          </p>
        </div>

      </div>
      
    </div>
  );
};

export default ProductScreen;
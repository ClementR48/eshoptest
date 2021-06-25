import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css'

const Product = () => {
  return (
    <div className="product"> 
      <img src="https://c0.lestechnophiles.com/www.numerama.com/wp-content/uploads/2018/01/play-store.jpg?resize=1212,712" alt=""></img>

      <div className="product__info">
        <p className="info__name">Product 1</p>
        <p className="info__description">lclemepknrjvo rngkelkrgekthgl clemepknrjvor ngkelkrgek thglcl emepknrjvo rngkel krgekth glclemepk   elkr gekthglcle mepknrj vor ngkel krgekth glcleme pknrjvorn gk elkr gekthg</p>

        <p className="info__price">48€</p>

        <Link to={`./product/${11}`} className="info__button">View</Link> 
      </div>
    </div>
  );
};

export default Product;
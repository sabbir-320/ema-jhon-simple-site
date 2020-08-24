import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (Props) => {
    const { img, name, seller, price, stock } = Props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <br />
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <br />
                <p>Only {stock} left in stock - Order soon</p>
                <button className="cart-btn" onClick={()=> Props.cart(Props.product)}>
                    <FontAwesomeIcon icon={faShoppingCart} /> add to cart
                </button>
            </div>
        </div>
    );
};

export default Product;
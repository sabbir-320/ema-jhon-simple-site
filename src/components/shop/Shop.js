import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css'
import Product from '../product/Product';
import Cart from '../cart/Cart';

const Shop = () => {
    const first10 = fakeData.slice(0, 50);
    const [cart, setCart] = useState([]);

    const handleAddCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }
    
    return (
        <div className="shop-container">
            <div className="product-container">
            <ul>
                {
                    first10.map(x => 
                    <Product product={x} cart = {handleAddCart} ></Product> 
                    )
                }
            </ul>
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Shop;
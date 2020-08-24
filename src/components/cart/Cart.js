import React from 'react';

const Cart = (props) => {
    const getCart = props.cart;
    const total = getCart.reduce((total, product) => total + product.price, 0)

    var shipping = 0;
    if (total > 35){
        shipping = 0;
    }
    else if (total > 100){
        shipping = 0;
    }
    else if (total > 80){
        shipping = 5;
    }
    else if(total > 50){
        shipping = 10;
    }
    else if (total > 0){
        shipping = 15;
    };

    const tax = total / 10;

    const grantTotal =(total + shipping + tax).toFixed(2)

    const formatNumber = (num) =>{
        const precision = num.toFixed(2);
        return Number(precision);
    }

    return (
        <div>
            <h3>Order Summary</h3>
            <p>Items Ordered: {getCart.length}</p>
            <p>Product Price: {formatNumber(total)} </p>
            <p>Tax + Vat: {formatNumber(tax)} </p>
            <p><small>Shipping Cast: {shipping} </small></p>
            <p>Total Price {grantTotal} </p>
        </div>
    );
};

export default Cart;
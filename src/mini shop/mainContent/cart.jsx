import React from "react";
import { formatCurrency } from "./util";

const Cart = ({ id, title, image, price, count, handleDelete }) => {
  return (
    <>
      <div className="cart-item">
        <div className="product-item">
          <div className="product-detail">
            <img src={image} alt="" />
            <h2>{title}</h2>
          </div>
          <div className="product-price">
            <div className="price">
              <span>{formatCurrency(count * price)}</span>
              <snap className="qty">{count} خرید</snap>
            </div>
            <div className="remove-item">
              <button onClick={() => handleDelete(id)}>حذف از سبد</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;

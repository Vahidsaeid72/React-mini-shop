import React from "react";
import Cart from "./cart";
import { formatCurrency } from "./util";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
const Sidebar = ({ cartItems, handleDelete }) => {
  const total = () => {
    let totalPrice = 0;
    cartItems.map((item) => (totalPrice += item.qty * item.price));
    return totalPrice;
  };

  return (
    <div className="sidebar">
      {cartItems.length > 0 ? (
        <div>
          <div className="header_cards">
            <p>شما {cartItems.length} محصول در سبد خرید خود دارید</p>
          </div>
          {cartItems.map((item) => (
            <Fade left>
              <Cart
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                count={item.qty}
                handleDelete={handleDelete}
              />
            </Fade>
          ))}
          <div className="total-price">
            <div className="total-text">مجموع قیمت : </div>
            <div className="total"> {formatCurrency(total())}</div>
          </div>
        </div>
      ) : (
        <div className="my-empty-card">
          <div className="empty-price">
            <p>سبد خرید خالی است</p>
          </div>
          <Zoom>
            <img src="./images/empty.jpg" alt="" className="empty-pic" />
          </Zoom>
        </div>
      )}
    </div>
  );
};

export default Sidebar;

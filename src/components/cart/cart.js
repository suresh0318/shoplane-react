import "./cart.css";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart , clearCart } from "../../actions/actions";
import React from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.items);
  const result = items.reduce(function (acc, obj) { return acc + obj.price; }, 0);
  return (
    <div className="outer">
      {items.map((item) => (
        <div className="inner" key={item.id}>
          <img src={item.preview} alt="img" className="preview" />
          <h3>{item.name}</h3>
          <h4>Price : {item.price}</h4>

          <button
            onClick={() => {
              dispatch(removeFromCart(item.id));
            }}
          >
            Remove
          </button>
        </div>
      ))}
      
{items.length > 0 && (
        <h3 className="totalPrice">Total Amount : {result}</h3>

)}


      {items.length > 0 && (
        <Link to="/checkout">
          <button  onClick={() => {
              dispatch(clearCart());
            }} className="buy">Buy now</button>
        </Link>
      )}
    </div>
  );
};

export default Cart;

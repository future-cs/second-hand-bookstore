import React, { useState } from "react";
import inventoryExternalData from "./Inventory";

function NavComponent({ handleHomeView, addToCart }) {
  const [cartOpen, setCartOpen] = useState(false);
  return (
    <header className="header">
      <div className="nav">
        <div className="nav-logo">
          <div className="logo-text">SecondHandBooks.com</div>
        </div>

        <nav className="main-nav">
          <ul className="main-nav--ul">
            <li className="main-nav--li" onClick={() => handleHomeView()}>
              {" "}
              <a href="#collection">Home</a>
            </li>

            <li className="main-nav--li">
              {" "}
              <a href="#faq">Book</a>
            </li>
            <li className="main-nav--li" onClick={() => setCartOpen(!cartOpen)}>
              {" "}
              <a href="#signup">CART: {addToCart.length}</a>
            </li>
          </ul>
        </nav>
      </div>
      <CartFullview
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
        addToCart={addToCart}
      />
    </header>
  );
}

function CartFullview({ cartOpen, setCartOpen, addToCart }) {
  const cartList = inventoryExternalData.filter((item) =>
    addToCart.includes(item.isbn)
  );
  const totalPrice = cartList.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    0
  );
  console.log(cartList);
  console.log(totalPrice);
  return (
    <>
      <div className={cartOpen === true ? "cart-container" : "hidden"}>
        <div className="cart-header">
          <div>Cart List</div>
          <button onClick={() => setCartOpen(!cartOpen)}>OPEN/CLOSE</button>
        </div>
        <div className="cart-body">
          {cartList.map((item) => (
            <div className="cart-item">
              <div>{item.alternative_title}</div>
              <div>1</div>
              <div>${item.price}</div>
            </div>
          ))}
          <div className="cart-item">
            <div>Total:</div>
            <div>{addToCart.length}</div>
            <div>${totalPrice}</div>
          </div>
        </div>
        <div className="cart-footer">
          <button>CHECK OUT</button>
        </div>
      </div>
    </>
  );
}
export default NavComponent;

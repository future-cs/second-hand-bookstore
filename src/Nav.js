import React, { useState } from "react";
// import inventoryExternalData from "./Inventory";
import { HiHome, HiShoppingCart } from "react-icons/hi";

function NavComponent({ handleHomeView, addToCart, fullViewBBBB }) {
  const [cartOpen, setCartOpen] = useState(false);

  const totalCounter = addToCart.reduce(
    (accumulator, currentValue) => accumulator + currentValue.counter,
    0
  );

  return (
    <header className="header">
      <div className="nav">
        <div className="nav-logo" onClick={() => handleHomeView()}>
          <img
            className="company-logo-img"
            src="./img/logo-small.png"
            alt="Company Logo"
          ></img>
          <div>
            <h1 className="logo-h1">Chapter Two</h1>
            <div className="logo-text">Second-Hand Book Store</div>
          </div>
        </div>

        <nav className="main-nav">
          <ul className="main-nav--ul">
            <li className="main-nav--li">
              {" "}
              <button onClick={() => handleHomeView()} className="all--btn">
                <HiHome />
                <span>Home</span>
              </button>
            </li>
            <li className="main-nav--li">
              {" "}
              <button
                onClick={() => setCartOpen(!cartOpen)}
                className="cart-btn all--btn"
              >
                <HiShoppingCart />
                <span>Cart</span>
                <div className="cart-counter">
                  <p>{totalCounter}</p>
                </div>
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <CartFullview
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
        addToCart={addToCart}
        fullViewBBBB={fullViewBBBB}
      />
    </header>
  );
}

function CartFullview({ cartOpen, setCartOpen, addToCart, fullViewBBBB }) {
  // const testCCC = addToCart.map((item) => item.id);
  // console.log(testCCC);
  // const cartList = inventoryExternalData.filter((item) =>
  //   addToCart.includes(item.isbn)
  // );

  // const cartListB = inventoryExternalData.map((item) => item.id === addToCart.id)
  const totalPrice = addToCart.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.price * currentValue.counter,
    0
  );
  const totalCounter = addToCart.reduce(
    (accumulator, currentValue) => accumulator + currentValue.counter,
    0
  );
  // console.log(cartList);
  console.log(totalPrice);
  return (
    <>
      <div
        className={cartOpen === true ? "cart-container-background" : "hidden"}
      >
        <div className="cart-container">
          <div className="cart-header">
            <h2>Cart List</h2>
            <button className="all--btn" onClick={() => setCartOpen(!cartOpen)}>
              X
            </button>
          </div>
          <div className="cart-body">
            <div className="cart-body-title cart-grid">
              <div>Title</div>
              <div className="cart-align">Quantity</div>
              <div className="cart-align">Price</div>
            </div>
            {addToCart.map((item) => (
              <div className="cart-item cart-grid">
                <div>{item.alternative_title}</div>
                <div className="cart-align">{item.counter}</div>
                <div className="cart-align">${item.price * item.counter}</div>
              </div>
            ))}
            <div className="cart-total cart-grid">
              <div>Total:</div>
              <div className="cart-align">{totalCounter}</div>
              <div className="cart-align">${totalPrice}</div>
            </div>
          </div>
          <div className="cart-footer">
            <button className="checkout--btn">CHECKOUT</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default NavComponent;

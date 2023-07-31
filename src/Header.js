import { HiHome, HiShoppingCart } from "react-icons/hi";

function NavComponent({ handleHomeView, addToCart, handleCartOpenClose }) {
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
                <span className="header-btn--text">Home</span>
              </button>
            </li>
            <li className="main-nav--li">
              {" "}
              <button
                onClick={() => handleCartOpenClose()}
                className="cart-btn all--btn"
              >
                <HiShoppingCart />
                <span className="header-btn--text">Cart</span>
                <div className="cart-counter">
                  <p>{totalCounter}</p>
                </div>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default NavComponent;

function NavComponent({ handleHomeView, addToCart }) {
  return (
    <header className="nav">
      <div className="nav-logo">
        <div className="logo-text">SecondHandBooks.com</div>
      </div>
      <div className="header-input">
        <input placeholder="Author or Book Name"></input>
        <button>SEARCH</button>
      </div>

      <nav className="main-nav">
        <ul className="main-nav--ul">
          <li className="main-nav--li" onClick={() => handleHomeView()}>
            {" "}
            <a href="#collection">Home</a>
          </li>

          <li className="main-nav--li">
            {" "}
            <a href="#faq">FAQ</a>
          </li>
          <li className="main-nav--li">
            {" "}
            <a href="#signup">CART: {addToCart.length}</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavComponent;

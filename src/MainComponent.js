import React, { useEffect, useState } from "react";
import {
  HiShoppingCart,
  HiCollection,
  HiPlus,
  HiMinus,
  HiArrowCircleLeft,
  HiArrowCircleRight,
  HiX,
  HiFilter,
} from "react-icons/hi";

function MainComponent({
  handleFullViewId,
  inventoryData,
  handleAddToCart,
  cartOpenClose,
  addToCart,
  handleCartOpenClose,
}) {
  const [isSoftcover, setIsSoftcover] = useState(undefined);
  const [coverSelected, setCoverSelected] = useState(undefined);
  const [isNew, setIsNew] = useState(undefined);
  const [conditionSelected, setConditionSelected] = useState(undefined);
  const [isFreeShipping, setIsFreeShipping] = useState(undefined);
  const [shipmentSelected, setShipmentSelected] = useState(undefined);
  const [clearSelected, setClearSelected] = useState(undefined);
  const [inventoryDataFilter, setInventoryDataFilter] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const [pageData, setPageData] = useState([]);
  const [filterSlide, setFilterSlide] = useState(true);

  useEffect(() => {
    handleFilters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  function handleIsSoftcover() {
    if (isSoftcover === undefined || isSoftcover === false) {
      setIsSoftcover(true);
      setCoverSelected("soft");
    }
    if (isSoftcover === true) {
      setIsSoftcover(undefined);
      setCoverSelected(undefined);
    }
  }

  function handleIsHardcover() {
    if (isSoftcover === undefined || isSoftcover === true) {
      setIsSoftcover(false);
      setCoverSelected("hard");
    }
    if (isSoftcover === false) {
      setIsSoftcover(undefined);
      setCoverSelected(undefined);
    }
  }

  function handleIsNew() {
    if (isNew === undefined || isNew === false) {
      setIsNew(true);
      setConditionSelected("new");
    }
    if (isNew === true) {
      setIsNew(undefined);
      setConditionSelected(undefined);
    }
  }
  function handleIsUsed() {
    if (isNew === undefined || isNew === true) {
      setIsNew(false);
      setConditionSelected("used");
    }
    if (isNew === false) {
      setIsNew(undefined);
      setConditionSelected(undefined);
    }
  }
  function handleIsFreeShipping() {
    if (isFreeShipping === undefined || isFreeShipping === false) {
      setIsFreeShipping(true);
      setShipmentSelected("free");
    }
    if (isFreeShipping === true) {
      setIsFreeShipping(undefined);
      setShipmentSelected(undefined);
    }
  }

  function handlePreviousPage() {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  }
  function handleNextPage() {
    if (page < totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  }
  function handleResetFilters() {
    setIsSoftcover(undefined);
    setCoverSelected(undefined);
    setIsNew(undefined);
    setConditionSelected(undefined);
    setIsFreeShipping(undefined);
    setShipmentSelected(undefined);
    setClearSelected("clear");
  }

  function handleFilters() {
    setFilterSlide(true);

    if (
      isSoftcover === undefined &&
      isNew === undefined &&
      isFreeShipping === undefined
    ) {
      setInventoryDataFilter(inventoryData);
      setClearSelected(undefined);
    }

    // Function to filter the objects based on conditions
    function filterObjectsByConditions(arr, conditionObj) {
      return arr.filter((obj) => {
        // Check if all conditions in the conditionObj are true for the current object
        return Object.keys(conditionObj).every(
          (key) => obj[key] === conditionObj[key]
        );
      });
    }

    // Function to create the conditions object dynamically
    function createConditionsObject(
      newCondition,
      coverCondition,
      shippingCondition
    ) {
      const conditions = {};
      if (newCondition !== undefined) conditions.isNew = newCondition;
      if (coverCondition !== undefined) conditions.softcover = coverCondition;
      if (shippingCondition !== undefined)
        conditions.freeShipping = shippingCondition;
      return conditions;
    }

    const conditions = createConditionsObject(
      isNew,
      isSoftcover,
      isFreeShipping
    );
    // Filter the array based on the conditions
    const filteredArray = filterObjectsByConditions(inventoryData, conditions);
    setInventoryDataFilter(filteredArray);

    // Pagination
    const itemsPerPage = 12;
    const totalNumberPages = Math.ceil(filteredArray.length / itemsPerPage);
    setTotalPages(totalNumberPages);
    const currentPageData = filteredArray.slice(
      (page - 1) * itemsPerPage,
      page * itemsPerPage
    );
    setPageData(currentPageData);
  }

  if (inventoryDataFilter) {
    return (
      <main>
        <section className="main-section">
          <div
            className={
              cartOpenClose ? "cart-slide" : "cart-slide cart-slide--hidden"
            }
          >
            <CartFullViewB
              cartOpenClose={cartOpenClose}
              addToCart={addToCart}
              handleCartOpenClose={handleCartOpenClose}
            />
          </div>
          <div
            className={
              cartOpenClose ? "main-component test-opacity" : "main-component "
            }
          >
            <div className="main-div--left">
              <div className="filter-title">
                <h3>Filters</h3>
                <button
                  className="filter-slide--btn"
                  onClick={() => setFilterSlide(!filterSlide)}
                >
                  {filterSlide ? <HiFilter /> : <HiX />}
                </button>
              </div>

              <div
                className={
                  filterSlide ? "filter-slide" : "filter-slide--hidden"
                }
              >
                <ul className="filter--ul">
                  <li>
                    <h4>Binding</h4>
                    <div className="filter-button--div">
                      <div
                        className="filter-button"
                        onClick={() => handleIsSoftcover()}
                      >
                        <div
                          className={
                            coverSelected === "soft"
                              ? "filter-check--active filter-check"
                              : "filter-check"
                          }
                        ></div>
                        <div>Softcover</div>
                      </div>
                      <div
                        className="filter-button"
                        onClick={() => handleIsHardcover()}
                      >
                        <div
                          className={
                            coverSelected === "hard"
                              ? "filter-check--active filter-check"
                              : "filter-check"
                          }
                        ></div>
                        <div>Hardcover</div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <h4>Condition</h4>
                    <div className="filter-button--div">
                      <div
                        className="filter-button"
                        onClick={() => handleIsNew()}
                      >
                        <div
                          className={
                            conditionSelected === "new"
                              ? "filter-check--active filter-check"
                              : "filter-check"
                          }
                        ></div>
                        <div>New</div>
                      </div>
                      <div
                        className="filter-button"
                        onClick={() => handleIsUsed()}
                      >
                        <div
                          className={
                            conditionSelected === "used"
                              ? "filter-check--active filter-check"
                              : "filter-check"
                          }
                        ></div>
                        <div>Used</div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <h4>Shipping</h4>
                    <div className="filter-button--div">
                      <div
                        className="filter-button"
                        onClick={() => handleIsFreeShipping()}
                      >
                        <div
                          className={
                            shipmentSelected === "free"
                              ? "filter-check--active filter-check"
                              : "filter-check"
                          }
                        ></div>
                        <div>Free Shipping</div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <h4>Clear</h4>
                    <div className="filter-button--div">
                      <div
                        className="filter-button"
                        onClick={() => handleResetFilters()}
                      >
                        <div
                          className={
                            clearSelected === "clear"
                              ? "filter-check--active filter-check"
                              : "filter-check"
                          }
                        ></div>
                        <div>No Filters</div>
                      </div>
                    </div>
                  </li>
                </ul>

                <div className="filter-button--apply">
                  <button
                    className="all--btn"
                    onClick={() => handleFilters(true)}
                  >
                    <HiCollection />
                    Apply
                  </button>
                </div>
              </div>
            </div>
            <div className="main-div--right">
              <div className="main-div--list grid grid--3-cols">
                {pageData.map((item) => (
                  <OpenLibrary
                    key={item.isbn}
                    itemProfile={item}
                    handleFullViewId={handleFullViewId}
                    handleAddToCart={handleAddToCart}
                  />
                ))}
              </div>
              <div className="main-div--right-btn">
                <button
                  className="all--btn"
                  onClick={() => handlePreviousPage()}
                >
                  <HiArrowCircleLeft />
                </button>
                <h2>
                  Page {page} of {totalPages}
                </h2>
                <button className="all--btn" onClick={() => handleNextPage()}>
                  <HiArrowCircleRight />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

function OpenLibrary({ itemProfile, handleFullViewId, handleAddToCart }) {
  const [openFetch, setOpenFetch] = useState(null);
  const [orderCounter, setOrderCounter] = useState(1);

  function handleOrderCounter(e) {
    e.preventDefault();

    if (orderCounter === 1) return;

    if (orderCounter > 1) {
      setOrderCounter((n) => n - 1);
    }
  }

  // const itemKey = itemProfile.isbn;
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://openlibrary.org/api/books?bibkeys=ISBN:${itemProfile.isbn}&jscmd=data&format=json`
      );
      const jsonData = await response.json();
      setOpenFetch(jsonData);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  if (openFetch) {
    const openProfile = openFetch[`ISBN:${itemProfile.isbn}`];
    return (
      <div className="list-item openLibrary">
        <div
          className="list-item--img-text"
          onClick={() => handleFullViewId(openProfile, itemProfile)}
        >
          <div className="item-div--img">
            {" "}
            {openProfile.cover !== null ? (
              <img
                className="item-img"
                src={openProfile.cover.medium}
                alt="Computer Drawing"
              ></img>
            ) : (
              <img
                className="item-img"
                src="./img/logo512.png"
                alt="Computer Drawing"
              ></img>
            )}
          </div>
          <div className="item-div--text">
            <h3>{openProfile.title}</h3>
            <p>by {openProfile.authors[0].name}</p>
          </div>
        </div>
        <div className="list-item--price-cart">
          <p className="item-price">${itemProfile.price}</p>
          <div className="list-item--btn-div">
            <button
              className="item--btn item--btn-sml"
              onClick={(e) => handleOrderCounter(e)}
            >
              <HiMinus />
            </button>
            <p>{orderCounter}</p>
            <button
              className="item--btn item--btn-sml"
              onClick={() => setOrderCounter((n) => n + 1)}
            >
              <HiPlus />
            </button>
            <button
              onClick={() => handleAddToCart(itemProfile, orderCounter)}
              className="item--btn item--btn-add"
            >
              <HiShoppingCart />
              Add
            </button>
          </div>
        </div>
      </div>
    );
  }
}

function CartFullViewB({ handleCartOpenClose, addToCart }) {
  const totalPrice = addToCart.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.price * currentValue.counter,
    0
  );
  const totalCounter = addToCart.reduce(
    (accumulator, currentValue) => accumulator + currentValue.counter,
    0
  );
  return (
    <>
      <div className="cart-container">
        <div className="cart-header">
          <h2>Cart List</h2>
          <button className="all--btn" onClick={() => handleCartOpenClose()}>
            <HiX />
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
    </>
  );
}

export default MainComponent;

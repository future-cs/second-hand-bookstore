import React, { useEffect, useState } from "react";

import "./Hero.css";
import NavComponent from "./Nav";
import inventoryExternalData from "./Inventory";

function App() {
  const [fullViewId, setFullViewId] = useState(null);
  const [fullViewIdB, setFullViewIdB] = useState(null);

  const [mainSection, setMainSection] = useState(false);
  const [inventoryData, setInventoryData] = useState(null);
  const [nav, setNav] = useState(10);
  const [addToCart, setAddToCart] = useState([]);

  useEffect(() => {
    initMainPage();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function initMainPage() {
    setInventoryData(inventoryExternalData);
  }

  function handleHomeView() {
    setFullViewId(null);
    setMainSection(false);
  }
  function handleFullViewId(id, idB) {
    setFullViewId(id);
    setFullViewIdB(idB);
    setMainSection(true);
  }

  function handleAddToCart(itemId) {
    const addToCartLogic = addToCart;
    addToCartLogic.push(itemId);
    setAddToCart(addToCartLogic);
    setNav(nav + 1);
    console.log(addToCart);
  }

  return (
    <div className="App">
      <NavComponent
        key={nav}
        handleHomeView={handleHomeView}
        addToCart={addToCart}
      />

      {mainSection === false && inventoryData !== null ? (
        <MainComponent
          handleFullViewId={handleFullViewId}
          inventoryData={inventoryData}
        />
      ) : (
        <></>
      )}
      {mainSection === true ? (
        <MainComponentFullViewId
          fullViewId={fullViewId}
          fullViewIdB={fullViewIdB}
          handleAddToCart={handleAddToCart}
        />
      ) : (
        <></>
      )}
    </div>
  );
}

function MainComponent({ handleFullViewId, inventoryData }) {
  const [isHardcover, setIsHardcover] = useState(false);
  const [isSoftcover, setIsSoftcover] = useState(false);
  const [isNew, setIsNew] = useState(false);
  const [isUsed, setIsUsed] = useState(false);
  const [isFreeShipping, setIsFreeShipping] = useState(false);
  const [inventoryDataFilter, setInventoryDataFilter] = useState([]);

  useEffect(() => {
    handleFilters();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleIsHardcover() {
    setIsHardcover(!isHardcover);
    setIsSoftcover(false);
  }
  function handleIsSoftcover() {
    setIsSoftcover(!isSoftcover);
    setIsHardcover(false);
  }
  function handleIsNew() {
    setIsNew(!isNew);
    setIsUsed(false);
  }
  function handleIsUsed() {
    setIsUsed(!isUsed);
    setIsNew(false);
  }
  function handleResetFilters() {
    setIsHardcover(false);
    setIsSoftcover(false);
    setIsNew(false);
    setIsUsed(false);
    setIsFreeShipping(false);

    return handleFilters();
  }
  function handleFilters() {
    if (
      isHardcover === false &&
      isSoftcover === false &&
      isNew === false &&
      isUsed === false &&
      isFreeShipping === false
    ) {
      return setInventoryDataFilter(inventoryData);
    }

    let filteredData = [];

    if (isHardcover === true) {
      const applyFilter = () =>
        inventoryExternalData.filter((item) => item.hardcover === true);
      filteredData = applyFilter;
    }
    if (isSoftcover === true) {
      const applyFilter = () =>
        inventoryExternalData.filter((item) => item.softcover === true);
      filteredData = applyFilter;
    }
    if (isNew === true) {
      const applyFilter = () =>
        inventoryExternalData.filter((item) => item.isNew === true);
      filteredData = applyFilter;
    }
    if (isUsed === true) {
      const applyFilter = () =>
        inventoryExternalData.filter((item) => item.isUsed === true);
      filteredData = applyFilter;
    }
    if (isFreeShipping === true) {
      const applyFilter = () =>
        inventoryExternalData.filter((item) => item.freeShipping === true);
      filteredData = applyFilter;
    }
    // Final array after all filters
    return setInventoryDataFilter(filteredData);
  }

  if (inventoryData) {
    return (
      <section className="main-section">
        <div className="main-component">
          <div className="main-div--left">
            <h2>Filters</h2>
            <ul>
              <li>
                <h4>Bindings</h4>
                <div className="filter-button--div">
                  <div
                    className="filter-button"
                    onClick={() => handleIsHardcover()}
                  >
                    <div
                      className={
                        isHardcover === true
                          ? "filter-check--active filter-check"
                          : "filter-check"
                      }
                    ></div>
                    <div>Hardcover</div>
                  </div>
                  <div
                    className="filter-button"
                    onClick={() => handleIsSoftcover()}
                  >
                    <div
                      className={
                        isSoftcover === true
                          ? "filter-check--active filter-check"
                          : "filter-check"
                      }
                    ></div>
                    <div>Softcover</div>
                  </div>
                </div>
              </li>
              <li>
                <h4>Condition</h4>
                <div className="filter-button--div">
                  <div className="filter-button" onClick={() => handleIsNew()}>
                    <div
                      className={
                        isNew === true
                          ? "filter-check--active filter-check"
                          : "filter-check"
                      }
                    ></div>
                    <div>New</div>
                  </div>
                  <div className="filter-button" onClick={() => handleIsUsed()}>
                    <div
                      className={
                        isUsed === true
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
                    onClick={() => setIsFreeShipping(!isFreeShipping)}
                  >
                    <div
                      className={
                        isFreeShipping === true
                          ? "filter-check--active filter-check"
                          : "filter-check"
                      }
                    ></div>
                    <div>Free Shipping</div>
                  </div>
                </div>
              </li>
              <li>
                <h4>Button</h4>
                <div className="filter-button--div">
                  <div
                    className="filter-button"
                    onClick={() => handleFilters()}
                  >
                    <div className="filter-check"></div>
                    <div>Apply Filters</div>
                  </div>
                  <div
                    className="filter-button"
                    onClick={() => handleResetFilters()}
                  >
                    <div className="filter-check"></div>
                    <div>Clear Filters</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="main-div--right">
            <div className="main-div--list"></div>
            <div className="main-div--list">
              {inventoryDataFilter.map((item) => (
                <OpenLibrary
                  key={item.isbn}
                  itemProfile={item}
                  handleFullViewId={handleFullViewId}
                />
              ))}
            </div>
            <div className="main-div--right-btn">
              <button>Previous</button>
              <button>Next</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

function OpenLibrary({ itemProfile, handleFullViewId }) {
  const [openFetch, setOpenFetch] = useState(null);
  const itemKey = itemProfile.isbn;
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
    const openDistruc = openFetch[`ISBN:${itemProfile.isbn}`];
    return (
      <div
        className="list-item openLibrary"
        onClick={() => handleFullViewId(openDistruc, itemKey)}
      >
        <div className="item-div--img">
          {" "}
          {openDistruc.cover !== null ? (
            <img
              className="hero-img"
              src={openDistruc.cover.medium}
              alt="Computer Drawing"
            ></img>
          ) : (
            <img
              className="hero-img"
              src="./img/logo512.png"
              alt="Computer Drawing"
            ></img>
          )}
        </div>
        <div className="item-div--text">
          <h3>{openDistruc.title}</h3>
          <p>{openDistruc.authors[0].name}</p>
          <p>Price: ${itemProfile.price}</p>
        </div>
      </div>
    );
  }
}

function MainComponentFullViewId({ fullViewId, fullViewIdB, handleAddToCart }) {
  return (
    <section className="main-section">
      <div className="main-component">
        <div className="component-grid">
          <div className="component-div--left">
            <img
              className="component-img--medium"
              src={fullViewId.cover.large}
              alt="Computer Drawing"
            ></img>
          </div>
          <div className="component-div--right">
            <ul className="component-div--right-ul">
              <li className="component-div--right-li">
                <span className="component-div--right-li--item">Title:</span>
                <span className="component-div--right-li--text">
                  <h1>{fullViewId.title}</h1>;
                </span>
              </li>
              <li className="component-div--right-li">
                <span className="component-div--right-li--item">Author:</span>
                <span className="component-div--right-li--text">
                  {fullViewId.authors[0].name}
                </span>
              </li>
              <li className="component-div--right-li">
                <span className="component-div--right-li--item">Pages:</span>
                <span className="component-div--right-li--text">
                  {fullViewId.number_of_pages}
                </span>
              </li>
              <li className="component-div--right-li">
                <span className="component-div--right-li--item">
                  Date of Publication:
                </span>
                <span className="component-div--right-li--text">
                  {fullViewId.publish_date}
                </span>
              </li>
              <li className="component-div--right-li">
                <span className="component-div--right-li--item">
                  Publisher:
                </span>
                <span className="component-div--right-li--text">
                  {fullViewId.publishers[0].name}
                </span>
              </li>
              <li className="component-div--right-li">
                <span className="component-div--right-li--item">Notes:</span>
                <span className="component-div--right-li--text">
                  {fullViewId.notes}
                </span>
              </li>
              <li className="component-div--right-li">
                <span className="component-div--right-li--item">
                  What is this book about:
                </span>
                <span className="component-div--right-li--text">
                  {fullViewId.subjects.map((i) => i.name).join(" ,")}
                </span>
              </li>
            </ul>
          </div>

          <button onClick={() => handleAddToCart(fullViewIdB)}>CART</button>
        </div>
      </div>
    </section>
  );
}

export default App;

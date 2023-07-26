import React, { useEffect, useState } from "react";

function MainComponent({ handleFullViewId, inventoryData }) {
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
  function handleIsNotFreeShipping() {
    if (isFreeShipping === undefined || isFreeShipping === true) {
      setIsFreeShipping(false);
      setShipmentSelected("notFree");
    }
    if (isFreeShipping === false) {
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
    console.log(filteredArray);
    setInventoryDataFilter(filteredArray);

    // Pagination
    const itemsPerPage = 6;
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
      <section className="main-section">
        <div className="main-component main-component-grid">
          <div className="main-div--left">
            <h2>Filters</h2>
            <ul>
              <li>
                <h4>Bindings</h4>
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
                  <div className="filter-button" onClick={() => handleIsNew()}>
                    <div
                      className={
                        conditionSelected === "new"
                          ? "filter-check--active filter-check"
                          : "filter-check"
                      }
                    ></div>
                    <div>New</div>
                  </div>
                  <div className="filter-button" onClick={() => handleIsUsed()}>
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
                  <div
                    className="filter-button"
                    onClick={() => handleIsNotFreeShipping()}
                  >
                    <div
                      className={
                        shipmentSelected === "notFree"
                          ? "filter-check--active filter-check"
                          : "filter-check"
                      }
                    ></div>
                    <div>Not Free Shipping</div>
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
              <button className="all--btn" onClick={() => handleFilters()}>
                Apply Filters
              </button>
            </div>
          </div>
          <div className="main-div--right">
            <div className="main-div--list"></div>
            <div className="main-div--list">
              {pageData.map((item) => (
                <OpenLibrary
                  key={item.isbn}
                  itemProfile={item}
                  handleFullViewId={handleFullViewId}
                />
              ))}
            </div>
            <div className="main-div--right-btn">
              <button className="all--btn" onClick={() => handlePreviousPage()}>
                Previous
              </button>
              <h2>
                {page} of {totalPages}
              </h2>
              <button className="all--btn" onClick={() => handleNextPage()}>
                Next
              </button>
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
          <p>by {openDistruc.authors[0].name}</p>
          <p className="item-price">${itemProfile.price}</p>
        </div>
      </div>
    );
  }
}

export default MainComponent;
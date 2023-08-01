import React, { useEffect, useState } from "react";

import "./general.css";
import "./header.css";
import "./queries.css";
import "./main.css";
import "./footer.css";

import NavComponent from "./Header";
import inventoryExternalData from "./Inventory";
import MainComponent from "./MainComponent";
import MainComponentFullViewId from "./MainComponentFullviewId";
import FooterComponent from "./Footer";

function App() {
  const [fullViewId, setFullViewId] = useState(null);
  const [fullViewIdB, setFullViewIdB] = useState(null);
  const [cartOpenClose, setCartOpenClose] = useState(false);
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
  function handleFullViewId(id, idB, itemProfile) {
    setFullViewId(id);
    setFullViewIdB(idB);
    setMainSection(true);
  }

  function handleAddToCart(itemId, counter, fullViewBBBBB) {
    if (addToCart.some((item) => item.isbn === itemId.isbn)) {
      console.log(itemId);
      const testA = addToCart.find((item) => item.isbn === itemId.isbn);
      testA.counter = testA.counter + counter;
      setNav(nav + 1);

      console.log(testA);
    } else {
      const addToCartLogic = addToCart;
      let makeObj = {};
      makeObj = itemId;
      makeObj.counter = counter;
      // makeObj.fullViewBBBBB = fullViewBBBBB;

      addToCartLogic.push(makeObj);
      setAddToCart(addToCartLogic);
      setNav(nav + 1);
      console.log(addToCart);
    }
  }

  function handleCartOpenClose() {
    setCartOpenClose(!cartOpenClose);
  }

  return (
    <div className="App">
      <NavComponent
        key={nav}
        handleHomeView={handleHomeView}
        addToCart={addToCart}
        handleCartOpenClose={handleCartOpenClose}
      />

      {mainSection === false && inventoryData !== null ? (
        <MainComponent
          handleFullViewId={handleFullViewId}
          inventoryData={inventoryData}
          handleAddToCart={handleAddToCart}
          cartOpenClose={cartOpenClose}
          addToCart={addToCart}
          handleCartOpenClose={handleCartOpenClose}
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
      <FooterComponent />
    </div>
  );
}

export default App;

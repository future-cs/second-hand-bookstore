import React, { useEffect, useState } from "react";

import "./Hero.css";
import "./nav.css";
import NavComponent from "./Nav";
import inventoryExternalData from "./Inventory";
import MainComponent from "./MainComponent";
import MainComponentFullViewId from "./MainComponentFullviewId";

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

export default App;

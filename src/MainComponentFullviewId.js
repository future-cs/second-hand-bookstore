import React, { useState } from "react";
import {
  HiShoppingCart,
  HiBookOpen,
  HiMail,
  HiStar,
  HiPlus,
  HiMinus,
} from "react-icons/hi";

function MainComponentFullViewId({ fullViewId, fullViewIdB, handleAddToCart }) {
  const [orderCounter, setOrderCounter] = useState(1);

  function handleOrderCounter(e) {
    e.preventDefault();

    if (orderCounter === 1) return;

    if (orderCounter > 1) {
      setOrderCounter((n) => n - 1);
    }
  }

  return (
    <section className="main-section">
      <div className="full-view-grid">
        <div className="full-view-div-img">
          <img
            className="full-view-img"
            src={fullViewId.cover.large}
            alt="Book Cover."
          ></img>
        </div>

        <div className="full-view-content">
          <div className="full-view-tags">
            <div className="full-view-tag">
              <HiBookOpen className="tag-icon" />
              {fullViewIdB.softcover ? "Softcover" : "Hardcover"}
            </div>
            <div className="full-view-tag">
              <HiStar className="tag-icon" />
              {fullViewIdB.isNew ? "New" : "Used"}
            </div>
            <div className="full-view-tag">
              <HiMail className="tag-icon" />

              {fullViewIdB.freeShipping ? "Free Shipping" : "Not Free Shipping"}
            </div>
          </div>
          <ul className="full-view-ul">
            <li className="full-view-li">
              <span className="full-view-results">{fullViewId.title}</span>
            </li>
            <li className="full-view-li">
              <span className="full-view-headers">Author:</span>
              <span className="full-view-results">
                {fullViewId.authors[0].name}
              </span>
            </li>
            <li className="full-view-li">
              <span className="full-view-headers">Pages:</span>
              <span className="full-view-results">
                {fullViewId.number_of_pages}
              </span>
            </li>
            <li className="full-view-li">
              <span className="full-view-headers">Date of Publication:</span>
              <span className="full-view-results">
                {fullViewId.publish_date}
              </span>
            </li>
            <li className="full-view-li">
              <span className="full-view-headers">Publisher:</span>
              <span className="full-view-results">
                {fullViewId.publishers[0].name}
              </span>
            </li>
            <li className="full-view-li">
              <span className="full-view-headers">Notes:</span>
              <span className="full-view-results">{fullViewId.notes}</span>
            </li>
          </ul>
          <ul className="full-view-ul">
            <li className="full-view-li">
              <span>Topics:</span>
            </li>

            {fullViewId.subjects.map((sub) => (
              <li className="full-view-li" key={sub.name}>
                <span>{sub.name}</span>
              </li>
            ))}
          </ul>

          <div className="full-view--price-cart">
            <p className="full-view--price">Price: ${fullViewIdB.price}</p>
            <div className="full-view--btn-div">
              <button
                className="full-view--btn"
                onClick={(e) => handleOrderCounter(e)}
              >
                <HiMinus />
              </button>
              <p>{orderCounter}</p>
              <button
                className="full-view--btn"
                onClick={() => setOrderCounter((n) => n + 1)}
              >
                <HiPlus />
              </button>
            </div>
            <button
              onClick={() => handleAddToCart(fullViewIdB, orderCounter)}
              className="full-view--btn full-view--btn-add"
            >
              <HiShoppingCart />
              Add
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainComponentFullViewId;

function MainComponentFullViewId({ fullViewId, fullViewIdB, handleAddToCart }) {
  return (
    <section className="main-section">
      <div className="main-component main-component-grid-id">
        <div className="fullView-img">
          <img
            className="fullView-img"
            src={fullViewId.cover.medium}
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
              <span className="component-div--right-li--item">Publisher:</span>
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
          <button onClick={() => handleAddToCart(fullViewIdB)}>CART</button>
        </div>
      </div>
    </section>
  );
}

export default MainComponentFullViewId;

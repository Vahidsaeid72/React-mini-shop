import React from "react";
import Filter from "./filter";
import Products from "./products";
import Sidebar from "./sidebar";

const MainContent = ({
  items,
  sortProducts,
  selectBrand,
  addProducts,
  cartItems,
  handleDelete,
}) => {
  return (
    <main>
      <div className="content">
        <div className="main">
          <Filter
            items={items}
            sortProducts={sortProducts}
            selectBrand={selectBrand}
          />
          <Products items={items} addProducts={addProducts} />
        </div>
        <Sidebar cartItems={cartItems} handleDelete={handleDelete} />
      </div>
    </main>
  );
};

export default MainContent;

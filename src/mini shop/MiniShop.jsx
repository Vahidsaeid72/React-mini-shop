import React from "react";
import Footer from "./footer/footer";
import Header from "./header/header";
import MainContent from "./mainContent/mainContent";
import Data from "../data.json";
import "./miniShop.css";
import { useState } from "react";

const MiniShop = () => {
  const [items, setItems] = useState(Data.products);
  const [mainItems] = useState(Data.products);
  const [sort, setSort] = useState("asc");
  const [cartItems, setCartItems] = useState([]);

  const sortProducts = (value) => {
    setSort(value);
    if (sort === "asc") {
      setItems(Data.products.sort((a, b) => (a.id < b.id ? 1 : -1)));
    } else if (sort === "desc") {
      setItems(Data.products.sort((a, b) => (a.id > b.id ? 1 : -1)));
    }
  };

  const selectBrand = (value) => {
    if (value === "all") {
      setItems(mainItems);
    } else {
      setItems(mainItems.filter((item) => item.availableBrand.includes(value)));
    }
  };

  const addProducts = (item) => {
    if (cartItems.includes(item)) {
      const newItems = [...cartItems];
      const index = newItems.findIndex((i) => i.id === item.id);
      newItems[index].qty += 1;
      setCartItems(newItems);
    } else {
      setCartItems([...cartItems, item]);
    }
  };

  const handleDelete = (itemId) => {
    const newItems = [...cartItems];
    const index = newItems.findIndex((i) => i.id === itemId);
    if (newItems[index].qty > 1) {
      newItems[index].qty -= 1;
      setCartItems(newItems);
    } else {
      setCartItems((oldItems) => {
        const newItems = oldItems.filter((item) => item.id !== itemId);
        return newItems;
      });
    }
  };
  return (
    <div className="container">
      <Header />
      <MainContent
        items={items}
        sortProducts={sortProducts}
        selectBrand={selectBrand}
        addProducts={addProducts}
        cartItems={cartItems}
        handleDelete={handleDelete}
      />
      <Footer />
    </div>
  );
};

export default MiniShop;

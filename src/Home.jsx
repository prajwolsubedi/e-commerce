import React from "react";
import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCards";
import { FAKESTOREAPI } from "./assets/constants";
import SearchProduct from "./components/SearchProduct";
import { useDispatch } from "react-redux";
import { initializeProducts } from "./assets/ProductSlice";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useSelector } from "react-redux";

const Home = () => {
  const allProducts = useSelector((state) => state.product.allProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    getProduct();
    window.scrollTo(0, 0);
  }, []);

  async function getProduct() {
    const data = await fetch(FAKESTOREAPI + "products");
    const json = await data.json();
    dispatch(initializeProducts(json));
  }
  return (
    <div>
      <Navbar />
      <SearchProduct />
      <ProductCard />
      <Footer />
    </div>
  );
};

export default Home;

import React from "react";
import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import {FAKESTOREAPI} from "./assets/constants"
import SearchProduct from "./components/SearchProduct";
const Home = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState([]);
  useEffect(() => {
    getProduct();
  }, []);


  console.log("Page reload");
  async function getProduct() {
    const data = await fetch(FAKESTOREAPI + "products");
    const json = await data.json();
    setAllProducts(json);
    setFilteredProducts(json);
    const category = [... new Set(json.map((value) => value?.category))]
    category.unshift("ALL")
    setCategory(category)
  }
  return (
    <div>
    {/* Filter Section */}
      <SearchProduct allProducts={allProducts} filteredProducts={filteredProducts} setFilteredProducts={setFilteredProducts} category={category}  />
      <ProductCard filteredProducts={filteredProducts}/>
    </div>
  );
};

export default Home;

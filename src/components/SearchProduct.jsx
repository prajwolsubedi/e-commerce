import React from "react";
import { GrSearch } from "react-icons/gr";
import { GrLocation } from "react-icons/gr";
import { IoLocationOutline } from "react-icons/io5";
import { useState } from "react";
import PriceDropdown from "./PriceDropdown";
import CategoryDropdown from "./CategoryDropdown";

const SearchProduct = ({
  allProducts,
  filteredProducts,
  setFilteredProducts,
  category,
}) => {
  const [input, setInput] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    {
      input === ""
        ? setFilteredProducts(allProducts)
        : setFilteredProducts(
            filteredProducts.filter((value) =>
              value?.title?.toLowerCase()?.includes(input?.toLowerCase())
            )
          );
    }
  };

  return (
    <form
      className=" px-20 py-5 relative bg-[#232f3e] flex justify-between"
      onSubmit={null}
    >
      <div className=" flex w-6/12 ">
        {/* #131921 */}
        <div className="text-white">
          <IoLocationOutline size={30} />
        </div>
        <p className="text-white ">
          <span className="text-[#ccc]">Fast</span> Delivery
        </p>
        <input
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleClick(e);
          }}
          type="search"
          placeholder="Search Product"
          className="w-10/12 p-2 rounded-l-lg "
        />
        <button
          type="button"
          onClick={handleClick}
          className="px-2 bg-[#febd69] rounded-r-lg"
        >
          <GrSearch size={23} />
        </button>
      </div>
      <CategoryDropdown category={category} allProducts={allProducts} filteredProducts={filteredProducts} setFilteredProducts={setFilteredProducts}  />
      <PriceDropdown  filteredProducts={filteredProducts} setFilteredProducts={setFilteredProducts} allProducts={allProducts} />
    </form>
  );
};

export default SearchProduct;

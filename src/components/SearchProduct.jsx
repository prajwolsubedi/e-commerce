import React from "react";
import { GrSearch } from "react-icons/gr";
import { IoLocationOutline } from "react-icons/io5";
import PriceDropdown from "./PriceDropdown";
import CategoryDropdown from "./CategoryDropdown";
import { useSelector, useDispatch } from "react-redux";
import { onInputChange } from "../assets/ProductSlice";
import { onFilter } from "../assets/ProductSlice";
import "../css/custom.css";

const SearchProduct = () => {
  const priceLimit = (index) => {
    if (index === 0) {
      return [0, 100000000];
    } else if (index === 1) {
      return [0, 50];
    } else if (index === 2) {
      return [50, 100];
    } else if (index === 3) {
      return [100, 150];
    } else if (index === 4) {
      return [150, 200];
    }
  };
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.product.allProducts);
  const inputText = useSelector((state) => state.product.inputText);
  const category = useSelector((state) => state.product.category);
  const price = useSelector((state) => state.product.price);

  const filterProducts = () => {
    const [lowerLimit, upperLimit] = priceLimit(price);

    if (category !== "ALL") {
      const updatedCategory = allProducts.filter(
        (item) => item.category === category
      );
      if (price !== 0) {
        const updatedPrice = updatedCategory.filter(
          (item) => item.price >= lowerLimit && item.price <= upperLimit
        );
        const updatedInputText = updatedPrice.filter((item) =>
          item?.title?.toLowerCase()?.includes(inputText?.toLowerCase())
        );
        return updatedInputText;
      } else {
        const updatedInputText = updatedCategory.filter((item) =>
          item?.title?.toLowerCase()?.includes(inputText?.toLowerCase())
        );
        return updatedInputText;
      }
    } else {
      if (price !== 0) {
        const updatedPrice = allProducts.filter(
          (item) => item.price >= lowerLimit && item.price <= upperLimit
        );
        const updatedInputText = updatedPrice.filter((item) =>
          item?.title?.toLowerCase()?.includes(inputText?.toLowerCase())
        );
        return updatedInputText;
      } else {
        const updatedInputText = allProducts.filter((item) =>
          item?.title?.toLowerCase()?.includes(inputText?.toLowerCase())
        );
        return updatedInputText;
      }
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    const filteredArray = filterProducts();
    dispatch(onFilter([...filteredArray]));
  };

  return (
    <form
      className="px-16 py-2 pb-7 pr-28 relative bg-[#232f3e]  flex justify-between  max-sm:flex-col max-sm:px-10 max-md:px-5 max-lg:px-10 max-xl:px-16 max-xl:py-5 "
      onSubmit={null}
    >
      <div className="flex w-7/12 mr-20  ring-3 focus-within:ring-[#ea9834] rounded-lg max-sm:w-full max-sm:my-5 max-md:w-8/12 max-md:mr-5 max-lg:mx-0 max-lg:w-8/12 max-lg:text-sm max-xl:mx-0  ">
        <input
          onChange={(e) => dispatch(onInputChange(e.target.value))}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleClick(e);
          }}
          type="search"
          placeholder="Search Product"
          className="w-11/12 p-2 rounded-l-lg  outline-none"
        />
        <button
          type="button"
          onClick={handleClick}
          className="px-2 bg-[#febd69] hover:bg-[#efaf5b] rounded-r-lg "
        >
          <GrSearch className="text-[#111] mx-1" size={26} />
        </button>
      </div>
      <div className="flex w-6/12 justify-between max-sm:w-full max-sm:my-5 max-md:w-7/12 max-lg:w-6/12 max-lg:justify-evenly max-xl:w-7/12 max-xl:justify-evenly max-lg:text-sm ">
        <CategoryDropdown filterProducts={filterProducts} />
        <PriceDropdown filterProducts={filterProducts} />
      </div>
      <div className="flex ml-16 font-figtree text-[#7c9abd] -mt-1 w-2/12  max-sm:hidden max-md:hidden  max-lg:w-1/12 max-xl:w-2/12  max-lg:mx-0 max-xl:mx-0 ">
        <IoLocationOutline size={35} className="mt-1 max-lg:hidden" />
        <div className=" flex flex-col leading-4 mt-1 pt-1 max-lg:text-xs">
          <p className="text-[#7c9abd]">FAST</p>
          <p className="text-[#7c9abd] ">DELIVERY</p>
        </div>
      </div>
    </form>
  );
};

export default SearchProduct;

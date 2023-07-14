import { useState } from "react";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";
import { Price } from "../assets/constants";
const PriceDropdown = ({
  filteredProducts,
  setFilteredProducts,
  allProducts,
}) => {
  const allFilteredArray = (arr1, arr2) => {
    const filteredArray = arr1.filter((item1) => {
      const matchingObj = arr2.find((item2) => item1.id === item2.id);
      return matchingObj !== undefined;
    });
    return filteredArray;
  };

  const priceFilter = (lowerLimit, UpperLimit) => {
    return allProducts.filter(
      (item) => item.price >= lowerLimit && item.price <= UpperLimit
    );
  };

  const [isOpen, setIsOpen] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const handlePriceClick = (price) => {
    setSelectedPrice(price);
    setIsOpen((prev) => !prev);
    if (price === "None") {
      setFilteredProducts(allProducts);
    } else if (price === "$0 - $50") {
      const priceFilteredArray = priceFilter(0, 50);
      setFilteredProducts(
        allFilteredArray(priceFilteredArray, filteredProducts)
      );
    } else if (price === "$50 - $100") {
      const priceFilteredArray = priceFilter(50, 100);
      setFilteredProducts(
        allFilteredArray(priceFilteredArray, filteredProducts)
      );
    } else if (price === "$100 - $150") {
      const priceFilteredArray = priceFilter(100, 150);
      setFilteredProducts(
        allFilteredArray(priceFilteredArray, filteredProducts)
      );
    } else if (price === "$150 - $200") {
      const priceFilteredArray = priceFilter(150, 200);
      setFilteredProducts(
        allFilteredArray(priceFilteredArray, filteredProducts)
      );
    }
  };
  return (
    <div className="w-1/6 text-[#fff] flex flex-col items-center rounded-lg relative">
      <button
        className="bg-white text-black w-full p-2 flex items-center justify-between rounded-lg tracking-wider border-4 border-transparent active:border-[#232f3e] duration-300 active:text-yellow-900"
        onClick={(e) => {
          setIsOpen((prev) => !prev);
          e.preventDefault();
        }}
      >
        {!selectedPrice ? "None" : selectedPrice}
        {isOpen ? <AiOutlineCaretUp /> : <AiOutlineCaretDown />}
      </button>
      {isOpen && (
        <div className="bg-gray-200 absolute top-16 flex flex-col justify-center  rounded-lg py-2 w-full text-black">
          {Price.map((price, index) => (
            <h3
              key={index}
              className="w-full  font-figtree pl-4 hover:bg-[#3a7bc085] cursor-pointer rounded"
              onClick={() => handlePriceClick(price)}
            >
              {price}
            </h3>
          ))}
        </div>
      )}
    </div>
  );
};

export default PriceDropdown;

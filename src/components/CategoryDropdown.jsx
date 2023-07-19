import { useEffect, useState } from "react";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";
import { category } from "../assets/constants";
import { useDispatch, useSelector } from "react-redux";
import { onCategoryChange, onFilter } from "../assets/ProductSlice";
const CategoryDropdown = ({ filterProducts }) => {
  const currCategory = useSelector((state) => state.product.category);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setIsOpen((prev) => !prev);
    dispatch(onCategoryChange(category));
  };
  useEffect(() => {
    const filteredProductsArray = filterProducts();
    dispatch(onFilter(filteredProductsArray));
  }, [currCategory]);
  return (
    <div className="w-2/5 text-[#fff] flex flex-col items-center rounded-lg relative max-md:w-3/6 max-md:mr-2 whitespace-nowrap">
      <button
        className="bg-white text-black w-full py-1 px-2 flex items-center justify-between rounded-lg tracking-wider border-4 border-transparent active:border-[#232f3e] duration-300 active:text-yellow-900"
        onClick={(e) => {
          setIsOpen((prev) => !prev);
          e.preventDefault();
        }}
      >
        {!selectedCategory ? "Category" : selectedCategory}
        {isOpen ? <AiOutlineCaretUp /> : <AiOutlineCaretDown />}
      </button>
      {isOpen && (
        <div className="bg-gray-200 absolute top-16 flex flex-col justify-center  rounded-lg py-2 w-full text-black ">
          {category.map((item, index) => (
            <h3
              key={index}
              className="w-full text-lg font-figtree pl-4 hover:bg-[#3a7bc085] cursor-pointer rounded "
              onClick={() => handleCategoryClick(item)}
            >
              {item}
            </h3>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryDropdown;

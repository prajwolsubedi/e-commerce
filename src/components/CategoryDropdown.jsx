import { useState } from "react";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";
const CategoryDropdown = ({ category, allProducts, setFilteredProducts, filteredProducts }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setIsOpen((prev) => !prev);
    if (category === "ALL"){
      setFilteredProducts(allProducts)
    }
    else {
      const result = allProducts.filter((item) => item.category === category)
      const filteredArray = result.filter(item1 => {
        const matchingObj = filteredProducts.find(item2 => item1.id === item2.id)
        return matchingObj !== undefined;
      })
      setFilteredProducts(filteredArray);
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
        {!selectedCategory ? "Category" : selectedCategory}
        {isOpen ? <AiOutlineCaretUp /> : <AiOutlineCaretDown />}
      </button>
      {isOpen && (
        <div className="bg-gray-200 absolute top-16 flex flex-col justify-center  rounded-lg py-2 w-full text-black">
          {category.map((item, index) => (
            <h3
              key={index}
              className="w-full text-lg font-figtree pl-4 hover:bg-[#3a7bc085] cursor-pointer rounded"
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

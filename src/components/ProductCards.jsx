import React from "react";
import { FcRating } from "react-icons/fc";
import { IoIosArrowForward } from "react-icons/io";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ShimmerUI from "./ShimmerUI";
const ProductsCard = () => {
  const filteredProducts = useSelector(
    (state) => state?.product?.filteredProducts
  );
  return filteredProducts.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="flex flex-wrap justify-between px-20 my-20 ">
      {filteredProducts?.map((value) => {
        return (
          <Link to={"/products/" + value.id} key={value.id}>
            <div className="flex flex-col w-72 my-10 ">
              <img className=" w-72 h-80 object-scale-down" src={value.image} />
              <div className="pl-4">
                <p className="font-comic  text-[#007185] font-semibold">
                  {value.title}
                </p>
                <div className="flex ">
                  <IoIosArrowForward
                    size={12}
                    className="mt-2 text-[#007185]"
                  />
                  <p className="text-[#007185] font-comic">{value.category}</p>
                </div>
                <div className="flex ">
                  <p className="">{value.rating.rate}</p>
                  <FcRating className="mt-1 mx-1" />
                </div>
                <div className="flex">
                  <p className="text-xs text-[#0F1111] pt-1"> $ </p>
                  <p className="text-[#0F1111] text-base font-semibold">
                    {value.price}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductsCard;

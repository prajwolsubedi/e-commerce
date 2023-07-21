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
    <div></div>
  );
};

export default ProductsCard;

import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ShimmerUI from "./ShimmerUI";
import { BiSolidStarHalf } from "react-icons/bi";
import { BiSolidStar } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import { useEffect, useState } from "react";
import { addItem } from "../assets/cartSlice";
import { FAKESTOREAPI } from "../assets/constants";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import "../css/custom.css";
const ProductDetail = () => {
  const [productItem, setProductItem] = useState([]);
  const [orderCount, setorderCount] = useState(1);
  const { id } = useParams();
  useEffect(() => {
    getProductItem();
    window.scrollTo(0, 0);
  }, []);


  async function getProductItem() {
    const data = await fetch(FAKESTOREAPI + "products/" + id);
    const json = await data.json();
    setProductItem(json);
  }
  const dispatch = useDispatch();

  const addProductItem = ({ productItem, orderCount }) => {
    dispatch(addItem({ productItem, orderCount }));
  };
  return !productItem || productItem.length === 0 ? (
    <ShimmerUI />
  ) : (
    <>
      <Navbar />
      <div className="flex max-sm:flex-col max-sm:items-center max-sm:text-sm max-md:text-sm">
        <div className="w-5/12 ml-24 my-24 flex flex-col text-center items-center max-sm:w-9/12 max-sm:my-10 max-sm:mx-0  max-md:mx-10 max-lg:mx-10 max-xl:mx-10 ">
          <div className="w-64 max-sm:w-60 max-md:w-52 max-lg:w-56 max-xl:w-60">
            <img src={productItem.image} />
          </div>
          <div className="px-32  max-sm:px-20 max-md:px-10 max-lg:px-10 max-xl:px-10">
            <h3 className="font-semibold text-[#B12704] text-lg mt-2">
              <span className="font-mono">$</span>
              {productItem.price}
            </h3>
            <div className="flex justify-center ">
              <p className="font-figtree font-semibold flex justify-center ">
                {productItem.rating.rate}
              </p>
              <div className="flex text-[#ee9c4a] mt-1 mx-2 mr-3">
                <BiSolidStar /> <BiSolidStar /> <BiSolidStar />{" "}
                <BiSolidStarHalf />
              </div>
              <p className="text-[#007185] font-figtree font-semibold">
                {productItem.rating.count} ratings
              </p>
            </div>
            <h2 className="font-figtree font-semibold text-left py-1">
              {productItem.title}
            </h2>
            <div className="flex py-1">
              <IoIosArrowForward size={17} className="mt-1" />
              <p className="font-figtree font-semibold">
                {productItem.category}
              </p>
            </div>
          </div>
        </div>

        <div className="my-24 w-5/12 flex flex-col  max-sm:w-9/12 max-sm:my-0 ">
          <div className="text-left py-10 pl-3 max-sm:py-0 max-md:py-0 max-lg:py-0 max-xl:py-5">
            <h2 className="font-figtree font-semibold custom-border-bottom py-2">
              Product Description
            </h2>
            <p className="font-comic font-semibold pt-2">
              {productItem.description}
            </p>
          </div>
          <div className=" flex flex-col  pl-3 py-2">
            <h2 className="font-figtree font-semibold py-3 custom-border-bottom mb-4">
              Quanity:
            </h2>
            <div className="flex custom-border justify-around w-3/12 rounded-full max-md:w-5/12 max-lg:w-5/12">
              <button
                type="button"
                className=" text-2xl font-mono"
                onClick={() => {
                  setorderCount((prev) => (prev !== 1 ? prev - 1 : prev));
                }}
              >
                -
              </button>
              <p className="text-xl pt-0.5 font-light ">{orderCount}</p>
              <button
                type="button"
                className="text-2xl font-mono"
                onClick={() => {
                  setorderCount((prev) => (prev !== 5 ? prev + 1 : prev));
                }}
              >
                +
              </button>
            </div>
          </div>

          <div className="flex py-10 pl-3 text-white max-md:pl-0 max-md:py-10 max-lg:pl-0 ">
            <button
              onClick={() => addProductItem({ productItem, orderCount })}
              type="button"
              className="  bg-[#613E98] hover:bg-[#43A69B] p-2 w-5/12 rounded-full mr-5 max-md:w-6/12 max-md:px-0 max-lg:px-0 max-lg:w-6/12 "
            >
              <span className="flex justify-center ">
                <AiOutlineShoppingCart
                  size={20}
                  className="mt-1 mr-2 max-sm:mt-0 max-md:mt-0"
                />
                Add To Cart
              </span>
            </button>
            <button
              type="button"
              className="bg-slate-600 p-2 w-5/12 rounded-full hover:bg-[#43A69B] max-md:w-6/12 max-md:p-0 max-lg:w-6/12"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;

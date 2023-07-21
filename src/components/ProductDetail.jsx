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
  
      <Footer />
    </>
  );
};

export default ProductDetail;

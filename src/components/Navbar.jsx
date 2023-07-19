import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import useOnline from "../../src/hooks/useOnline";
import Logo7 from "../assets/images/logo7.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlinePersonOutline } from "react-icons/md";
import { IoInformationCircle } from "react-icons/io5";
import { TbDiscount2 } from "react-icons/tb";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const NavLinks = () => {
  return (
    <>
      <NavLink to="/products" className="py-2 hover:text-[#8badd7]">
        Home
      </NavLink>
      <NavLink to="/offers" className="py-2 hover:text-[#8badd7]">
        Offers
      </NavLink>
      <NavLink to="/about" className="py-2 hover:text-[#8badd7]">
        About
      </NavLink>
      <NavLink to="/cart" className="py-2 hover:text-[#8badd7]">
        Cart
      </NavLink>
      <NavLink to="/profile" className="py-2 hover:text-[#8badd7]">
        Profile
      </NavLink>
    </>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen((prev) => !prev);
  };

  const isOnline = useOnline();
  const totalQuantity = useSelector((store) => store.cart.totalQuantity);
  return (
    <>
      <div className="flex pt-5 bg-[#232f3e]  text-[#d6d6d6] justify-between max-sm:flex-wrap max-md:pt-5 ">
        <div className="w-5/12 pl-16 max-sm:w-4/12  max-sm:pl-2 max-md:ml-5 max-md:w-1/12  max-lg:w-1/12 max-lg:pl-0 max-lg:mx-10 max-xl:w-3/12 ">
          <NavLink to="/products">
            <img
              src={Logo7}
              alt="img"
              className="w-16 max-sm:w-16 max-md:w-14 max-sm:pt-0 max-md:pt-5 max-lg:pt-5 max-xl:pt-5 max-2xl:pt-5 max-lg:w-14 "
            />
          </NavLink>
        </div>
        <div className="max-sm:hidden max-md:px-5 max-lg:w-10/12 max-lg:px-5 max-lg:mx-5  max-md:w-10/12 max-md:mr-0 w-7/12 px-24 mr-12 flex justify-between items-center font-comic font-semibold text-lg max-xl:w-9/12 max-xl:mx-0 max-xl:px-16 max-md:text-base ">
          <NavLink to="/products" className="flex hover:text-[#8badd7]">
            Home
          </NavLink>
          <NavLink to="/offers" className="flex hover:text-[#8badd7]">
            {<TbDiscount2 size={25} className="mr-1 max-md:hidden" />}
            Offers
          </NavLink>
          <NavLink to="/about" className="flex hover:text-[#8badd7]">
            {" "}
            {
              <IoInformationCircle
                size={25}
                className="mt-1 hover:text-[#8badd7] max-md:hidden"
              />
            }
            <span className="pl-2 mt-1 "> About </span>
          </NavLink>
          <NavLink to="/cart" className="flex hover:text-[#8badd7] ">
            {<AiOutlineShoppingCart size={25} className="mr-2" />}-{" "}
            {totalQuantity}
          </NavLink>
          <NavLink to="/profile" className="flex hover:text-[#8badd7]">
            {
              <MdOutlinePersonOutline
                size={25}
                className="mt-1 mr-2 max-md:hidden"
              />
            }{" "}
            <span className=" mt-1 ">Profile</span>
            <p className="pt-2 pl-2 text-sm max-md:hidden">
              {isOnline ? "🟢" : "🔴"}
            </p>
          </NavLink>
        </div>
        <div className="sm:hidden  mx-5">
          <button
            type="button"
            onClick={toggleNavbar}
            className="text-[#7c9abd] mt-3"
          >
            {!isOpen ? <IoMenu size={30} /> : <IoClose size={30} />}
          </button>
        </div>
        {isOpen && (
          <div className="flex flex-col items-center basis-full text-xl font-comic font-semibold mx-10 my-5 sm:hidden">
            <NavLinks />
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;

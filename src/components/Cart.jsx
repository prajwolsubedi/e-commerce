import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../assets/cartSlice";
import { AiTwotoneDelete } from "react-icons/ai";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount)
  const totalQuantity = useSelector((state) => state.cart.totalQuantity)
  console.log(cartItems);
  const clearItem = () => {
    dispatch(clearCart());
  };
  const removeCartItem = (id) => {
    dispatch(removeItem(id));
  };
  return (
    <>
      <Navbar />

      {cartItems.length === 0 || !cartItems ? (
        <h1 className="font-mono text-lg text-center p-52">
          No items added to the cart!!!
        </h1>
      ) : (
        <>
          <button
            className="mt-10 mx-16 bg-[#232f3e] text-white  border-2 border-[#232f3e] hover:bg-[#ffffff] hover:text-black rounded-lg font-figtree"
            onClick={() => clearItem()}
          >
            <span className="flex justify-center p-2 rounded">
              {" "}
              <AiTwotoneDelete className="mt-1 mr-1" /> Clear Cart{" "}
            </span>
            <p>Total price : $ {totalAmount}</p>
            <p>Total Quantity: {totalQuantity}</p>
          </button>
          <div className="flex flex-wrap m-2 p-2 ">
            {cartItems.map((item, index) => {
              return (
                <div className="my-5 mx-8 p-2 text-center w-52" key={index}>
                  <img
                    className="w-56 h-56 object-scale-down"
                    alt="image"
                    src={item.image}
                  />
                  <h2 className="text-left font-bold text-lg font-figtree whitespace-nowrap overflow-hidden overflow-ellipsis">
                    {item.title}
                  </h2>
                  <div className="flex  justify-between">
                    <div className="text-left">
                      <h3 className="font-comic font-bold">${item.price}</h3>
                      <h4 className="font-figtree">
                        Quantity : {item.quantity}
                      </h4>
                    </div>
                    <div className="pt-4 pr-5 text-[#232f3e] hover:text-gray-400">
                    {console.log(item.id)}
                      <button
                        type="button"
                        onClick={() => removeCartItem(item.id)}
                      >
                        <AiTwotoneDelete size={25} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}

      <Footer />
    </>
  );
};

export default Cart;

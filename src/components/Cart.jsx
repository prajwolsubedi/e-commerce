import Navbar from "./Navbar";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../assets/cartSlice";
import { AiTwotoneDelete } from "react-icons/ai";
import useScrollTop from "../hooks/useScrollTop";

const Cart = () => {
  // useScrollTop();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  // console.log(cartItems);
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
        <div className="bg-[#d6cfcf] ">
          <h2 className="font-mono text-lg text-center p-52">
            No items added to the cart!!!
          </h2>
        </div>
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
          </button>
          <div className="flex flex-wrap m-2 p-2  max-sm:text-sm max-sm:my-20 ">
            {cartItems.map((item, index) => {
              return (
                <div
                  className="my-5 mx-10 p-2 text-center w-52 max-sm:w-44"
                  key={index}
                >
                  <img
                    className="w-56 h-56 object-scale-down max-sm:w-40 max-sm:h-40"
                    alt="image"
                    src={item.image}
                  />
                  <h2 className="text-left font-bold text-lg font-figtree whitespace-nowrap overflow-hidden overflow-ellipsis max-sm:text-sm">
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
                      <button
                        type="button"
                        onClick={() => removeCartItem(item.id)}
                      >
                        <AiTwotoneDelete size={25} className="max-sm:w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mb-20 mx-16  max-sm:flex max-sm:flex-col max-sm:text-left">
            <button className="max-sm:mr-0 max-sm:w-8/12 max-sm:mb-2 mr-5  border-2 border-[#232f3e] text-black rounded-lg font-figtree pointer-events-none">
              <span className="flex justify-center t p-2 rounded ">
                {" "}
                <p className=""> Total Quantity: {totalQuantity}</p>
              </span>
            </button>
            <button className="max-sm:mx-0 max-sm:w-8/12 max-sm:mt-2 mx-5 border-2 border-[#232f3e] text-black hover:bg-[#ffffff] hover:text-black rounded-lg font-figtree pointer-events-none">
              <span className="flex  justify-center p-2 rounded">
                {" "}
                <p>Total price : ${totalAmount.toFixed(2)}</p>
              </span>
            </button>
          </div>
        </>
      )}

      <Footer />
    </>
  );
};

export default Cart;

import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQty,
  decrementQty,
} from "../reducer/slice/cartSlice";
import toast from "react-hot-toast";

const ItemCart = ({ imgUrl, name, price, qnty, id }) => {
  const dispatch = useDispatch();

  const incrementItem = () => {
    // console.log("Hello");
    dispatch(incrementQty({ id, price, name }));
  };

  const decrementItem = () => {
    if (qnty != 1) {
      dispatch(decrementQty({ id, name, price }));
    }
  };

  return (
    <div className="mb-3 flex gap-2 shadow-md rounded-lg p-2">
      <MdDelete
        onClick={() => {
          dispatch(removeFromCart({ id, name, price }));
          toast(`${name} Removed!`,{
            icon:"😢"
          })
        }}
        className="absolute right-7 text-gray-600 cursor-pointer"
      ></MdDelete>
      <img src={imgUrl} alt="" className="w-[50px] h-[50px] " />

      <div className="leading-5">
        <h2 className="font-bold text-gray-800 ">{name}</h2>

        <div className="flex justify-between items-center mt-1">
          <span className="text-green-400 font-bold">₹{price}</span>
          <div className="flex justify-center items-center gap-2 absolute right-7">
            <AiOutlineMinus
              onClick={decrementItem}
              className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:broder-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
            ></AiOutlineMinus>

            <span className="text-green-400 font-bold">{qnty}</span>

            <AiOutlinePlus
              onClick={incrementItem}
              className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:broder-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
            ></AiOutlinePlus>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;

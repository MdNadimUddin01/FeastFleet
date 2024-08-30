import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addtoCart } from "../reducer/slice/cartSlice";
import { Toaster } from "react-hot-toast";

const FoodCard = ({ id, name, img, desc, price, rating, handleToast }) => {

  const dispatch = useDispatch();

  return (
    <>
      <div className="font-bold w-[250px] p-5 bg-white flex flex-col justify-center gap-2 rounded-lg ">
        <img
          className="w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out"
          src={img}
          alt=""
        />

        <div className="text-sm flex justify-between">
          <h2 className="">{name}</h2>
          <span className="text-green-400"> ₹{price}</span>
        </div>

        <p className="text-sm font-normal">{desc.slice(0, 50)}...</p>

        <div className="flex justify-between">
          
          <span className="flex justify-center items-center">
            <AiFillStar className="mr-1 text-yellow-400"></AiFillStar>
            {rating}
          </span>

          <button
            onClick={() => {
              dispatch(
                addtoCart({ id, name, price, img, rating, price, qty: 1 })
              );
              handleToast(name);
            }}
            className="py-1 px-2 text-white bg-green-400 hover:bg-green-500 rounded-lg text-sm"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default FoodCard;

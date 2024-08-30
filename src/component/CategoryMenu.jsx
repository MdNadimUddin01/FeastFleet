import  data from "../data/data";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../reducer/slice/categorySlice";

const CategoryMenu = () => {

  const [categories , setCategories] = useState([]);
  const dispatch = useDispatch();

  const listUniqueCategories = () => {

    const uniqueCategories = [
     ...new Set(data.map((food) => food.category))
    ];
    setCategories(uniqueCategories);
  };

  useEffect(() => {

    listUniqueCategories();

  } , []);

 

  const selectedCategory = useSelector((state) => state.category.category)
  

  return (
    <div className="px-3 mx-6">
        
      <h3 className="text-xl font-semibold">Find the best food</h3>

      <div className="my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden ">
        {/* <div></div> */}

        <button onClick={() => dispatch(setCategory("All"))} className={`px-3 py-2 text-xl  bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white cursor-pointer ${selectedCategory === "All" && "bg-green-500 text-white"}`}>
            All
        </button>

        {
          categories.map((category , index ) => {
            return <button onClick={() => dispatch(setCategory(category))}  key={index} className={`px-3 py-2 text-xl bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white cursor-pointer ${selectedCategory === category && "bg-green-500 text-white"}`}>
            {category}
          </button>
          })
        }
        
      </div>
    </div>
  );
};

export default CategoryMenu;

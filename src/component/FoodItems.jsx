import React from "react";
import FoodCard from "./FoodCard";
import data from "../data/data";
import toast , { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

const FoodItems = () => {

  const search = useSelector((state) => state.search.search);
  const category = useSelector((state) => state.category.category);
  
  const handleToast = (name) => toast.success(`Added ${name} to Card`);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false}></Toaster>

      <div className="flex flex-row flex-wrap gap-10 my-10 justify-center lg:justify-start mx-6">
        
        {
          data.filter((food) => {

            if(category === "All"){
              return food.name.toLowerCase().includes(search.toLowerCase());
            }
            else{
               return category === food.category && food.name.toLowerCase().includes(search.toLowerCase());
            }
            
          }).map((food) => {
            return (
              <FoodCard
              id={food.id}
              name={food.name}
              price={food.price}
              desc={food.desc}
              rating={food.rating}
              img={food.img}
              key={food.id}
              handleToast={handleToast}
              ></FoodCard>
            );
          })
        }
        
      </div>
    </>
  );
};

export default FoodItems;

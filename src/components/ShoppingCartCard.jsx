import { TiTick } from "react-icons/ti";
import { useState } from "react";
const ShoppingCartCard = ({ image, name, color, price, id }) => {
  
  return (
    <div className="flex  w-[80%] border-b-1 border-t-2 border-gray-400">
      <div className="m-2 w-[30%]" >
        <img src={image} className="rounded" alt="" />
      </div>
      <div className="mt-2">
        <p className="text-xl text-gray-700">{name}</p>
        <div className="flex text-gray-500">
            <p className="mr-10">{color}</p>
            <p>Taille</p>
        </div>
        <p className="text-gray-700"><span>$</span>{price}</p>
        <div className="flex align-center ">
        <TiTick className="text-green-500 " size={24}/>
        <p>In stock</p>
        </div>
      </div>
    </div>
  )
}

export default ShoppingCartCard

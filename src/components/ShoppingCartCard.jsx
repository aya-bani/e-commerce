import { TiTick } from "react-icons/ti";
import { useState } from "react";

const ShoppingCartCard = ({ image, name, color, price, id }) => {
  const [quantity, setQuantity] = useState(1); // State to manage quantity

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  return (
    <div className="flex w-[80%] border-b border-t border-gray-400 p-4">
      {/* Product Image */}
      <div className="m-2 w-[30%]">
        <img src={image} className="rounded" alt={name} />
      </div>

      {/* Product Details */}
      <div className="flex-1 flex flex-col">
        {/* Product Info */}
        <div className="flex justify-between">
          <div>
            <p className="text-xl font-medium text-gray-700">{name}</p>
            <div className="flex items-center text-gray-700 mb-2 p-2 rounded-lg">
              <p className="mr-4 font-medium"><span className="font-semibold">{color}</span></p>
              <div className="border-l border-gray-400 h-6 mx-4"></div>
              <p className="font-medium"><span className="font-semibold">M</span></p>
            </div>

            <p className="text-gray-700">
              <span>$</span>
              {price}
            </p>
          </div>

          {/* Quantity Selector */}
          <div >
            
            <select
              id={`quantity-${id}`}
              name="quantity"
              value={quantity}
              onChange={handleQuantityChange}
              className="border border-gray-300 rounded p-2 w-[4vw]"
            >
              {Array.from({ length: 10 }, (_, i) => i + 1).map((qty) => (
                <option key={qty} value={qty}>
                  {qty}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* In Stock Section */}
        <div className="flex items-center mt-auto pt-4 ">
          <TiTick className="text-green-500 mr-2" size={24} />
          <p className="text-gray-700">In stock</p>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartCard;

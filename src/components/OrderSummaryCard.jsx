const OrderSummaryCard = () => {
  return (
<div className="flex flex-col align-center justify-center items-center bg-white border border-gray-300 rounded-lg shadow-md p-6 m-4 w-full sm:w-[45vw] md:w-[30vw] lg:w-[80vw] max-h-[70vh]">
<p className="text-xl font-semibold mb-4">Order Summary</p>

      <div className="w-full border-t border-black mb-4"></div>

      <button className="border border-black w-[88%] py-2 px-8 text-black rounded-lg hover:bg-gray-200 transition">
        Have a promo code?
      </button>

      <div className="w-full border-t border-black mt-4 mb-4"></div>

      <div className="flex justify-between w-full mb-2 px-2">
        <p className="text-gray-700">Payable Amount</p>
        <p className="font-semibold">$12</p>
      </div>

      <div className="flex justify-between w-full mb-2 px-2">
        <p className="text-gray-700">Shipping</p>
        <p className="font-semibold">$5</p>
      </div>

      <div className="w-full border-t border-black my-4"></div>

      <div className="flex justify-between w-full mb-6 px-2">
        <p className="text-lg font-semibold text-gray-800">Order Total</p>
        <p className="text-lg font-semibold">$17</p>
      </div>

      <button className="border border-2 border-black text-black w-full py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
        Proceed To Checkout
      </button>
      <div className="mt-4">
        <img src="src\assets\images\paypal.png" alt="" />
      </div>
    </div>
  );
};

export default OrderSummaryCard;

import Navbar from "C:/Users/Aya Bani/projets/e-commerce/src/components/Navbar.jsx"; 
import Footer from "C:/Users/Aya Bani/projets/e-commerce/src/components/Footer.jsx"; 
import OrderSummaryCard from "../components/OrderSummaryCard";

const ShoppingCart = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full mt-10 p-10 ">
        <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
        <div className="flex w-[100vw] ">
        <table className="w-full border-collapse border  w-[60%] ">
          <thead>
            <tr className="text-center">
              <th className="p-4 border border-gray-300 ">Image</th>
              <th className="p-4 border border-gray-300 ">Name</th>
              <th className="p-4 border border-gray-300">Amount</th>
              <th className="p-4 border border-gray-300">Quantity</th>
              <th className="p-4 border border-gray-300">Color</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>

        <div className="mb-6 w-[40%] flex justify-center">
          <OrderSummaryCard />
        </div>
        </div>
        
      </div>
      <div className="w-full mt-10 p-10 ">
      <h1 className="text-3xl font-bold mb-6">You may also like ...</h1>
      <div>

      </div>

      </div>
      <Footer />
    </div>
  );
};

export default ShoppingCart;

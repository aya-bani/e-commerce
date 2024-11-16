import React, { useState, useEffect } from "react"; // Import useState and useEffect
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx"; 
import OrderSummaryCard from "../components/OrderSummaryCard";
import { db } from "../../firebaseConfig"; 
import { collection, getDocs } from "firebase/firestore"; // Import necessary Firestore functions
import ShoppingCartCard from "../components/ShoppingCartCard.jsx";

const ShoppingCart = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSelectedItems = async () => {
      try {
        const snapshot = await getDocs(collection(db, "cartitems"));
        const items = snapshot.docs.map((doc) => doc.data());
        setSelectedItems(items);
      } catch (e) {
        console.error("Error fetching cart items:", e);
      } finally {
        setLoading(false);
      }
    };
    fetchSelectedItems();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Navbar />
      <div className="w-full mt-10 p-10">
        <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
        <div className="flex w-full align-center justify-center ">
        <div className="flex flex-col w-[70vw] ">
          {selectedItems.map((item) => (
            <ShoppingCartCard key={item.id} {...item} />
          ))}

        </div>
        <div className=" w-[30vw]  flex justify-center ">
            <OrderSummaryCard />
          </div>

        </div>
        
      </div>
      <div className="w-full mt-10 p-10">
        <h1 className="text-3xl font-bold mb-6">You may also like ...</h1>
        <div>
          {/* Add recommended items here */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ShoppingCart;

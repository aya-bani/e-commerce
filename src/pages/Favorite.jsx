import { useEffect, useState } from "react";
import { db } from "../../firebaseConfig"; 
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import ProductCard from "../components/ProductCard.jsx";
import { collection, getDocs } from "firebase/firestore"; // Import necessary Firestore functions

const FetchFavorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const snapshot = await getDocs(collection(db, "favorites")); // Use Firestore db instance
        const favoriteData = snapshot.docs.map(doc => doc.data());
        setFavorites(favoriteData);
      } catch (error) {
        console.error("Error fetching favorites:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
    <Navbar />
    <div className="w-full mx-auto ">
      <h1 className="text-3xl px-4 py-8 font-bold mb-8 text-center">Your Favorites</h1>
      <div  className=" flex flex-wrap align-center justify-center ">
      {favorites.map((favorite) => (
            <ProductCard key={favorite.id} {...favorite} />
          ))}
        </div>
    </div>
    <Footer />
  </div>
  );
};

export default FetchFavorites;

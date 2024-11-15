import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { auth, db } from "../../firebaseConfig";
import ProductCard from "../components/ProductCard";

const Favorite = () => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);  // To store the authenticated user

  useEffect(() => {
    // Listen for authentication state change
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);  // Update the user state when authentication changes
    });

    // Fetch favorites only when the user is logged in
    const fetchFavorites = async () => {
      if (user) {
        try {
          console.log('User logged in:', user); // Log user data

          const favoritesRef = collection(db, "favorites"); // Reference to Firestore collection
          const q = query(favoritesRef, where("userId", "==", user.uid)); // Query for user's favorites
          const querySnapshot = await getDocs(q); // Fetch favorites

          console.log('Fetched favorites from Firestore:', querySnapshot.docs.length); // Log number of docs

          // Map the data into an array
          const favoritesData = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));

          console.log('Mapped favorites:', favoritesData); // Log mapped data

          setFavorites(favoritesData);
        } catch (error) {
          console.error("Error fetching favorites: ", error);
        } finally {
          setLoading(false);
        }
      } else {
        console.error("User not logged in");
        setLoading(false);
      }
    };

    if (user) {
      fetchFavorites();
    }

    return () => unsubscribe();  // Cleanup the auth listener when component unmounts
  }, [user]);  // Trigger effect when user state changes

  // Handle loading state
  if (loading) {
    return (
      <div>
        <Navbar />
        <div className="text-center py-20">
          <p className="text-lg font-medium">Loading your favorites...</p>
        </div>
        <Footer />
      </div>
    );
  }

  // Handle empty favorites state
  if (favorites.length === 0) {
    return (
      <div>
        <Navbar />
        <div className="text-center py-20">
          <p className="text-lg font-medium">You have no favorites yet!</p>
        </div>
        <Footer />
      </div>
    );
  }

  // Log the final favorites data before rendering
  console.log('Rendering favorites:', favorites);

  // Render favorites
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Your Favorites</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favorites.length > 0 ? (
            favorites.map((favorite) => (
              <ProductCard
                key={favorite.id}
                id={favorite.id}
                image={favorite.image}
                name={favorite.name}
                etoile={favorite.etoile}
                price={favorite.price}
              />
            ))
          ) : (
            <p className="text-center">No favorite items to show.</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Favorite;

import { GiShoppingCart } from "react-icons/gi";
import { MdShoppingCart } from "react-icons/md";
import { VscHeart, VscHeartFilled } from "react-icons/vsc";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { db } from '../../firebaseConfig'; // Ensure this import points to the correct Firebase config file
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  deleteDoc,
} from "firebase/firestore"; 
import { useState } from "react";

const ProductCard = ({ image, name, etoile, price, id }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isInCart, setIsInCart] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const toggleFavorite = async () => {
    setIsFavorite((prev) => !prev);
    const favoritesRef = collection(db, "favorites");

    try {
      const q = query(favoritesRef, where("productId", "==", name));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        await addDoc(favoritesRef, {
          productId: name,
          name,
          image,
          etoile,
          addedAt: new Date(),
        });
      } else {
        querySnapshot.forEach(async (doc) => {
          await deleteDoc(doc.ref);
        });
      }
    } catch (error) {
      console.error("Error toggling favorite: ", error);
    }
  };

  const toggleCart = async () => {
    const cartRef = collection(db, "cartitems");
    const message = isInCart ? "Removed from Shopping Cart" : "Added to Shopping Cart";
    setIsInCart((prev) => !prev);
    setPopupMessage(message);

    setTimeout(() => {
      setPopupMessage("");
    }, 3000);

    try {
      const q = query(cartRef, where("productId", "==", name));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        await addDoc(cartRef, {
          productId: name,
          name,
          price,
          image,
          availability: true,
          category: "men",
          quantity: 1,
          addedAt: new Date(),
        });
      } else {
        querySnapshot.forEach(async (doc) => {
          await deleteDoc(doc.ref);
        });
      }
    } catch (error) {
      console.error("Error toggling cart: ", error);
    }
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        i <= rating ? (
          <AiFillStar key={i} style={{ fontSize: "20px", color: "#FFA92E" }} />
        ) : (
          <AiOutlineStar key={i} style={{ fontSize: "20px", color: "#FFA92E" }} />
        )
      );
    }
    return stars;
  };

  return (
    <div className="relative flex flex-col border border-gray-300 bg-gray-200 rounded-lg shadow-md m-2 w-full sm:w-[45vw] md:w-[30vw] lg:w-[20vw]">
      <img
        src={image}
        alt={name}
        className="w-full h-auto object-contain rounded-t-lg"
      />

      <div className="p-4">
        <div className="flex justify-between items-center">
          <p className="font-medium text-lg sm:text-xl lg:text-2xl text-gray-800">
            {name}
          </p>
          <div className="flex">{renderStars(etoile)}</div>
        </div>
        <div className="flex justify-between items-center mt-4">
          <p className="font-medium text-lg sm:text-xl lg:text-2xl text-gray-900">
            <span className="text-base sm:text-lg">$</span> {price}
          </p>
          <div className="flex space-x-3">
            <div onClick={toggleFavorite} className="cursor-pointer">
              {isFavorite ? (
                <VscHeartFilled style={{ fontSize: "26px", color: "red" }} />
              ) : (
                <VscHeart style={{ fontSize: "26px", color: "red" }} />
              )}
            </div>
            <div onClick={toggleCart} className="cursor-pointer">
              {isInCart ? (
                <MdShoppingCart style={{ fontSize: "30px", color: "#000" }} />
              ) : (
                <GiShoppingCart style={{ fontSize: "30px", color: "#000" }} />
              )}
            </div>
          </div>
        </div>
      </div>

      {popupMessage && (
        <div className="absolute bg-[#FFA92E] text-white text-xl p-4 rounded-lg shadow-lg z-10 flex items-center transition-opacity duration-300 ease-in-out opacity-100 w-[20vw]">
          <IoCloseSharp
            className="cursor-pointer text-white hover:text-gray-800 mr-2 mb-4 top-2 absolute right-2"
            onClick={() => setPopupMessage("")}
            style={{ fontSize: "22px" }}
          />
          <div className="flex-grow text-white">{popupMessage}</div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;

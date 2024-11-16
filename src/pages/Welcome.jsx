import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";import Herosection from "C:/Users/Aya Bani/projets/e-commerce/src/components/Herosection"
import ProductsContainer from "C:/Users/Aya Bani/projets/e-commerce/src/components/ProductsContainer"
import ExploreProducts from "C:/Users/Aya Bani/projets/e-commerce/src/components/ExploreProducts"
import SocialMedia from "../components/SocialMedia"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "C:/Users/Aya Bani/projets/e-commerce/firebaseConfig.js";

const Welcome = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        // Redirect if user is not logged in
        navigate("/signin");
      } else {
        // Replace this with your role-check logic.
        const userRole = user.role || "user"; // Replace with actual role-fetching logic
        if (userRole === "admin") {
          navigate("/dashboard");
        }
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  return (
    <div>
      <Navbar />
      <Herosection />
      <ProductsContainer />
      <ExploreProducts />
      <SocialMedia />
      <Footer />
    </div>
  );
};

export default Welcome;

// ProductDetails.js
import React from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebaseConfig";  // Assuming Firebase setup
import { doc, getDoc } from "firebase/firestore";

const ProductDetails = () => {
  const { productId } = useParams();  // Extract productId from URL
  const [product, setProduct] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const productDoc = await getDoc(doc(db, "products", productId));  // Get product from Firestore using productId
        if (productDoc.exists()) {
          setProduct(productDoc.data());
        } else {
          console.error("Product not found");
        }
      } catch (error) {
        console.error("Error fetching product details:", error);
      } finally {
        setLoading(false);
      }
    };

    if (productId) {
      fetchProductDetails();
    }
  }, [productId]);

  if (loading) return <p>Loading...</p>;
  if (!product) return <p>Product not found</p>;

  return (
    <div className="p-6">
      <div>
        <img src="" alt="" />
      </div>
      <div>
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <p className="text-lg">{product.etoile}</p>
      <p className="mt-4 text-lg">{product.description}</p>
      <p className="mt-4">{product.color}</p>
      <p className="mt-2 text-xl font-semibold">Price: ${product.price}</p>
      </div>


    </div>
  );
};

export default ProductDetails;

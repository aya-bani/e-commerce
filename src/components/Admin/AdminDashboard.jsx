import { db } from "C:/Users/Aya Bani/projets/e-commerce/firebaseConfig.js";
import { collection, addDoc } from "firebase/firestore";
import { productcards } from "../../data"; 

function AdminDashboard() {
  const handleAddProducts = async () => {
    try {
      const productCollection = collection(db, "product");
      for (const product of productcards) {
        await addDoc(productCollection, product);
      }
      alert("Products added successfully!");
    } catch (error) {
      console.error("Error adding products: ", error);
    }
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <button onClick={handleAddProducts}>Add Products to Firestore</button>
    </div>
  );
}

export default AdminDashboard;

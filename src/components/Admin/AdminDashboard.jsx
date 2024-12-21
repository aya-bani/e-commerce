import { db } from "../../firebaseConfig.js";
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
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

  const handleRemoveProducts = async () => {
    try {
      const productCollection = collection(db, "product");
      const querySnapshot = await getDocs(productCollection);

      const deletePromises = querySnapshot.docs.map((docSnapshot) => 
        deleteDoc(doc(db, "product", docSnapshot.id))
      );

      await Promise.all(deletePromises);

      alert("All products deleted successfully!");
    } catch (error) {
      console.error("Error deleting products: ", error);
    }
  };

  return (
    // <div >
    //   <div>
    //   <h1>Admin Dashboard</h1>
    //   <p>Hello Aya</p>
    //   <button className="bg-yellow-500 m-4 p-2 rounded" onClick={handleAddProducts}>Add Products to Firestore</button>
    //   <button className="bg-yellow-500 m-4 p-2 rounded" onClick={handleRemoveProducts}>Delete All Products from Firestore</button>
    
    //   </div>
      
    //   <div>

    //   </div>
    
    
    
    // </div>
    <div className="flex bg-white h-screen">
      {/* Sidebar */}
      <aside className="w-64 text-purple-500 flex flex-col border-r border-gray-200">
        {/* Logo */}
        <div className="p-4 flex items-center space-x-2">
          <div className="w-8 h-8 bg-white rounded-full flex justify-center items-center">
            <span className="text-purple-600 font-bold">W</span> {/* Replace with your logo */}
          </div>
          <span className="text-xl font-semibold">Brand</span>
        </div>

        {/* Menu */}
        <nav className="flex-1">
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="flex items-center text-white px-4 py-2 bg-purple-700 rounded-md"
              >
                <i className="fas fa-home mr-3"></i>
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center px-4 py-2 hover:bg-purple-500  hover:text-white rounded-md"
              >
                <i className="fas fa-users mr-3"></i>
                Products
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center px-4 py-2 hover:bg-purple-500 hover:text-white  rounded-md"
              >
                <i className="fas fa-folder mr-3"></i>
                Customers
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center px-4 py-2 hover:bg-purple-500 hover:text-white  rounded-md"
              >
                <i className="fas fa-calendar mr-3"></i>
                Income
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center px-4 py-2 hover:bg-purple-500 hover:text-white  rounded-md"
              >
                <i className="fas fa-file mr-3"></i>
                Promote
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center px-4 py-2 hover:bg-purple-500 hover:text-white rounded-md"
              >
                <i className="fas fa-chart-line mr-3"></i>
                Help
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-white flex flex-col">
        {/* Top Navbar */}
        <header className="p-4 bg-white shadow flex justify-between items-center">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 border rounded-md w-1/3"
          />
          <div className="flex items-center space-x-4">
            <i className="fas fa-bell text-gray-500"></i> {/* FontAwesome Icon */}
            <img
              src="https://via.placeholder.com/40"
              alt="User Avatar"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 bg-gray-white p-8">
          <div className="border-dashed border-4 border-gray-300 h-full flex items-center justify-center">
            Content Area
          </div>
        </div>
      </main>
    </div>
  );
}

export default AdminDashboard;
